"use client"

export default function ContributionGraph() {
  // Using the GitHub username from the portfolio
  const githubUsername = "GarvThakral"

  return (
    <div className="bg-[#201C2B] rounded-md border border-[#2D2B3A] p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-mono text-[#F8F8F2]">contribution_activity</h3>
        <div className="text-xs text-[#A39DAC] font-mono">
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF7EDB] hover:underline"
          >
            @{githubUsername}
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-md border border-[#2D2B3A] bg-[#13111C]">
        <iframe
          src={`https://github.com/users/${githubUsername}/contributions`}
          width="100%"
          height="170"
          className="scale-[0.98] origin-top-left"
          style={{
            border: "none",
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
          title="GitHub contributions"
        ></iframe>
      </div>

      <div className="mt-4 text-xs text-[#A39DAC] font-mono text-center">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#80FFEA] hover:underline"
        >
          View full profile on GitHub
        </a>
      </div>
    </div>
  )
}
