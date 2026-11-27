// Personal portfolio content. Recent work and stack are adapted from
// AxiomAutomation/src/app/pages/{Work,WorkHerth,WorkVisionforge,
// WorkLeadintel,WorkInfluenceos,WorkD2b,About}.tsx.
// Project figures describe the documented case studies, not live counters.
export const profile = {
  name: "Garv Thakral",
  title: "AI & ML Engineer",
  subtitle: "Full-stack development · Agentic systems · MLOps",
  summary:
    "I build AI systems and full-stack products, from computer vision and agentic workflows to the infrastructure that keeps them running.",
  about:
    "Founder & engineer behind Herth, a community commerce platform for women entrepreneurs. My work through Axiom Automation spans AI-assisted labeling, sales automation, content platforms, and marketplaces.",
  education: "Bachelor of Computer Applications, Christ University (2022–2025).",
  email: "garvthakralfx@gmail.com",
  github: "https://github.com/GarvThakral",
  linkedin: "https://www.linkedin.com/in/garv-thakral08/",
  x: "https://x.com/Garvfx",
}

export type Project = {
  id: string
  title: string
  category: string
  description: string
  role?: string
  image?: string
  imageAlt?: string
  tags: string[]
  highlights: string[]
  metrics?: { value: string; label: string }[]
  githubUrl?: string
  liveUrl?: string
}

export const featuredProjects: Project[] = [
  {
    id: "herth",
    title: "Herth",
    category: "Community commerce",
    role: "Founder & Engineer",
    description:
      "A community commerce platform helping women entrepreneurs get discovered locally, with a social feed, nearby seller discovery, and an engagement-ranked storefront.",
    image: "/projects/herth.png",
    imageAlt: "Herth community commerce platform preview",
    tags: ["Next.js", "React", "Express", "Prisma", "PostgreSQL", "Cashfree"],
    metrics: [
      { value: "500+", label: "Women entrepreneurs" },
      { value: "27", label: "Data models" },
    ],
    highlights: [
      "Built a social feed, geo-aware seller discovery, and membership-based storefronts.",
      "Designed engagement-weighted ranking with recency signals and bounded paid boosts.",
      "Implemented idempotent payment reconciliation and atomic seller onboarding.",
      "Integrated Cloudinary media, Resend email, and Jitsi video across the platform.",
    ],
  },
  {
    id: "visionforge",
    title: "VisionForge",
    category: "Computer vision & MLOps",
    role: "Architect & Lead Engineer",
    description:
      "An AI-assisted labeling and training workspace that turns raw images and video into datasets and models, with interactive segmentation and visual workflow pipelines.",
    image: "/projects/label.png",
    imageAlt: "VisionForge computer vision labeling workspace preview",
    tags: ["PyTorch", "SAM2 / SAM3", "DINOv2", "YOLOv11", "FastAPI", "Next.js"],
    metrics: [
      { value: "125k+", label: "Images labeled" },
      { value: "87%", label: "AI assist rate" },
    ],
    highlights: [
      "Combined SAM2/SAM3 interactive segmentation with DINOv2 semantic template matching.",
      "Built topologically sorted workflow DAGs and training orchestration for YOLO, Detectron2, and RF-DETR.",
      "Optimized semantic matching to operate within a 6 GB GPU memory budget.",
      "Implemented project lifecycle management and role-based access control.",
    ],
  },
  {
    id: "leadintel",
    title: "LeadIntel",
    category: "Agentic workflows",
    role: "ML & Backend Architect",
    description:
      "A closed-loop sales outreach engine connecting lead discovery, contact enrichment, AI voice calls, and transcript-based intent scoring.",
    image: "/projects/lead-gen.png",
    imageAlt: "LeadIntel sales discovery and outreach dashboard preview",
    tags: ["FastAPI", "Apollo API", "Zeliq", "Vapi", "OpenRouter", "React"],
    metrics: [
      { value: "450", label: "Leads discovered" },
      { value: "40", label: "Calls completed" },
    ],
    highlights: [
      "Combined Apollo discovery, semantic relevance filtering, and Serper email lookup.",
      "Integrated Zeliq waterfall enrichment across 40+ providers with asynchronous requests.",
      "Connected Vapi voice calls to structured status callbacks and transcript analysis.",
      "Built composite intent scoring with rule-based fallbacks when upstream AI services fail.",
    ],
  },
  {
    id: "influence-os",
    title: "Influence OS",
    category: "AI content platform",
    role: "API & Refactor Lead",
    description:
      "An AI content and social scheduling platform, refactored into a modular API with resilient third-party integrations and validated frontend responses.",
    image: "/projects/influenceos.png",
    imageAlt: "Influence OS content strategy and scheduling interface preview",
    tags: ["FastAPI", "Next.js", "TypeScript", "Zod", "LinkedIn OAuth", "Facebook Graph"],
    metrics: [
      { value: "994 → 140", label: "Main API lines" },
      { value: "26", label: "API routes" },
    ],
    highlights: [
      "Split a monolithic backend into router factories and focused service modules.",
      "Centralized outbound HTTP requests with timeouts, exponential backoff, and consistent error mapping.",
      "Added transparent password-hash upgrades during successful login.",
      "Integrated Zod runtime validation with typed Next.js API utilities.",
    ],
  },
  {
    id: "d2b",
    title: "D2B",
    category: "B2B drone marketplace",
    role: "Full-Stack Architect",
    description:
      "A two-sided drone services marketplace connecting clients and pilots through multi-location quote requests, airspace checks, secure asset delivery, and payments.",
    image: "/projects/drone.png",
    imageAlt: "D2B commercial drone marketplace preview",
    tags: ["React", "Express", "Prisma", "PostgreSQL", "AWS S3", "Razorpay"],
    metrics: [
      { value: "342", label: "FAA checks" },
      { value: "52.6%", label: "Bidding success" },
    ],
    highlights: [
      "Built multi-location RFQs and side-by-side pilot quote comparisons.",
      "Scheduled FAA ArcGIS airspace checks across four layers with change alerts.",
      "Delivered private S3 uploads through presigned URLs and expiring download tokens.",
      "Integrated digital acceptance signatures and verified Razorpay payment webhooks.",
    ],
  },
]

