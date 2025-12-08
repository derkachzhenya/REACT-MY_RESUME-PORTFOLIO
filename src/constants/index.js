import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a full-stack developer specializing in building fast, scalable, and secure web applications using Laravel, Vue.js, MySQL, and modern DevOps tools.

Over the past 6 years, I've developed e-commerce platforms, CRM/ERP systems, analytics dashboards, task-management tools, and high-traffic content websites — handling both backend architecture and frontend development.



I focus on clean architecture, maintainable code, API design, performance optimization, and smooth user experience. I stay up to date with 2025 best practices: Laravel Octane, queues & jobs, advanced caching strategies (Redis, Cloudflare), SPA development, component-driven UI, Dockerized workflows, CI/CD automation, and cloud deployment.



I'm seeking a full-time or remote opportunity where I can contribute my experience, deliver high-quality software, and help teams build scalable digital products.`;

export const ABOUT_TEXT = `I am a motivated and detail-oriented full-stack PHP developer with strong experience in Laravel and Vue.js. I enjoy solving complex problems, improving system performance, and writing clean, production-ready code. Over the years, I've worked on projects that required database design, API integration, UI development, deployment automation, and long-term support.



I continuously learn new tools and stay updated with modern engineering practices, including testing (PHPUnit, Pest), event-driven development, queue systems, RESTful API standards, Docker environments, and cloud hosting on AWS.

I work effectively in agile teams, communicate clearly, and take ownership of tasks from planning to deployment.



My goal is to join a forward-thinking company where I can contribute to meaningful projects and grow as an engineer.`;

export const EDUCATION = [
  {
    year: "2006 - 2009",
    role: "PHP developer",
    description: ` Novokachovskiy college`,
  },
  {
    year: "2010 - 2015",
    role: "Machine Engineering",
    description: `Kherson National Technical University`,
  },
];


