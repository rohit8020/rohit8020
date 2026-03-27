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
  github?: string;
}

export interface AdditionalProjectItem {
  id: string;
  name: string;
  summary: string;
  stack: string[];
  bullets: string[];
  github: string;
  demo: string;
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
        "Integrated CI/CD and automated quality checks while applying AOP and circuit breaker patterns for resilient service behavior.",
        "Built a modular frontend with optimized routing, state management, and lazy loading to improve load time and maintainability.",
      ],
      outcomes: [
        "99.9% uptime",
        "35% better scalability and reliability",
        "95% automated test coverage",
        "95% test coverage"
      ],
      github: "https://github.com/rohit8020/Pinterest",
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
  additionalProjects: [
    {
      id: "burger-builder",
      name: "Burger Builder App",
      summary:
        "Interactive burger customization app focused on dynamic ingredient selection, instant visual feedback, and predictable frontend state management.",
      stack: [
        "React.js",
        "Redux",
        "Firebase",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      bullets: [
        "Built a configurable burger-building workflow where users can add and remove ingredients with immediate UI updates.",
        "Used Redux to manage pricing, ingredient state, and order flow in a predictable single-page experience.",
        "Integrated Firebase-backed hosting and application flows to practice full frontend deployment and state-driven UI design.",
      ],
      github: "https://github.com/rohit8020/burger-builder-app",
      demo: "https://burger-builder-30783.web.app/",
    },
    {
      id: "seekho-clone",
      name: "Seekho.ai Clone",
      summary:
        "Frontend recreation of the Seekho.ai landing experience with reusable React components and polished layout replication.",
      stack: ["React.js", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Recreated the visual hierarchy and core landing-page sections of the Seekho.ai experience in a responsive interface.",
        "Translated the original design into reusable React components to improve maintainability across sections.",
        "Used vanilla styling and JavaScript interactions to match layout behavior without relying on heavy UI libraries.",
      ],
      github: "https://github.com/rohit8020/seekho.ai_clone",
      demo: "https://capable-gelato-f80083.netlify.app/",
    },
    {
      id: "skyscribe",
      name: "Skyscribe",
      summary:
        "Cloud-backed note-taking application designed for simple online access to personal notes from any browser session.",
      stack: ["React.js", "Firebase", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a lightweight note-taking interface that lets users create and access notes remotely instead of storing them locally.",
        "Used Firebase to support hosted data access and a simple cloud-connected workflow.",
        "Designed the React frontend to keep note interactions fast and straightforward for everyday use.",
      ],
      github: "https://github.com/rohit8020/Skyscribe",
      demo: "https://skyyscribe.netlify.app/",
    },
    {
      id: "knitsales",
      name: "KNITSALES",
      summary:
        "Campus marketplace for students to buy, sell, and donate used items within the KNIT community.",
      stack: [
        "Node.js",
        "MongoDB",
        "Express.js",
        "Gmail API",
        "EJS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      bullets: [
        "Created a college-focused marketplace where students could publish listings for buying, selling, and donating used goods.",
        "Connected interested buyers to sellers through college email based communication to preserve a campus-only exchange flow.",
        "Implemented the platform with server-rendered views, MongoDB data models, and Gmail API driven communication support.",
      ],
      github: "https://github.com/rohit8020/knitsales",
      demo: "https://knitsales.up.railway.app/",
    },
    {
      id: "iptv",
      name: "IP-TV",
      summary:
        "Streaming web application for browsing and playing free Indian television channels sourced from public IPTV playlists.",
      stack: ["Node.js", "Express.js", "EJS", "HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a simple IPTV viewing interface around publicly available channel playlists for Indian television streams.",
        "Parsed and surfaced channel links from the IPTV-org repository so users could access streams through a clean web UI.",
        "Used a lightweight Node and Express setup to deliver the browsing and playback experience.",
      ],
      github: "https://github.com/rohit8020/IPTV_app",
      demo: "https://iptvapp.up.railway.app/",
    },
    {
      id: "realtime-crud",
      name: "Realtime CRUD App",
      summary:
        "Real-time CRUD platform where updates made by one client immediately propagate to every connected browser session.",
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "React.js",
        "Semantic UI",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      bullets: [
        "Implemented create, read, update, and delete operations with instant multi-client synchronization through Socket.IO.",
        "Separated the backend realtime event layer from the React frontend to keep live updates responsive and maintainable.",
        "Used MongoDB for persistence and browser-based UI updates to simulate collaborative data editing behavior.",
      ],
      github: "https://github.com/rohit8020/CRUD_Frontend_Socket.IO_React",
      demo: "https://rtcrud.netlify.app/",
    },
    {
      id: "breakout-game",
      name: "Breakout Game",
      summary:
        "Classic browser arcade game built in vanilla JavaScript using object-oriented patterns and custom game-loop logic.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Built paddle, ball, brick, collision, and scoring mechanics from scratch in a browser-based game interface.",
        "Used JavaScript classes and object-oriented design to model gameplay entities and state transitions clearly.",
        "Practiced game-loop timing, collision detection, and responsive keyboard interactions without external libraries.",
      ],
      github: "https://github.com/rohit8020/breakout_game",
      demo: "https://rohit8020.github.io/breakout_game/",
    },
    {
      id: "tic-tac-toe",
      name: "Tic-Tac-Toe",
      summary:
        "Two-player browser game focused on clean turn management, win-state checks, and lightweight interaction design.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Implemented a simple head-to-head Tic-Tac-Toe experience with turn switching and board state tracking.",
        "Added win and draw detection logic to handle complete game cycles with clear player feedback.",
        "Used plain HTML, CSS, and JavaScript to keep the project minimal while reinforcing core DOM skills.",
      ],
      github: "https://github.com/rohit8020/tic-tac-toe_Game",
      demo: "https://rohit8020.github.io/tic-tac-toe_Game/",
    },
    {
      id: "calculator-app",
      name: "Calculator App",
      summary:
        "Lightweight browser calculator for everyday arithmetic operations with a simple and accessible interface.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a compact calculator UI that supports common arithmetic operations in a straightforward workflow.",
        "Handled input sequencing and display updates with vanilla JavaScript for reliable expression evaluation.",
        "Focused on clarity and usability so the interface stays intuitive across basic mathematical interactions.",
      ],
      github: "https://github.com/rohit8020/calculator_app",
      demo: "https://rohit8020.github.io/calculator_app/",
    },
    {
      id: "stop-watch",
      name: "Stop Watch",
      summary:
        "Timing utility with start, pause, and reset controls implemented as a clean browser-based stopwatch interface.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Implemented core stopwatch controls with live elapsed-time updates in the browser.",
        "Managed timing state transitions for start, pause, and reset interactions without external dependencies.",
        "Used the project to sharpen DOM manipulation and interval-based state handling in JavaScript.",
      ],
      github: "https://github.com/rohit8020/stop-watch-app",
      demo: "https://rohit8020.github.io/stop-watch-app/",
    },
    {
      id: "digital-clock",
      name: "Digital Clock",
      summary:
        "Real-time digital clock that continuously reflects the current time through lightweight DOM updates.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a live clock interface that refreshes the displayed time in real time using JavaScript timers.",
        "Designed a clean browser widget around continuous DOM updates without unnecessary complexity.",
        "Used the project to practice time formatting, repeated rendering, and minimal UI composition.",
      ],
      github: "https://github.com/rohit8020/digital_clock_app",
      demo: "https://rohit8020.github.io/digital_clock_app/",
    },
    {
      id: "form-validation",
      name: "Form Validation App",
      summary:
        "Client-side validation project built to provide immediate feedback on common form input mistakes.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Implemented browser-based validation rules to catch incomplete or invalid user input before submission.",
        "Added immediate visual feedback patterns to make errors easier to understand and correct.",
        "Used the project to reinforce input handling, conditional rendering, and basic UX validation flows.",
      ],
      github: "https://github.com/rohit8020/form-validation",
      demo: "https://rohit8020.github.io/digital_clock_app/",
    },
    {
      id: "password-generator",
      name: "Password Generator App",
      summary:
        "Utility app for generating randomized passwords through a simple browser interface.",
      stack: ["HTML", "CSS", "JavaScript"],
      bullets: [
        "Built a password generator that creates randomized output for stronger and more convenient credential creation.",
        "Used JavaScript logic to handle character selection and output generation inside a minimal UI.",
        "Focused on speed and simplicity so users could generate new passwords with minimal friction.",
      ],
      github: "https://github.com/rohit8020/password_generator",
      demo: "https://rohit8020.github.io/password_generator/",
    },
  ] as AdditionalProjectItem[],
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