// Earlier portfolio projects are retained as an accessible project archive.
export const earlierProjects: Project[] = [
  {
    id: "bengali-nli",
    title: "Bengali NLI System",
    category: "Natural language processing",
    description: "Fine-tuned XLM-RoBERTa-Large with LoRA to classify Bengali premise-hypothesis pairs on the XNLI dataset.",
    tags: ["Python", "Transformers", "LoRA", "XNLI", "NLP"],
    githubUrl: "https://github.com/GarvThakral/NLIProject",
    highlights: ["Achieved an 84% F1-score on Bengali XNLI.", "Used parameter-efficient LoRA training for a low-resource language."],
  },
  {
    id: "document-qa",
    title: "Document Intelligence & QA System",
    category: "Retrieval-augmented generation",
    description: "A RAG-based question-answering system for 1,000+ multi-format documents, using SentenceTransformers, ChromaDB, LangChain, and Gemini.",
    tags: ["Python", "RAG", "ChromaDB", "LangChain", "AWS", "GenAI"],
    githubUrl: "https://github.com/GarvThakral/ChatBotCode",
    highlights: ["Indexed and retrieved information across 1,000+ documents.", "Deployed inference on AWS Lambda with LangChain and Gemini integration."],
  },
  {
    id: "emotion-drift",
    title: "Emotion Drift Monitoring System",
    category: "NLP & model monitoring",
    description: "Fine-tuned DistilBERT on GoEmotions to track emotional shifts in 50,000+ YouTube comments, with an ML pipeline and drift monitoring dashboard.",
    tags: ["TensorFlow", "DistilBERT", "ZenML", "MLflow", "Streamlit", "Evidently"],
    githubUrl: "https://github.com/GarvThakral/EDM",
    highlights: ["Tracked emotion shifts across 50,000+ comments.", "Integrated ZenML, MLflow, and Evidently drift alerts in Streamlit.", "Achieved an F1-score of 0.62 with optimized training."],
  },
  {
    id: "job-dashboard",
    title: "Job Dashboard",
    category: "Full-stack application",
    description: "A job application tracker with sorting, filtering, and AI-assisted resume suggestions, built with React, Prisma, and PostgreSQL.",
    tags: ["React", "Prisma", "PostgreSQL", "AI Integration"],
    githubUrl: "https://github.com/GarvThakral/JobAnalysisFrontend",
    highlights: ["Tracked 50+ job applications with modular React components.", "Generated 200+ AI-assisted resume suggestions.", "Improved review efficiency by 25% with an 80% user adoption rate."],
  },
  {
    id: "skilltrade",
    title: "SkillTrade",
    category: "Real-time collaboration",
    description: "A token-based skill exchange platform with Dyte video calls, WebSocket chat, an offer system, and secure user authentication.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Dyte API"],
    githubUrl: "https://github.com/GarvThakral/SkillSwapFE",
    highlights: ["Integrated video calls, real-time chat, and conversation history.", "Maintained 99% uptime across 100+ test sessions."],
  },
  {
    id: "movie-recommender",
    title: "Recommendation System",
    category: "Machine learning",
    description: "A content-based movie recommendation engine using TF-IDF and cosine similarity, served through a Flask API and Next.js frontend.",
    tags: ["Python", "Flask", "Next.js", "TF-IDF", "Cosine Similarity"],
    githubUrl: "https://github.com/GarvThakral/MovieRecommenderModel",
    highlights: ["Processed 1,000+ movie records and handled 200 daily requests.", "Achieved 85% accuracy in user feedback."],
  },
]

