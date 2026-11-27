const fs = require('node:fs');
const path = require('node:path');
const source = path.join(__dirname, 'portfoliofinal');
const destination = path.join(__dirname, '.portfolio-preview');
fs.mkdirSync(destination, { recursive: true });
for (const directory of ['app', 'lib', 'public']) fs.cpSync(path.join(source, directory), path.join(destination, directory), { recursive: true });
const components = ['hero-section', 'projects-grid', 'skills-section', 'education-section', 'contact-section', 'command-bar', 'terminal', 'theme-provider', 'ui/button', 'ui/badge', 'ui/dialog'];
for (const component of components) {
  const target = path.join(destination, 'components', component + '.tsx');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(path.join(source, 'components', component + '.tsx'), target);
}
for (const file of ['tailwind.config.ts', 'postcss.config.mjs', 'tsconfig.json']) fs.copyFileSync(path.join(source, file), path.join(destination, file));
// Keep real checks enabled in this isolated validation build.
fs.writeFileSync(path.join(destination, 'next.config.mjs'), 'export default { images: { unoptimized: true } }\n');
fs.writeFileSync(path.join(destination, 'package.json'), JSON.stringify({
  name: 'portfolio-offline-preview', private: true,
  scripts: { build: 'next build', dev: 'next dev -p 3100', typecheck: 'tsc --noEmit' },
  dependencies: {
    '@radix-ui/react-dialog': '1.1.4', '@radix-ui/react-slot': '1.1.1',
    'class-variance-authority': '0.7.1', clsx: '2.1.1',
    'framer-motion': '12.25.0', 'lucide-react': '0.454.0',
    next: '15.5.22', 'next-themes': '0.4.6', react: '19.2.0', 'react-dom': '19.2.0',
    'tailwind-merge': '2.6.0', 'tailwindcss-animate': '1.0.7'
  },
  devDependencies: { '@types/node': '^22', '@types/react': '^19', '@types/react-dom': '^19', postcss: '8.5.1', tailwindcss: '3.4.17', typescript: '5.9.3' }
}, null, 2));
console.log('Prepared isolated preview at ' + destination);
