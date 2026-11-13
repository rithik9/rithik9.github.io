export const links = {
  linkedin: "https://www.linkedin.com/in/rithik-kishen-saride/",
  github: "https://github.com/rithik9",
  resume: "/resume/Resume_Rithik_Kishen_Saride.pdf",
};

export const navItems = [
  { no: "01", name: "Me", link: "#me" },
  { no: "02", name: "Experience", link: "#experience" },
  { no: "03", name: "Skills", link: "#skills" },
  { no: "04", name: "Contact", link: "#contact" },
];

export const roles = [
  {
    company: "Mango Mass Media",
    position: "Junior Software Developer · Hyderabad",
    date: "NOV 2024 — PRESENT",
    summary:
      "Full stack work on a digital asset management platform, plus a Python service for AI document extraction. I also review code, ship releases through GitLab CI/CD, and take feedback directly from clients and end users.",
    contributions: [
      {
        area: "Performance & search",
        title: "Faster answers, at scale.",
        description:
          "Owned search end to end across React, REST APIs and MongoDB. Added pagination and compound indexes, taking p95 search latency from 2.8s to 1.1s.",
        tools: "React / REST / MongoDB",
        result: "-61% p95",
      },
      {
        area: "API performance",
        title: "Same APIs, less waiting.",
        description:
          "Designed and tuned Node.js / Express APIs serving 10K+ requests a day. Indexing, aggregation tuning and caching brought p95 latency from 420ms to 250ms.",
        tools: "Node.js / Express / MongoDB",
        result: "-40% p95",
      },
      {
        area: "Document intelligence",
        title: "Less paperwork. More progress.",
        description:
          "Built a FastAPI microservice with the legal and product teams that extracts 75+ fields at 90%+ accuracy across 3K+ agreements. Batching and adaptive rate limiting raised throughput from 50–75 to 350–400 documents a day.",
        tools: "Python / FastAPI / Vertex AI / Pydantic",
        result: "5x throughput",
      },
      {
        area: "Automation & reliability",
        title: "The boring work, automated.",
        description:
          "Replaced timeout-prone XLSX/CSV exports with an asynchronous queue pipeline backed by MongoDB and AWS S3.",
        tools: "Node.js / Queues / AWS S3",
        result: "33+ hrs saved / wk",
      },
      {
        area: "Product engineering",
        title: "Build the form once.",
        description:
          "Built the home dashboard for a reporting microservice, and a schema-driven React form system used across 10+ modules, with state in Redux Toolkit and shared validation covered by Jest tests.",
        tools: "React / Redux Toolkit / Material UI / Jest",
        result: "10+ modules",
      },
    ],
  },
  {
    company: "Mango Mass Media",
    position: "Software Developer Intern · Hyderabad",
    date: "OCT 2024 — NOV 2024",
    summary: "Data pipelines and reporting.",
    contributions: [
      {
        area: "Data pipelines",
        title: "Four hours, down to fifteen minutes.",
        description:
          "Pipelines processing 100K+ records a day, with schema checks, batched I/O and retries. Reporting turnaround dropped from 4 hours to 15 minutes.",
        tools: "Python / SQL",
        result: "4h → 15 min",
      },
      {
        area: "Reporting",
        title: "Numbers people can check themselves.",
        description:
          "Reporting queries and Apache Superset dashboards tracking viewership, revenue and operational metrics for 50+ stakeholders.",
        tools: "SQL / Apache Superset",
        result: "50+ stakeholders",
      },
    ],
  },
];

export const education = {
  school: "GITAM University",
  degree: "B.Tech, Computer Science · CGPA 8.25/10",
  date: "JUN 2019 — MAY 2023",
};

export const skills = [
  { title: "Languages & web", names: "JavaScript (ES6+) · TypeScript · Python · SQL · HTML5 · CSS3" },
  { title: "Frontend", names: "React · Redux Toolkit · Material UI · React Router · Responsive design · Browser performance" },
  { title: "Backend", names: "Node.js · Express · FastAPI · REST APIs · Microservices · Queues · JWT auth" },
  { title: "Data & cloud", names: "MongoDB · MySQL · Indexing · Aggregation pipelines · Caching · AWS (EC2, S3, SES) · ETL" },
  { title: "Testing & tooling", names: "TDD · Jest · Git · GitLab CI/CD · Linux · PM2 · Docker · Webpack · Postman" },
  { title: "AI", names: "Vertex AI · OCR · RAG · Pydantic" },
];
