const fs = require('node:fs');
const path = require('node:path');
const { Readable } = require('node:stream');
const { pipeline } = require('node:stream/promises');
const npmModules = 'C:/Program Files/nodejs/node_modules/npm/node_modules';
const cacache = require(path.join(npmModules, 'cacache'));
const tar = require(path.join(npmModules, 'tar'));
const semver = require(path.join(npmModules, 'semver'));
const cache = 'C:/Users/Garv/AppData/Local/npm-cache/_cacache';
const preview = path.join(__dirname, '.portfolio-preview');
const rootModules = path.join(preview, 'node_modules');
const installed = new Map();
const failures = [];
let count = 0;

async function main() {
  const entries = await cacache.ls(cache);
  const packages = new Map();
  for (const [key, entry] of Object.entries(entries)) {
    const match = key.match(/https:\/\/registry\.npmjs\.org\/(.+)\/-\/([^/]+)\.tgz$/);
    if (!match) continue;
    const name = decodeURIComponent(match[1]);
    const version = match[2].slice(name.split('/').at(-1).length + 1);
    if (!semver.valid(version)) continue;
    if (!packages.has(name)) packages.set(name, []);
    packages.get(name).push({ version, key, integrity: entry.integrity });
  }
  async function install(name, range, parentDir = rootModules, optional = false) {
    const rootVersion = installed.get(path.join(rootModules, name));
    if (rootVersion && semver.satisfies(rootVersion, range)) return;
    const destination = path.join(rootVersion ? parentDir : rootModules, name);
    const existing = installed.get(destination);
    if (existing && semver.satisfies(existing, range)) return;
    const candidates = (packages.get(name) || []).filter((item) => semver.satisfies(item.version, range)).sort((a,b) => semver.rcompare(a.version,b.version));
    const candidate = candidates[0];
    if (!candidate) {
      if (!optional) failures.push(`${name}@${range}`);
      return;
    }
    const { data } = await cacache.get(cache, candidate.key);
    // Inspect the manifest before extracting platform-specific optional packages.
    let manifest;
    await pipeline(Readable.from(data), tar.t({ onentry(entry) {
      if (/^[^/]+\/package\.json$/.test(entry.path)) {
        let content = '';
        entry.on('data', chunk => content += chunk);
        entry.on('end', () => { manifest = JSON.parse(content); });
      }
    } }));
    if (!manifest) throw new Error('Missing package manifest: ' + name);
    if (manifest.os && !manifest.os.includes('win32') && !manifest.os.includes('any')) return;
    if (manifest.cpu && !manifest.cpu.includes('x64')) return;
    fs.mkdirSync(destination, { recursive: true });
    await pipeline(Readable.from(data), tar.x({ cwd: destination, strip: 1 }));
    installed.set(destination, candidate.version);
    count++;
    if (count % 40 === 0) console.log(`Restored ${count} cached packages...`);
    for (const [dep, requested] of Object.entries(manifest.dependencies || {})) await install(dep, requested, path.join(destination, 'node_modules'));
    for (const [dep, requested] of Object.entries(manifest.optionalDependencies || {})) await install(dep, requested, path.join(destination, 'node_modules'), true);
  }
  const manifest = JSON.parse(fs.readFileSync(path.join(preview, 'package.json'), 'utf8'));
  // Install all explicit roots first so transitive dependencies can share them.
  for (const [name, range] of Object.entries({ ...manifest.dependencies, ...manifest.devDependencies })) await install(name, range);
  console.log(`Extracted ${count} cached packages without network access.`);
  const uniqueFailures = [...new Set(failures)];
  console.log(uniqueFailures.length ? 'Missing cached dependencies: ' + uniqueFailures.join(', ') : 'All required cached dependencies are available.');
  process.exitCode = uniqueFailures.length ? 1 : 0;
}
main().catch(error => { console.error(error); process.exitCode = 1; });
