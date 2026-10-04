// Edit this file to update your resume; the page renders itself from this data.
// Text style: simple technical English. Short sentences. One idea each. Active voice.
window.RESUME = {
  name: "Aravind Chandra Sekaran",
  title: "Staff / Principal Engineer · Technical Lead",
  tagline: "I build safe, fast systems for money and data.",
  location: "Chennai, India",
  summary: [
    "I am a senior engineer with 13+ years of experience. I build large, distributed systems. I know financial systems well: core banking, payroll, and credit-bureau checks.",
    "I am a Lead Consultant at Thoughtworks. I designed a fast aggregation service on AWS. It counts engagement and lead data at production scale.",
    "I work in Agile teams across the full software life cycle. I use Python, JavaScript, and C#/.NET. In 2025, I started an AI-first delivery team. It delivers about 60% faster than normal teams."
  ],
  stats: [
    { value: "13+", label: "years in software" },
    { value: "~60%", label: "faster delivery with AI-first team" },
    { value: "300%", label: "faster dashboard load" },
    { value: "7", label: "companies" }
  ],
  contact: {
    email: "caravind07@gmail.com",
    phone: "", // add a number here to show it publicly
    linkedin: "https://www.linkedin.com/in/aravind-8105877020",
    github: "https://github.com/arav0710"
  },
  schematic: {
    title: "How the AWS aggregation service works",
    note: "Simplified view of the service I designed at Thoughtworks (2024–2025).",
    steps: [
      { name: "Engagement events", detail: "Profile views, document downloads, badge scans, lead capture" },
      { name: "Event-driven REST services", detail: "Receive each event. Fault-tolerant pipeline" },
      { name: "DynamoDB", detail: "Removes duplicate events" },
      { name: "Delta aggregation", detail: "Adds or subtracts the change (increment / decrement)" },
      { name: "DocumentDB", detail: "One data model for each collection" },
      { name: "Metrics for exhibitors", detail: "Engagement and lead numbers" }
    ]
  },
  experience: [
    {
      role: "Lead Consultant", company: "Thoughtworks", period: "Aug 2022 – Present", location: "Chennai, India",
      groups: [
        { heading: "Distributed Aggregation Service on AWS (2024–2025)", points: [
          "Designed and delivered a fast aggregation service on AWS for an events and exhibitions platform.",
          "The service counts exhibitor engagement: profile views, document downloads, badge scans, and lead capture.",
          "Created a DocumentDB data model for each collection. Used DynamoDB to remove duplicate events.",
          "Made the aggregation configurable. It adds or subtracts changes (delta-based).",
          "Wrote down the cost, speed, and consistency trade-offs in each design version.",
          "Built event-driven REST services and a fault-tolerant pipeline.",
          "Used a versioned design process: requirements, challenge logs, and a changelog."
        ]},
        { heading: "AI-First Delivery Experiment (2025–Present)", points: [
          "Started and led an AI-first engineering team.",
          "Used AI tools in all delivery steps: research, analysis, planning, development, and testing.",
          "Delivered about 60% faster than normal team baselines.",
          "Used AI and LLM tools for workflow automation, categorization, and test generation."
        ]},
        { heading: "Core Responsibilities", points: [
          "Led solution design for enterprise clients.",
          "Changed business needs and user stories into technical designs.",
          "Delivered software that meets security, performance, reliability, and test standards.",
          "Set coding standards and architecture patterns.",
          "Mentored engineers. Worked with product teams, operations, and stakeholders."
        ]}
      ]
    },
    {
      role: "Lead Application Developer", company: "ADP India", period: "Jul 2019 – Aug 2022", location: "Chennai, India",
      points: [
        "Led development of large HR and payroll platforms.",
        "Owned the technical design from architecture to production support.",
        "The platforms moved large amounts of financial data.",
        "Introduced test automation, CI/CD, and microservices to the team."
      ]
    },
    {
      role: "Senior Software Engineer", company: "CES", period: "Mar 2018 – Jun 2019", location: "Chennai, India",
      points: ["Delivered enterprise application features in an Agile team, from design to release."]
    },
    {
      role: "Senior Project Engineer", company: "Wipro Limited", period: "Apr 2017 – Mar 2018", location: "Bengaluru, India",
      points: [
        "Built services for the Medtronic application.",
        "Created REST WebAPIs for sign-in, registration, log collection, and content distribution.",
        "Designed database entities. Wrote API controllers.",
        "Wrote unit, integration, and verification tests.",
        "Used temporal tables for database versions."
      ],
      stack: ".NET, C#, ASP.NET MVC WebAPI, Azure Storage, SQL Server, MongoDB, MS-Test, NUnit"
    },
    {
      role: "Senior Developer", company: "HealthAsyst", period: "Jan 2016 – Feb 2017", location: "Bengaluru, India",
      points: [
        "Built the sign-in module and dashboard setup for Sunrise Operation Monitor.",
        "Sunrise Operation Monitor shows patient and provider load in clinics in real time.",
        "Made the dashboard load 300% faster. Improved the frontend and the data pipeline.",
        "Worked as Scrum Master. Led stand-ups, sprints, and retrospectives."
      ]
    },
    {
      role: "Senior Software Engineer", company: "Craft Silicon Ltd", period: "Apr 2013 – Dec 2015", location: "Bengaluru, India",
      points: [
        "Built core banking software (BR.net) for microfinance.",
        "The software handles transactions, loan payout, customers, and financial reports.",
        "Built internal and third-party APIs for credit-bureau checks and credit-history lookup.",
        "These APIs help loan decisions.",
        "Worked as Scrum Master and Product Owner for the Credit Bureau integration.",
        "Ran sprint meetings. Kept the product documents."
      ],
      stack: "ASP.NET, C#, JavaScript, jQuery, HighCharts, SQL Server, Oracle, TFS"
    },
    {
      role: "Software Engineer", company: "SunSmart Technologies Pvt. Ltd", period: "Dec 2011 – Apr 2013", location: "Chennai, India",
      points: ["Built features for CCMS CRM: bulk mailing, TAT integration, and call-record history.", "Supported three large enterprise clients."]
    }
  ],
  skills: [
    { label: "Domain", items: ["Core banking", "Payroll", "Payments", "Reconciliation", "Credit-bureau integration", "Revenue-cycle workflows"] },
    { label: "Languages", items: ["Python", "JavaScript", "C# / .NET", "SQL"] },
    { label: "Cloud & Infra", items: ["AWS", "DocumentDB", "DynamoDB", "ElastiCache / Redis", "Azure", "CI/CD", "Unix / Linux"] },
    { label: "Data", items: ["SQL Server", "Oracle", "MongoDB", "DynamoDB", "DocumentDB"] },
    { label: "Architecture", items: ["Distributed systems", "Microservices", "Event-driven design", "REST APIs", "OOP", "Clean / hexagonal"] },
    { label: "Practices", items: ["Full SDLC", "Agile / Scrum", "Scrum Master", "Product Owner", "Test automation", "Git", "Effort estimation"] },
    { label: "AI / ML", items: ["AI-first delivery", "Agentic coding assistants", "LLM automation", "AI test generation"] }
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