export const projects = [...featuredProjects, ...earlierProjects]

export const skillsCategories = [
  { id: "agents", title: "Agents & LLMs", description: "Stateful workflows, retrieval, and resilient AI integrations.", skills: ["Python", "LangGraph", "LangChain", "RAG", "LLM Fine-tuning", "LoRA", "Vapi", "OpenRouter", "ChromaDB", "RLHF"] },
  { id: "ai", title: "AI & Vision", description: "Model training, natural language processing, and interactive computer vision.", skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face", "OpenCV", "SAM2 / SAM3", "DINOv2", "YOLO", "NLP", "Weights & Biases"] },
  { id: "mlops", title: "MLOps & Data", description: "Reproducible training, data pipelines, and model monitoring.", skills: ["ZenML", "MLflow", "DVC", "Great Expectations", "Apache Airflow", "dbt", "Evidently", "Data Validation", "Model Monitoring", "Streamlit"] },
  { id: "backend", title: "Backend", description: "Asynchronous APIs, background jobs, authentication, and payment integrations.", skills: ["FastAPI", "Node.js", "Express", "Celery", "REST APIs", "GraphQL", "WebSockets", "Pydantic", "SQLAlchemy", "RBAC", "Cashfree", "Razorpay"] },
  { id: "frontend", title: "Frontend", description: "Typed, responsive interfaces for complex product workflows.", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Framer Motion", "Zod", "Redux", "React Query"] },
  { id: "database", title: "Databases", description: "Relational models, caching, indexing, and reliable transactions.", skills: ["PostgreSQL", "Redis", "Prisma", "MongoDB", "Firebase", "SQL", "Data Modeling", "Query Optimization", "Migrations", "Transactions"] },
  { id: "cloud", title: "Cloud & DevOps", description: "Cloud deployments, infrastructure automation, and observability.", skills: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform", "GitHub Actions", "AWS S3", "AWS Lambda", "Vercel", "Prometheus"] },
  { id: "tools", title: "Tools & Design", description: "The tools I use to build, debug, and shape product experiences.", skills: ["Git", "Postman", "VS Code", "Figma", "Blender", "Adobe Photoshop", "After Effects", "UI/UX Design"] },
]

export const coreSkills = ["Python", "PyTorch", "LangGraph", "FastAPI", "Next.js", "TypeScript", "PostgreSQL", "Prisma", "ZenML", "MLflow", "Docker", "Kubernetes", "AWS", "GCP"]
