// Edit this file to update your resume; the page renders itself from this data.
window.RESUME = {
  name: "Aravind Chandra Sekaran",
  title: "Staff / Principal Engineer · Technical Lead",
  tagline: "Financial & Transaction Systems · Distributed Platforms on AWS · AI-Enabled Delivery",
  location: "Chennai, India",
  summary: [
    "Senior engineer with 13+ years designing and building enterprise-scale, distributed systems, with deep, hands-on experience in financial and transaction-processing platforms — core banking (transaction processing, disbursement, reconciliation, credit-bureau integration) and high-volume payroll. Currently a Lead Consultant at Thoughtworks, where I recently architected a high-throughput aggregation service on AWS handling engagement and lead-management metrics at production scale.",
    "Strong across the full software development lifecycle in Agile teams — design, development, testing, deployment, and production support — working in Python, JavaScript, and C#/.NET with REST APIs, relational and NoSQL data stores, and event-driven, distributed architectures. In 2025 I founded and led an AI-first delivery experiment, applying AI/LLM tooling to workflow automation, categorization, and operational efficiency, achieving ~60% faster delivery against team baselines."
  ],
  contact: {
    email: "caravind07@gmail.com",
    phone: "", // add a number here to show it publicly
    linkedin: "https://www.linkedin.com/in/aravind-8105877020",
    github: "https://github.com/arav0710"
  },
  experience: [
    {
      role: "Lead Consultant", company: "Thoughtworks", period: "Aug 2022 – Present", location: "Chennai, India",
      groups: [
        { heading: "Distributed Aggregation Service on AWS (2024–2025)", points: [
          "Architected and delivered a high-throughput aggregation service on AWS for an events/exhibitions platform, processing exhibitor engagement metrics (profile views, document downloads, badge scans, lead capture) at production scale.",
          "Designed a per-collection DocumentDB data model with deduplication in DynamoDB and configurable increment / decrement aggregation (delta-based), explicitly documenting cost, latency, and consistency trade-offs across multiple design iterations.",
          "Built event-driven REST services and a fault-tolerant pipeline, supported by a structured, versioned design process (requirements, challenge logs, changelog) for reliable enterprise delivery."
        ]},
        { heading: "AI-First Delivery Experiment (2025–Present)", points: [
          "Founded and led an AI-first engineering team, embedding AI tooling across the full delivery lifecycle — research, analysis, planning, development, and automated testing — to reduce manual operational work.",
          "Achieved ~60% faster delivery vs. traditional team baselines; applied AI/LLM tooling to workflow automation, categorization, and AI-driven test generation."
        ]},
        { heading: "Core Responsibilities", points: [
          "Led solution design for enterprise clients, translating business requirements and user stories into technical designs and shippable software meeting security, performance, reliability, maintainability, and testing standards.",
          "Influenced coding standards, architectural patterns, and engineering best practices; mentored engineers and partnered with product, operations, and stakeholders to solve complex delivery problems."
        ]}
      ]
    },
    {
      role: "Lead Application Developer", company: "ADP India", period: "Jul 2019 – Aug 2022", location: "Chennai, India",
      points: [
        "Led development of enterprise-scale HR and payroll platforms — high-volume financial data movement and transaction processing — owning technical design from architecture through delivery and production support.",
        "Drove adoption of test automation, CI/CD, and microservices patterns across the team."
      ]
    },
    {
      role: "Senior Software Engineer", company: "CES", period: "Mar 2018 – Jun 2019", location: "Chennai, India",
      points: ["Delivered enterprise application features across the full SDLC within an Agile delivery team."]
    },
    {
      role: "Senior Project Engineer", company: "Wipro Limited", period: "Apr 2017 – Mar 2018", location: "Bengaluru, India",
      points: [
        "Built Medtronic application services — REST WebAPIs for authentication, registration, log collection, and content distribution.",
        "Designed database entities, implemented API controllers, and wrote unit, integration, and verification test suites; used temporal tables for database versioning."
      ],
      stack: ".NET, C#, ASP.NET MVC WebAPI, Azure Storage, SQL Server, MongoDB, MS-Test, NUnit"
    },
    {
      role: "Senior Developer", company: "HealthAsyst", period: "Jan 2016 – Feb 2017", location: "Bengaluru, India",
      points: [
        "Developed the authentication module and dashboard configuration for Sunrise Operation Monitor, a real-time analytics tool for patient and provider load in clinical facilities.",
        "Optimised dashboard load time by 300% through frontend and data-pipeline improvements; served as Scrum Master, leading standups, sprint delivery, and retrospectives."
      ]
    },
    {
      role: "Senior Software Engineer", company: "Craft Silicon Ltd", period: "Apr 2013 – Dec 2015", location: "Bengaluru, India",
      points: [
        "Developed core banking software (BR.net) for the microfinance sector, covering transaction processing, loan disbursement, customer management, and financial reporting.",
        "Built internal and third-party APIs for credit-bureau integration and customer credit-history lookup, supporting loan-processing decisions.",
        "Acted as both Scrum Master and Product Owner for the Credit Bureau integration; ran sprint ceremonies and maintained product documentation."
      ],
      stack: "ASP.NET, C#, JavaScript, jQuery, HighCharts, SQL Server, Oracle, TFS"
    },
    {
      role: "Software Engineer", company: "SunSmart Technologies Pvt. Ltd", period: "Dec 2011 – Apr 2013", location: "Chennai, India",
      points: ["Built features for CCMS CRM (bulk mailing, TAT integration, call-record history) and supported three major enterprise clients."]
    }
  ],
  skills: [
    { label: "Domain", items: "Financial & transaction systems (core banking, payroll, payments, reconciliation, credit-bureau integration); revenue-cycle workflows; enterprise-scale delivery" },
    { label: "Languages", items: "Python, JavaScript, C# / .NET, SQL" },
    { label: "Cloud & Infra", items: "AWS (DocumentDB, DynamoDB, ElastiCache / Redis), Azure, CI/CD pipelines, Unix / Linux" },
    { label: "Data", items: "Relational design with SQL Server & Oracle; NoSQL with MongoDB, DynamoDB, DocumentDB" },
    { label: "Architecture", items: "Distributed systems, microservices, event-driven design, REST APIs, OOP, clean / hexagonal architecture" },
    { label: "Practices", items: "Full SDLC, Agile / Scrum (Scrum Master & Product Owner), CI/CD, test automation, Git, effort estimation" },
    { label: "AI / ML", items: "AI-first delivery, agentic coding assistants, LLM-powered analysis & automation, AI test generation" }
  ],
  education: [
    { degree: "BE, Computer Science", school: "PSG College of Technology", period: "2008 – 2011" },
    { degree: "Diploma, Computer Science", school: "Sri DurgaDevi Polytechnic College", period: "2005 – 2008" }
  ],
  extras: [
    { label: "Certifications", items: "MCP · Spot Award (Honors)" },
    { label: "Languages", items: "English (Professional), Telugu (Native), Tamil (Native)" }
  ]
};