export const EXPERIENCES = [
  {
    year: "2025",
    role: "Founder & Full-Stack Developer",
    company: "FijiEco",
    description: `Built and launched a high-performance travel platform from scratch, reaching over 1,000 daily users and ranking on Google for competitive keywords within the first four months. Designed the system architecture, database structure, API endpoints, content workflows, front-end components, and deployment pipelines.

Key achievements: Developed a scalable web platform using Laravel 12, Vue.js 3, Inertia.js, Tailwind CSS, MySQL, and Cloudflare for performance optimization. Implemented dynamic content management, reusable UI components, multilingual support, SEO-optimized routing, JSON-LD structured data, and Open Graph automation. Designed custom admin panel modules using FilamentPHP, including articles, destinations, categories, and media management. Achieved 95+ Lighthouse performance scores on many pages through image optimization, caching strategies, and Cloudflare CDN configuration. Automated deployment using GitHub Actions, Docker containers, and NGINX on an Ubuntu server. Improved page load speed by optimizing database queries, caching (Redis), preloading assets, and configuring Cloudflare Full Page Cache. Built data-driven analytics logic and integrated RUM metrics to monitor user performance. Applied modern SEO practices (canonical URLs, meta-generation, sitemap automation, structured metadata) to grow organic traffic.`,
    technologies: ["Laravel", "Vue.js", "Inertia.js", "Tailwind", "MySQL", "Redis", "Filament", "Docker", "GitHub Actions", "Cloudflare", "NGINX", "Ubuntu", "SEO", "Web Performance Optimization"],
  },
  {
    year: "2023 - 2024",
    role: "Full Stack developer",
    company: "Cool Orca LTD.",
    description: `Worked in a team developing and maintaining web applications using PHP,  Laravel, and Vue. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "PHP", "Vue.js", "React", "JavaScript", "MySQL", "GitHub", "AWS"],
  },
  {
    year: "2020 - 2023",
    role: "Full Stack Web developer",
    company: "Freelance",
    description: `Experienced Full Stack Developer with in-depth knowledge of PHP, Laravel, and Vue.js. Specializing in building high-performance web applications using cutting-edge technologies and best development practices.`,
    technologies: ["HTML", "CSS", "PHP", "Vue.js", "React", "MySQL", "GitHub", "AWS"],
  },
];

export const SKILLS_UPGRADE_2025 = {
  title: "2025 Skills Upgrade",
  subtitle: "Professional Growth & Skill Development",
  introduction: "In 2025, I focused on sharpening my technical skills, improving development efficiency, and adopting modern engineering practices that help deliver scalable, secure, and high-performance applications.",
  categories: [
    {
      category: "Backend & Architecture",
      items: [
        "Adopted Laravel 12 with improved routing, caching, queue systems, and architectural patterns",
        "Implemented domain-driven structure for cleaner project organization and maintainability",
        "Optimized databases using advanced indexing, query refactoring, eager loading, and caching",
        "Introduced Redis caching strategies (tag-based cache invalidation, query caching, page caching)",
        "Worked with Laravel Octane principles to understand high-performance PHP applications"
      ]
    },
    {
      category: "Frontend Development",
      items: [
        "Deepened experience with Vue.js 3 + Composition API",
        "Improved SPA architecture with Inertia.js for seamless page transitions",
        "Built reusable UI components in Tailwind CSS with responsive and accessible design",
        "Adopted component-driven and atomic UI design patterns"
      ]
    },
    {
      category: "Performance Optimization",
      items: [
        "Achieved 95+ Lighthouse scores on core pages",
        "Reduced page load times using image optimization, lazy loading, preload strategies, and HTTP/2 features",
        "Improved TTFB by optimizing server configuration, caching, and database queries",
        "Configured Cloudflare Full Page Cache, APO techniques, and edge caching rules"
      ]
    },
    {
      category: "DevOps & Infrastructure",
      items: [
        "Built automated CI/CD pipelines using GitHub Actions (deployments, tests, builds)",
        "Worked with Docker containers for local development and staging environments",
        "Set up NGINX+Ubuntu production infrastructure with optimized configuration",
        "Integrated monitoring tools and RUM performance metrics",
        "Adopted secure deployment practices (SSH, environment separation, secrets management)"
      ]
    },
    {
      category: "SEO & Organic Growth",
      items: [
        "Automated generation of meta tags, canonical links, structured JSON-LD metadata",
        "Built dynamic sitemaps and improved crawlability",
        "Increased organic traffic through performance, content structure, and internal linking strategy"
      ]
    },
    {
      category: "Soft & Professional Skills",
      items: [
        "Improved communication in English with native speakers",
        "Learned to write clearer documentation and task planning",
        "Strengthened problem-solving and debugging approach",
        "Became more comfortable working with full product ownership"
      ]
    }
  ]
};

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "PHP", "Laravel", "React", "Tailwind css", "MySql"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "PHP", "Laravel", "Vue", "MySql", "GitHub", "AWS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "PHP", "Laravel", "Bootstrap", "MySql", "GitHub"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["PHP", "Laravel", "Vue", "Tailwind css", "mySQL", "GitHub", "AWS"],
  },
];

export const TECHNOLOGIES = [
  {
    category: "Backend",
    items: ["Laravel", "PHP 8+", "MySQL", "Redis", "Eloquent ORM", "REST APIs", "Authentication & RBAC", "Queues & Jobs", "Laravel Octane"]
  },
  {
    category: "Frontend",
    items: ["Vue.js 3", "Composition API", "JavaScript (ES2020+)", "Tailwind CSS", "Bootstrap", "SPA routing"]
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "GitHub Actions (CI/CD)", "AWS (EC2, S3, RDS)", "Nginx", "Linux server administration"]
  },
  {
    category: "Other Skills",
    items: ["Clean Architecture", "SOLID", "Testing (PHPUnit / Pest)", "Performance Optimization", "Caching Strategies", "API Integrations"]
  }
];

export const CONTACT = {
  address: "Kyiv Region, Ukraine (GMT+2)",
  phoneNo: "+380687401354",
  email: "derkachyevhen@gmail.com",
};
