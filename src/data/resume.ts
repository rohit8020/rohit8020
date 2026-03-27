export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export interface ImpactMetric {
  id: string;
  value: string;
  label: string;
  detail: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface FeaturedWorkItem {
  id: string;
  title: string;
  category: string;
  period: string;
  summary: string;
  stack: string[];
  bullets: string[];
  outcomes: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface Achievement {
  id: string;
  text: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string[];
}

export const resumeData = {
  name: "Rohit Gangwar",
  title: "Backend Software Engineer",
  email: "rohitgangwar8020@gmail.com",
  summary:
    "Backend Software Engineer with 2.5+ years of experience building scalable distributed systems using Java (Spring Boot) and cloud-native technologies. Experienced in designing high-performance APIs, event-driven systems, and microservices architecture. Additionally skilled in frontend development using React.js and building Generative AI systems (RAG, LangChain, multi-agent architectures).",
  focusAreas: [
    "Spring Boot APIs",
    "Distributed systems",
    "Cloud-native platforms",
    "RAG and agentic AI",
  ],
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/rohit8020",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohit-gangwar-9b65281b4/",
    },
    {
      id: "twitter",
      label: "Twitter",
      href: "https://twitter.com/rohit_8020",
    },
    {
      id: "leetcode",
      label: "LeetCode",
      href: "https://leetcode.com/rohit8020/",
    },
    {
      id: "codechef",
      label: "CodeChef",
      href: "https://www.codechef.com/users/rohit8020",
    },
    {
      id: "codeforces",
      label: "Codeforces",
      href: "https://codeforces.com/profile/rohit8020",
    },
  ] as SocialLink[],
  impactMetrics: [
    {
      id: "uptime",
      value: "99.99%",
      label: "Uptime",
      detail: "Policy lifecycle APIs sustained production reliability across insurance release cycles.",
    },
    {
      id: "testing",
      value: "95%",
      label: "Test coverage",
      detail: "Claims workflows shipped with strong unit and integration coverage using JUnit and Mockito.",
    },
    {
      id: "automation",
      value: "40%",
      label: "Manual effort reduced",
      detail: "AI logistics automation cut repetitive document processing with structured extraction workflows.",
    },
    {
      id: "auditing",
      value: "25%",
      label: "Faster audit turnaround",
      detail: "Multi-agent GenAI auditing flows improved delivery speed and observability in production.",
    },
  ] as ImpactMetric[],
  experience: [
    {
      id: "infosys",
      company: "Infosys",
      role: "Software Development Engineer (Full Stack + GenAI)",
      location: "Gurugram, India",
      period: "October 2023 - Present",
      bullets: [
        "Designed a role-based auth service using Spring Boot, Spring Security, Spring Cloud, JWT, and MySQL, enforcing RBAC across policyholder, agent, and admin roles with stateless session management for high-concurrency insurance workflows.",
        "Developed a Policy Lifecycle module handling issuance, renewal, and lapse management via Hibernate/JPA and PostgreSQL; exposed RESTful APIs consumed by agent portals and mobile clients, sustaining 99.99% uptime and lifting transaction throughput by 18%.",
        "Shipped a Claims Processing service with Spring Cloud Gateway and event-driven state transitions (submitted to verified to approved or rejected); containerized it with Docker and Kubernetes and wired CI/CD through GitHub Actions for zero-downtime rollouts, reaching 95% unit and integration test coverage with JUnit and Mockito.",
        "Architected an AI logistics automation pipeline using Google ADK, MCP, and FastAPI with prompt-engineered agents; enabled structured data extraction via Document AI, cutting manual processing effort by 40% and improving extraction accuracy by 60%.",
        "Integrated GCP services including Cloud Logging, GCS, and Cloud SQL/PostgreSQL with parallel bulk-document ingestion and email pipelines, boosting throughput and overall system capacity by 25%.",
        "Developed a full-stack GenAI auditing platform with FastAPI and React.js/TypeScript, orchestrating multi-agent LLM workflows through LangChain and LangGraph and streaming structured Python logs into Grafana dashboards; reduced audit turnaround time by 25% and improved extraction precision by 30%.",
        "Implemented a RAG-based architecture assistant using embeddings, vector databases, and Next.js to generate system diagrams from natural-language specifications, improving design documentation speed and accuracy by 10%.",
      ],
    },
    {
      id: "anastrat",
      company: "Anastrat",
      role: "Software Development Engineer Intern",
      location: "Remote",
      period: "November 2022 - July 2023",
      bullets: [
        "Contributed to a full-stack trading platform covering real-time market data, order management, and CRM workflows within Agile sprints, partnering with cross-functional teams to ship features on schedule.",
        "Engineered and deployed RESTful APIs using Node.js and React.js, reducing API response time by 30%; modeled optimized MongoDB schemas that cut data retrieval latency by 20%.",
      ],
    },
  ] as ExperienceItem[],
  featuredWork: [
    {
      id: "snapgrid",
      title: "Snapgrid",
      category: "Featured Project",
      period: "December 2024",
      summary:
        "Distributed microservices platform with centralized gateway, stateless authentication, and a modular React frontend built for reliability, maintainability, and scale.",
      stack: [
        "Java",
        "Spring Boot",
        "Microservices",
        "MySQL",
        "React.js",
        "Tailwind CSS",
      ],
      bullets: [
        "Architected a distributed system with a centralized gateway and stateless authentication, aligning service boundaries for scalable traffic management.",
        "Integrated CI/CD and automated quality checks with 95% test coverage while applying AOP and circuit breaker patterns for resilient service behavior.",
        "Built a modular frontend with optimized routing, state management, and lazy loading to improve load time and maintainability.",
      ],
      outcomes: [
        "99.9% uptime",
        "95% automated test coverage",
        "35% better scalability and reliability",
      ],
    },
    {
      id: "rbac-auth",
      title: "Insurance RBAC Auth Service",
      category: "Professional Highlight",
      period: "Infosys",
      summary:
        "Spring-based authentication and authorization service for high-concurrency insurance workflows across policyholder, agent, and admin personas.",
      stack: [
        "Spring Boot",
        "Spring Security",
        "Spring Cloud",
        "JWT",
        "MySQL",
      ],
      bullets: [
        "Designed stateless session management for concurrent insurance workflows without sacrificing role isolation.",
        "Enforced RBAC across three core personas with production-ready token flows and service integration points.",
      ],
      outcomes: [
        "RBAC across 3 user roles",
        "Stateless session design",
        "Built for high concurrency",
      ],
    },
    {
      id: "claims-pipeline",
      title: "Claims Processing Pipeline",
      category: "Professional Highlight",
      period: "Infosys",
      summary:
        "Event-driven claims service with gateway-managed access, state transitions, containerized deployment, and zero-downtime delivery pipelines.",
      stack: [
        "Spring Cloud Gateway",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "JUnit",
        "Mockito",
      ],
      bullets: [
        "Modeled state transitions from submitted to verified to approved or rejected for clearer claims orchestration.",
        "Containerized deployments and automated rollouts so releases could ship with minimal operational disruption.",
      ],
      outcomes: [
        "Zero-downtime rollouts",
        "95% test coverage",
        "Event-driven lifecycle management",
      ],
    },
    {
      id: "genai-platforms",
      title: "GenAI Auditing and RAG Systems",
      category: "Professional Highlight",
      period: "Infosys",
      summary:
        "A blend of FastAPI, React.js, LangChain, LangGraph, embeddings, and vector databases used to automate auditing and generate architecture artifacts from natural-language input.",
      stack: [
        "FastAPI",
        "React.js",
        "TypeScript",
        "LangChain",
        "LangGraph",
        "Vector DB",
        "Next.js",
      ],
      bullets: [
        "Developed a multi-agent auditing platform with structured logging and Grafana observability for real-time insight into LLM workflows.",
        "Implemented a RAG-based architecture assistant that generated system diagrams from natural-language specifications.",
      ],
      outcomes: [
        "25% faster audit turnaround",
        "30% higher extraction precision",
        "10% faster design documentation",
      ],
    },
  ] as FeaturedWorkItem[],
  skillGroups: [
    {
      id: "backend",
      title: "Backend",
      items: [
        "Java",
        "Spring Boot",
        "Python",
        "FastAPI",
        "Spring Security",
        "Microservices",
        "REST APIs",
      ],
    },
    {
      id: "distributed",
      title: "Distributed Systems",
      items: [
        "Kafka",
        "Redis",
        "Event-Driven Architecture",
        "Scalability",
        "Fault Tolerance",
      ],
    },
    {
      id: "cloud",
      title: "Cloud and DevOps",
      items: ["Docker", "Kubernetes", "GCP", "CI/CD", "GitHub Actions"],
    },
    {
      id: "genai",
      title: "GenAI and ML",
      items: [
        "LangChain",
        "LangGraph",
        "RAG",
        "Vector DB",
        "OpenAI API",
        "Gemini API",
        "HuggingFace",
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      id: "core",
      title: "Core CS",
      items: [
        "Data Structures and Algorithms",
        "System Design",
        "Generative AI",
        "Competitive Programming",
        "Agile/Scrum",
      ],
    },
  ] as SkillGroup[],
  achievements: [
    {
      id: "icpc",
      text: "ICPC Regionalist in the Kanpur-Mathura region with a 128th-rank finish.",
    },
    {
      id: "gfg",
      text: "Global Rank 592 with 164 out of 175 points in GFG Job-A-Thon-11.",
    },
    {
      id: "club",
      text: "Led the Programming Club, organizing coding events and growing the developer community.",
    },
  ] as Achievement[],
  education: [
    {
      id: "knit",
      institution: "Kamla Nehru Institute of Technology, Sultanpur",
      degree: "Bachelor of Technology in Information Technology",
      location: "Sultanpur, India",
      period: "August 2019 - June 2023",
      details: ["CGPA: 8.2/10"],
    },
  ] as EducationItem[],
};
