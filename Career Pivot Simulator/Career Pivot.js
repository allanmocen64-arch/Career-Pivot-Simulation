// ─── Role Data ────────────────────────────────────────────────────────────────

const roleData = {
  "UX Designer": {
    median: 52000, jobs: "38k", baseMonths: 14,
    skills: ["User research", "Wireframing", "Figma prototyping", "Usability testing", "Portfolio case studies"],
    courses: ["Google UX Design Certificate", "Figma UI UX Design Essentials", "Interaction Design Foundation UX Path", "UX Research & Strategy (Coursera)", "Design Thinking Bootcamp (IDEO U)"],
    stories: [
      ["Support to UX", "Used customer pain-point knowledge to build three product redesign case studies and landed a junior UX role in 8 months."],
      ["Teacher to UX", "Translated lesson planning into research facilitation, then paired a bootcamp with volunteer design work."]
    ]
  },
  "Data Analyst": {
    median: 48000, jobs: "74k", baseMonths: 12,
    skills: ["SQL", "Spreadsheets", "Python basics", "Dashboard design", "Business storytelling"],
    courses: ["Google Data Analytics Certificate", "SQL for Data Analysis (Mode)", "Python for Everybody (Coursera)", "Power BI for Beginners", "Statistics for Data Science (Khan Academy)"],
    stories: [
      ["Operations to Analytics", "Automated weekly reports, built a Tableau portfolio, and moved into a reporting analyst role in 6 months."],
      ["Sales to Analyst", "Turned CRM cleanup projects into evidence of data quality, segmentation, and revenue analysis skills."]
    ]
  },
  "Product Manager": {
    median: 72000, jobs: "46k", baseMonths: 18,
    skills: ["Product discovery", "Roadmapping", "Stakeholder management", "Metrics design", "User interviews"],
    courses: ["Digital Product Management (BU)", "Product Strategy Fundamentals (Reforge)", "Become a Product Manager (Udemy)", "Agile Product Ownership (Scrum.org)", "Lean Product & Lean Analytics (Coursera)"],
    stories: [
      ["Support to PM", "Owned recurring customer insights reports, then moved into associate PM through an internal transfer."],
      ["Teacher to PM", "Reframed curriculum design as product thinking and shipped a student planning app prototype."]
    ]
  },
  "Software Developer": {
    median: 68000, jobs: "121k", baseMonths: 20,
    skills: ["JavaScript", "Git & version control", "REST APIs", "Testing", "Project portfolio"],
    courses: ["The Odin Project (free)", "CS50x (Harvard, free)", "Full-Stack Open (University of Helsinki)", "JavaScript Algorithms (freeCodeCamp)", "100 Days of Code Python Bootcamp"],
    stories: [
      ["Designer to Developer", "Built interactive portfolio projects, contributed to a design system, and moved into frontend engineering."],
      ["Accountant to Developer", "Created finance workflow automations, then used those projects to land a software apprenticeship."]
    ]
  },
  "Cybersecurity Analyst": {
    median: 60000, jobs: "31k", baseMonths: 16,
    skills: ["Networking fundamentals", "Security operations", "SIEM tools", "Incident response", "Risk documentation"],
    courses: ["Google Cybersecurity Certificate", "CompTIA Security+ (Professor Messer, free)", "Blue Team Labs Online", "TryHackMe SOC Level 1 Path", "SANS Cyber Aces (free)"],
    stories: [
      ["IT Support to Security", "Used helpdesk ticket patterns to show security awareness and earned Security+ before a SOC role."],
      ["Operations to GRC", "Mapped process controls into audit evidence and shifted into a risk analyst role."]
    ]
  },
  "Digital Marketing Manager": {
    median: 50000, jobs: "52k", baseMonths: 10,
    skills: ["SEO", "Paid ads", "Google Analytics", "Content strategy", "Campaign reporting"],
    courses: ["Google Digital Marketing Certificate", "HubSpot Content Marketing (free)", "Meta Social Media Marketing Certificate", "SEMrush SEO Fundamentals (free)", "Google Ads Search Certification (free)"],
    stories: [
      ["Sales to Marketing", "Converted sales objection data into campaign messaging and grew a portfolio with local businesses."],
      ["Designer to Marketing", "Combined brand skills with analytics and moved into growth marketing after freelance campaigns."]
    ]
  },
  "Lawyer": {
    median: 88000, jobs: "18k", baseMonths: 48,
    skills: ["Legal research", "Legal writing", "Case analysis", "Professional ethics", "Court procedure"],
    courses: ["Introduction to Law (Coursera)", "Legal Research and Writing (edX)", "Contract Law Fundamentals (Coursera)", "Criminal Justice & the Rule of Law (edX)", "How to Argue (Duke University, Coursera)"],
    stories: [
      ["Paralegal to Lawyer", "Built legal research experience, completed formal training, and moved into supervised practice before qualifying."],
      ["Business to Law", "Used contract and compliance exposure as a bridge into legal studies and internship opportunities."]
    ]
  },
  "Nurse": {
    median: 46000, jobs: "64k", baseMonths: 30,
    skills: ["Patient care", "Anatomy & physiology", "Clinical documentation", "Medication safety", "Communication"],
    courses: ["Anatomy and Physiology (Khan Academy, free)", "Foundations of Nursing (Coursera)", "Basic Life Support (Red Cross)", "Healthcare Communication (edX)", "Infection Prevention Basics (WHO, free)"],
    stories: [
      ["Caregiver to Nurse", "Used patient-care exposure to enter formal nursing training and qualify for entry-level clinical roles."],
      ["Admin to Nursing", "Moved from healthcare administration into nursing school after volunteering in a clinic."]
    ]
  },
  "Accountant": {
    median: 54000, jobs: "42k", baseMonths: 18,
    skills: ["Bookkeeping", "Financial reporting", "Tax basics", "Excel for accounting", "Accounting software"],
    courses: ["Bookkeeping Basics (QuickBooks Training)", "Financial Accounting Fundamentals (Coursera)", "Excel for Accounting (Udemy)", "Xero Accounting Certification (free)", "Introduction to Corporate Finance (edX)"],
    stories: [
      ["Cashier to Accountant", "Started with bookkeeping courses, then handled small-business accounts before moving into junior accounting."],
      ["Admin to Finance", "Used invoice and payroll exposure to build a path into accounts assistant roles."]
    ]
  },
  "Human Resources Manager": {
    median: 58000, jobs: "29k", baseMonths: 14,
    skills: ["Recruitment", "Employee relations", "HR policies", "Payroll basics", "People analytics"],
    courses: ["Human Resource Management (Coursera)", "Recruitment and Selection (LinkedIn Learning)", "Employment Law Basics (edX)", "SHRM Essentials of HR (SHRM)", "People Analytics (Wharton, Coursera)"],
    stories: [
      ["Admin to HR", "Moved from office coordination into recruitment support, then expanded into employee records and onboarding."],
      ["Teacher to HR", "Used coaching and communication experience to enter learning and development roles."]
    ]
  },
  "Chef": {
    median: 38000, jobs: "36k", baseMonths: 14,
    skills: ["Food safety & hygiene", "Knife skills", "Menu planning", "Kitchen operations", "Food cost control"],
    courses: ["Food Safety Certificate (ServSafe)", "Culinary Foundations (America's Test Kitchen)", "Menu Costing Basics (Typsy)", "Knife Skills Masterclass (Udemy)", "Professional Cooking Fundamentals (edX)"],
    stories: [
      ["Home Cook to Chef", "Built a food-safety foundation, practiced prep skills, and entered a kitchen through commis chef work."],
      ["Hospitality to Chef", "Moved from service into kitchen operations by assisting prep and documenting recipes."]
    ]
  },
  "Mechanic": {
    median: 42000, jobs: "33k", baseMonths: 18,
    skills: ["Vehicle diagnostics", "Engine systems", "Electrical basics", "Tool safety", "Maintenance records"],
    courses: ["Automotive Maintenance Basics (Coursera)", "Vehicle Electrical Systems (Udemy)", "Engine Diagnostics (AutoZone DIY)", "ASE Study Guides (free)", "EV Technology Fundamentals (Coursera)"],
    stories: [
      ["Driver to Mechanic", "Used vehicle familiarity to enter a garage apprenticeship and build diagnostic skills."],
      ["Technician to Mechanic", "Shifted from general repair work into automotive systems through practical certification."]
    ]
  },
  "Architect": {
    median: 74000, jobs: "15k", baseMonths: 42,
    skills: ["Technical drawing", "Building codes", "AutoCAD / Revit", "Design portfolio", "Site documentation"],
    courses: ["Architectural Drawing (Coursera)", "AutoCAD Essential Training (LinkedIn Learning)", "Revit Architecture Fundamentals (Udemy)", "Building Design Fundamentals (edX)", "Introduction to Sustainable Design (Coursera)"],
    stories: [
      ["Designer to Architecture", "Used visual design skills to build a portfolio, learn CAD, and enter architectural assistant work."],
      ["Construction to Architecture", "Used site experience to understand drawings, codes, and project documentation."]
    ]
  },
  "Journalist": {
    median: 44000, jobs: "21k", baseMonths: 12,
    skills: ["Interviewing", "Research", "News writing", "Fact checking", "Media ethics"],
    courses: ["Journalism Basics (Poynter, free)", "News Writing (Coursera)", "Investigative Reporting (ICIJ, free)", "Data Journalism (Knight Center, free)", "Verification Handbook (First Draft, free)"],
    stories: [
      ["Teacher to Journalist", "Used communication skills to pitch education stories and build a published writing portfolio."],
      ["Marketing to Journalism", "Moved from content writing into reporting by learning interviews and verification."]
    ]
  },
  "Business Owner": {
    median: 66000, jobs: "self-led", baseMonths: 10,
    skills: ["Market research", "Sales fundamentals", "Budgeting & cash flow", "Operations", "Customer service"],
    courses: ["Small Business Management (Coursera)", "Sales Fundamentals (HubSpot Academy, free)", "Business Finance Basics (edX)", "Starting a Business (Entrepreneurship Specialization, Coursera)", "Lean Startup Methodology (Udemy)"],
    stories: [
      ["Employee to Founder", "Started with a small service offer, tested demand, then grew through repeat customers."],
      ["Creator to Business", "Turned a skill into a paid offer by tracking costs, pricing, and customer feedback."]
    ]
  }
};

// ─── Pivot-specific timelines ─────────────────────────────────────────────────
// Key format: "Current Role|Target Role"
// Falls back to target-only timeline if combination not found

const pivotTimelines = {

  // ── To UX Designer ──────────────────────────────────────────────────────────
  "Customer Support Specialist|UX Designer": [
    ["Leverage your user insight", "Your daily exposure to user frustration and support tickets is a goldmine for UX — start documenting pain points as informal research notes. Study UX basics: personas, journey maps, and what a design team actually ships. Take the Google UX Design Certificate to build a structured foundation.", "Google UX Design Certificate"],
    ["Learn the tools", "Pick up Figma — start by recreating screens of apps you support so you already know the flows. Focus on turning support pain points into redesign concepts with wireframes. Practice making clickable prototypes with clear user flows and annotated decisions.", "Figma UI UX Design Essentials"],
    ["Build two case studies", "Turn a real support problem into a full UX case study: define the problem, show your research, walk through iterations, and present the final screens. One redesign project and one original flow is enough to get interviews. Publish on Behance or a personal site.", "Interaction Design Foundation UX Path"],
    ["Apply for junior roles", "Target junior UX, UX researcher, and product design intern roles. Your support background is a genuine differentiator — frame it as 'I already know what users struggle with.' Reach out to PMs and designers at companies you've supported.", "UX Research & Strategy (Coursera)"]
  ],
  "Teacher|UX Designer": [
    ["Map teaching skills to UX", "Lesson planning is essentially information architecture — you already structure content for an audience. Learn UX vocabulary: research, personas, wireframes, usability testing. The Google UX Design Certificate maps well to how teachers think about learning objectives.", "Google UX Design Certificate"],
    ["Pick up Figma and prototyping", "Spend 6-8 weeks recreating app screens in Figma — education apps are a great starting point since you understand the user. Build one clickable prototype with clear task flows. Your ability to explain design decisions clearly is already stronger than most beginners.", "Figma UI UX Design Essentials"],
    ["Build an education-focused portfolio", "Create two case studies around learning or productivity products — this niche plays directly to your background. Show the research, the iterations, and the final design with a clear narrative. Volunteer to redesign a school tool or local nonprofit's onboarding.", "Interaction Design Foundation UX Path"],
    ["Target EdTech and mission-driven companies", "Apply for junior UX roles, UX researcher roles, and content designer positions. EdTech companies actively look for people with teaching backgrounds. Frame your pivot around empathy and communication — two skills UX hiring managers always want.", "Design Thinking Bootcamp (IDEO U)"]
  ],
  "Sales Representative|UX Designer": [
    ["Connect sales instincts to UX research", "You already know how to read people and uncover what they actually want — that's the core of user research. Learn UX foundations: discovery, personas, journey mapping. Enroll in the Google UX Design Certificate to get the formal vocabulary.", "Google UX Design Certificate"],
    ["Learn Figma and wireframing", "Spend time recreating interfaces in Figma, especially in industries you've sold to. Your product knowledge from sales is a real advantage — use it to spot UX problems and propose solutions in wireframe form.", "Figma UI UX Design Essentials"],
    ["Build case studies around conversion and onboarding", "Sales experience makes you strong on conversion UX — build case studies around signup flows, onboarding screens, and landing pages where users drop off. These are highly valued by product teams.", "Interaction Design Foundation UX Path"],
    ["Pitch your customer knowledge in applications", "Apply for junior UX, growth design, and product design roles. In interviews, talk about specific customer conversations that revealed product problems. That kind of real insight is rare in UX portfolios.", "UX Research & Strategy (Coursera)"]
  ],
  "Graphic Designer|UX Designer": [
    ["Shift from visuals to user problems", "You already have the visual layer — the gap is the research and reasoning behind design decisions. Study user research methods: interviews, usability testing, personas, and journey maps. The Interaction Design Foundation UX Path is the most thorough bridge.", "Interaction Design Foundation UX Path"],
    ["Add Figma and prototyping to your workflow", "If you're not already in Figma, move there now — it's the industry standard for UX. Focus on building interactive prototypes and annotating your design decisions, not just making things look good. Practice creating flows, not just screens.", "Figma UI UX Design Essentials"],
    ["Reframe your portfolio around problems solved", "Rewrite your existing design case studies to lead with the problem and the user, not the aesthetic. Add at least one new project that shows a full UX process: research, wireframes, testing, iteration, and final solution.", "Google UX Design Certificate"],
    ["Apply and lean into your visual advantage", "Junior UX roles and product design roles are the right targets. Your visual skills are a genuine edge — most UX designers struggle with execution. Frame yourself as a UX designer who can also ship polished UI, not just a graphic designer who learned Figma.", "Design Thinking Bootcamp (IDEO U)"]
  ],
  "Operations Coordinator|UX Designer": [
    ["Translate process thinking into UX", "Operations work is full of workflow mapping, user pain points, and system design — you've been doing informal UX for years. Study the formal language: research, personas, journey maps, information architecture. Start the Google UX Design Certificate.", "Google UX Design Certificate"],
    ["Learn Figma through internal tools", "Start wireframing improvements to tools your team actually uses — internal dashboards, approval flows, status trackers. These make great portfolio pieces because you can show real before/after context and genuine user insight.", "Figma UI UX Design Essentials"],
    ["Build process-improvement case studies", "Turn an operational problem you've solved into a UX case study. Show the messy reality, the research you'd do, the design solution, and how you'd measure success. Operations experience gives you credibility in enterprise and B2B UX.", "Interaction Design Foundation UX Path"],
    ["Target B2B and enterprise UX roles", "Apply for junior UX, UX researcher, and service design roles. Enterprise companies value UX designers who understand operations — position yourself there. Your project management skills will help you work across teams, which UX teams desperately need.", "UX Research & Strategy (Coursera)"]
  ],

  // ── To Data Analyst ──────────────────────────────────────────────────────────
  "Customer Support Specialist|Data Analyst": [
    ["Start with the data you already touch", "Support tickets, resolution times, CSAT scores — you're already surrounded by data. Learn spreadsheet fundamentals first: formulas, pivot tables, VLOOKUP, and basic charting. Khan Academy Statistics and Excel for Data Analysis are strong free starting points.", "Google Data Analytics Certificate"],
    ["Pick up SQL and learn to query", "SQL is the core skill for most analyst roles. Practice on free platforms like Mode Analytics or SQLZoo using datasets similar to customer data — response times, issue categories, user segments. Write queries that answer questions you actually had in your support role.", "SQL for Data Analysis (Mode)"],
    ["Build a dashboard portfolio", "Use Power BI or Looker Studio (free) to build 2-3 dashboards on public datasets. One should be customer or support-related since you understand that domain. Show a clear business question, a clean dataset, and an insight that would change a decision.", "Power BI for Beginners"],
    ["Apply for analyst and reporting roles", "Target data analyst, customer insights analyst, and support operations analyst roles — the last one is a direct bridge. Your support context means you already know what questions matter, which is the hardest thing to teach new analysts.", "Python for Everybody (Coursera)"]
  ],
  "Teacher|Data Analyst": [
    ["Build on your existing data habits", "You already track grades, attendance, and student performance — that's data analysis. Learn to do it in Excel and Google Sheets at a professional level: pivot tables, charts, statistical summaries. The Google Data Analytics Certificate is a direct path.", "Google Data Analytics Certificate"],
    ["Learn SQL with education datasets", "Practice SQL using education-related public datasets from data.gov or Kaggle — student outcomes, school performance, enrollment trends. Writing queries on data you understand speeds up learning dramatically.", "SQL for Data Analysis (Mode)"],
    ["Build a public portfolio on Kaggle or GitHub", "Publish 2-3 analysis projects that show a clear question, a clean dataset, your SQL or Python queries, visualisations, and a plain-English recommendation. Education data or public sector data plays to your background and stands out.", "Python for Everybody (Coursera)"],
    ["Target education, government, and nonprofit roles", "Apply for data analyst, reporting analyst, and research analyst roles. Education companies, NGOs, and government agencies actively value candidates with teaching backgrounds — you understand the domain and can communicate findings to non-technical audiences.", "Power BI for Beginners"]
  ],
  "Sales Representative|Data Analyst": [
    ["Start with CRM and sales data you already know", "You've lived inside CRMs, pipeline reports, and quota dashboards — you already think in data. Formalise that with Excel and SQL fundamentals. The Google Data Analytics Certificate will feel fast because the business context is already there.", "Google Data Analytics Certificate"],
    ["Go deep on SQL and Python basics", "Learn to query the kinds of data you worked with: deal stages, conversion rates, lead scores, churn. Practice on Mode Analytics or Kaggle with sales or marketing datasets. Python for Everybody is a clean intro once SQL feels comfortable.", "SQL for Data Analysis (Mode)"],
    ["Build revenue and pipeline analysis projects", "Create 2-3 portfolio projects around sales funnel analysis, cohort retention, or customer segmentation. These are the exact things sales analytics teams need, and your domain knowledge means your recommendations will be sharper than a pure analyst.", "Python for Everybody (Coursera)"],
    ["Target sales analytics and revenue operations roles", "Revenue operations analyst, sales analyst, and go-to-market analyst roles are natural bridges. You speak the language of the stakeholders, which makes you immediately useful. Apply at SaaS companies where sales data is a core product input.", "Power BI for Beginners"]
  ],
  "Accountant|Data Analyst": [
    ["Bridge from Excel to full analytics", "You already use Excel at a high level — the gap is SQL, Python, and visualisation. Start with SQL since financial data is heavily relational: transactions, accounts, periods, categories. The Google Data Analytics Certificate covers the full stack cleanly.", "Google Data Analytics Certificate"],
    ["Learn Python for financial analysis", "Python with pandas is the natural extension of your spreadsheet work. Practice on financial datasets: budget vs actual, expense categorisation, cash flow projection. Your existing model-building instincts transfer directly.", "Python for Everybody (Coursera)"],
    ["Build finance-focused portfolio projects", "Create dashboards and analysis projects on financial datasets — P&L analysis, budget variance, cost driver breakdowns. These are immediately credible to hiring managers and show domain expertise most analysts lack.", "Power BI for Beginners"],
    ["Target finance, fintech, and operations analyst roles", "Financial analyst, FP&A analyst, and business intelligence analyst roles are the strongest bridge. Your accounting background means you understand what numbers mean in context — a skill that takes pure data analysts years to develop.", "SQL for Data Analysis (Mode)"]
  ],
  "Operations Coordinator|Data Analyst": [
    ["Start with the reporting you already do", "You've been building reports, tracking KPIs, and finding process inefficiencies — now formalise it. Learn Excel at a deep level first, then SQL. The Google Data Analytics Certificate structures this well and moves at a good pace.", "Google Data Analytics Certificate"],
    ["Learn SQL on operational datasets", "Practice querying operations data: order volumes, turnaround times, SLA compliance, resource utilisation. Mode Analytics and SQLZoo have free sandboxes. Your process knowledge means you'll write better queries because you know what to look for.", "SQL for Data Analysis (Mode)"],
    ["Build operational dashboards as portfolio", "Create 2-3 dashboards in Power BI or Looker Studio on supply chain, logistics, or process datasets. Show the business question, the data model, the dashboard, and one insight that would change an operational decision.", "Power BI for Beginners"],
    ["Target operations analytics and BI roles", "Operations analyst, supply chain analyst, and BI analyst roles are direct bridges. Your process experience means you can translate messy operational data into decisions, which is the hardest part of the job.", "Python for Everybody (Coursera)"]
  ],

  // ── To Product Manager ───────────────────────────────────────────────────────
  "Customer Support Specialist|Product Manager": [
    ["Turn support knowledge into product insight", "You have direct access to what users struggle with — start documenting patterns, not just resolving tickets. Learn PM vocabulary: user stories, jobs to be done, roadmaps, and prioritisation frameworks. Reforge's Product Management Foundations is the strongest starting point.", "Digital Product Management (BU)"],
    ["Practice discovery and scoping", "Interview 5-8 users about a problem you've seen repeatedly in support. Write a proper problem statement, map the user journey, and propose a solution with clear acceptance criteria. This is the exact work an associate PM does on day one.", "Become a Product Manager (Udemy)"],
    ["Build a PM portfolio from support patterns", "Create one product teardown of a product you've supported, one feature PRD addressing a common support issue, and one roadmap proposal. These show you already think like a PM, not just a support agent.", "Product Strategy Fundamentals (Reforge)"],
    ["Target internal transfers and associate PM roles", "Support-to-PM is one of the most common paths — companies know it works. Push for an internal transfer first, or apply to associate PM and product operations roles at companies where you have domain knowledge.", "Agile Product Ownership (Scrum.org)"]
  ],
  "Teacher|Product Manager": [
    ["Reframe curriculum design as product thinking", "You've been defining learning outcomes, building for an audience, iterating based on feedback, and measuring success — that's PM work. Learn the formal language: roadmaps, user stories, OKRs, and discovery. Reforge Foundations maps cleanly to your instincts.", "Digital Product Management (BU)"],
    ["Run a real discovery project", "Pick an education product or tool with problems you've experienced. Interview 5 teachers or students, write a structured problem statement, and map the opportunity. This shows discovery skills and a genuine point of view — rare in PM candidates.", "Become a Product Manager (Udemy)"],
    ["Build EdTech-focused PM artefacts", "Create a feature PRD for an education tool, a roadmap for a student-facing app, and a teardown of a product you've used in the classroom. EdTech PMs are in high demand and your classroom perspective is the domain knowledge they can't teach.", "Product Strategy Fundamentals (Reforge)"],
    ["Target EdTech and associate PM roles", "Apply to EdTech companies first — they actively recruit teachers. Also look at associate PM programs at larger tech companies (Google, Microsoft, Atlassian) which are designed for career changers with strong domain knowledge.", "Agile Product Ownership (Scrum.org)"]
  ],
  "Sales Representative|Product Manager": [
    ["Translate sales instincts into product thinking", "You understand customer objections, competitive positioning, and what makes buyers say yes — that's valuable product context. Learn PM fundamentals: roadmaps, user stories, prioritisation, and metrics. The Reforge foundations course is the fastest route.", "Digital Product Management (BU)"],
    ["Practice discovery with real customers", "You already have access to customers — start asking product questions in your conversations. What workarounds are they using? What would make them pay more? Document these as proper user research notes and problem statements.", "Become a Product Manager (Udemy)"],
    ["Build revenue-focused PM artefacts", "Create a PRD for a feature that would improve conversion or reduce churn, a competitive teardown of your industry, and a roadmap prioritised by revenue impact. These show commercial instincts — something most PM candidates lack.", "Product Strategy Fundamentals (Reforge)"],
    ["Target growth PM and B2B product roles", "Growth PM, product marketing manager, and associate PM roles are strong starting points. B2B SaaS companies especially value PMs who've carried a bag — you understand the sales cycle and can build products that help deals close.", "Lean Product & Lean Analytics (Coursera)"]
  ],

  // ── To Software Developer ────────────────────────────────────────────────────
  "Graphic Designer|Software Developer": [
    ["Start with HTML and CSS — you already think visually", "Your eye for layout, spacing, and colour makes HTML and CSS feel natural. Start with The Odin Project's Foundations path — it builds from the ground up and the visual feedback of seeing your code render keeps motivation high.", "The Odin Project (free)"],
    ["Add JavaScript and Git", "JavaScript is the logic layer — it takes longer than HTML/CSS but your design background helps you build things that look good from the start. Learn Git in parallel: commits, branches, and GitHub are non-negotiable for any developer role.", "CS50x (Harvard, free)"],
    ["Build a portfolio that shows both skills", "Create 3 projects: a responsive landing page, an interactive UI component, and a small app that fetches data. Your design skills mean your portfolio will immediately look better than most junior developers — use that advantage.", "Full-Stack Open (University of Helsinki)"],
    ["Target frontend and UI engineering roles", "Junior frontend developer, UI engineer, and design systems engineer roles are direct bridges. Companies building consumer products actively want developers who can think about design — it's a rare combination that commands a premium.", "JavaScript Algorithms (freeCodeCamp)"]
  ],
  "Accountant|Software Developer": [
    ["Start with Python — it fits accounting logic", "Your spreadsheet and formula skills translate directly to Python. Start with Python for Everybody or CS50's Python track. Financial automation scripts are a natural first project: invoice parsers, budget calculators, expense categorisers.", "CS50x (Harvard, free)"],
    ["Learn JavaScript and web fundamentals", "After Python, pick up JavaScript and HTML/CSS through The Odin Project. Build a few finance-related web tools — a loan calculator, a budget tracker, a currency converter — using real domain knowledge to guide what you build.", "The Odin Project (free)"],
    ["Build finance-focused portfolio projects", "Create 3 projects that show real-world usefulness: a financial dashboard, an invoice automation tool, and a full-stack app with a database. These demonstrate coding ability and domain expertise simultaneously.", "Full-Stack Open (University of Helsinki)"],
    ["Target fintech and backend developer roles", "Junior developer, backend developer, and fintech engineer roles are realistic targets. Fintech companies actively recruit accountants who can code — you understand compliance, financial data structures, and audit trails that pure engineers miss.", "100 Days of Code Python Bootcamp"]
  ],
  "Customer Support Specialist|Software Developer": [
    ["Start with The Odin Project foundations", "You understand user problems deeply — now learn to build solutions. The Odin Project's free curriculum takes you from zero to a full-stack project in a structured way. Start with HTML, CSS, and JavaScript before anything else.", "The Odin Project (free)"],
    ["Build tools that solve support problems", "Your best early projects are tools that would have helped you in support: a ticket triage tool, a FAQ search app, a status page mock. Real domain context makes learning faster and your projects more credible.", "CS50x (Harvard, free)"],
    ["Complete three portfolio projects", "Polish three projects on GitHub with clean READMEs, live demos, and brief explanations of your decisions. One should be frontend-only, one should handle data, and one should show a complete user-facing product.", "Full-Stack Open (University of Helsinki)"],
    ["Apply for junior and technical support engineer roles", "Junior developer, technical support engineer, and QA engineer roles are realistic starting points. Your user empathy and communication skills make you stand out — developers who can explain things clearly are rare and highly valued.", "JavaScript Algorithms (freeCodeCamp)"]
  ],

  // ── To Digital Marketing Manager ────────────────────────────────────────────
  "Customer Support Specialist|Digital Marketing Manager": [
    ["Use your customer knowledge as your edge", "You know what customers care about, what language they use, and what problems they have — that's the foundation of good marketing. Learn marketing fundamentals: funnels, channels, SEO, and measurement. HubSpot's free courses are a clean starting point.", "HubSpot Content Marketing (free)"],
    ["Learn SEO and content strategy", "Start with Google's free SEO fundamentals. Create a blog or content plan around a topic you understand from support — product use cases, common problems, how-to guides. This builds a real portfolio and teaches you SEO by doing.", "Google Digital Marketing Certificate"],
    ["Run a small real campaign", "Pick a free tool (Google Ads has a free tier, Meta has low-budget options) and run a small campaign with clear goals. Document your audience, creative, budget, results, and what you'd change. One real campaign beats ten theoretical ones.", "SEMrush SEO Fundamentals (free)"],
    ["Target content marketing and CX marketing roles", "Content marketing manager, CX marketing specialist, and community manager roles are strong bridges. Companies building customer-led growth strategies actively want people who've been on the support side — the voice of the customer is their most valuable asset.", "Google Ads Search Certification (free)"]
  ],
  "Sales Representative|Digital Marketing Manager": [
    ["Bridge from sales to demand generation", "You understand the bottom of the funnel — now learn the top. Study how leads are generated, nurtured, and qualified through content, SEO, and paid ads. The Google Digital Marketing Certificate covers all channels in a structured way.", "Google Digital Marketing Certificate"],
    ["Learn paid ads and analytics", "Your sales instincts make paid ads click fast — you already think about ROI, targeting, and conversion. Get the Google Ads Search Certification and Meta Blueprint (both free). Set up Google Analytics on a test site and practice reading traffic data.", "Google Ads Search Certification (free)"],
    ["Build a campaign portfolio", "Run 2-3 real or simulated campaigns with documented strategy, targeting, creative, budget, and results. Your sales experience means you can write copy that converts — use that to build landing pages and ad creative that stand out.", "SEMrush SEO Fundamentals (free)"],
    ["Target demand generation and growth marketing roles", "Demand generation manager, growth marketing specialist, and digital marketing manager roles are natural bridges. You understand revenue, which makes you a far stronger marketer than most — frame everything you do in terms of pipeline and ROI.", "HubSpot Content Marketing (free)"]
  ],
  "Teacher|Digital Marketing Manager": [
    ["Map teaching to content marketing", "Creating lesson plans is content strategy — you define the audience, the objective, the format, and the sequence. Learn how that maps to content marketing: blog posts, email sequences, YouTube, and social. HubSpot's Content Marketing course is the best starting point.", "HubSpot Content Marketing (free)"],
    ["Learn SEO and distribution", "Great content only works if people find it. Study SEO basics: keyword research, on-page optimisation, and link building. Build a blog or YouTube channel around an education topic and grow it organically — this becomes your living portfolio.", "Google Digital Marketing Certificate"],
    ["Run a real content campaign", "Create a content campaign for a local business, school, or nonprofit. Set clear goals (traffic, signups, followers), document your strategy, execute it, and report on results. Real-world execution beats course certificates every time.", "SEMrush SEO Fundamentals (free)"],
    ["Target content and education marketing roles", "Content marketing manager, social media manager, and email marketing specialist roles are strong starting points. EdTech and education-adjacent companies especially value marketers who understand their audience from the inside.", "Meta Social Media Marketing Certificate"]
  ],

  // ── To Cybersecurity Analyst ─────────────────────────────────────────────────
  "Operations Coordinator|Cybersecurity Analyst": [
    ["Build a security foundation from your process background", "Operations work involves documented processes, access controls, and risk management — that's GRC (Governance, Risk, Compliance). Start with the Google Cybersecurity Certificate and focus on the risk and compliance modules which map directly to your existing skills.", "Google Cybersecurity Certificate"],
    ["Get hands-on with security tools", "TryHackMe's SOC Level 1 path gives you hands-on experience with SIEM tools, log analysis, and incident response in a safe lab environment. Your process documentation skills make you faster at writing incident reports than most beginners.", "TryHackMe SOC Level 1 Path"],
    ["Study for Security+ certification", "CompTIA Security+ is the baseline certification for most entry-level analyst roles. Professor Messer's free study guide is the best free resource. Your operations background already covers business continuity and risk concepts — the technical content is the gap to fill.", "CompTIA Security+ (Professor Messer, free)"],
    ["Target GRC and SOC analyst roles", "GRC analyst, security operations analyst, and IT risk analyst roles are realistic starting points. Your documentation and process skills are highly valued in security — many breaches happen because of process failures, not technical ones.", "Blue Team Labs Online"]
  ],
  "Customer Support Specialist|Cybersecurity Analyst": [
    ["Start with the Google Cybersecurity Certificate", "Your experience handling account issues, password resets, and phishing reports is relevant security exposure. The Google Cybersecurity Certificate gives you the formal vocabulary and covers networking, threats, and incident response in a beginner-friendly way.", "Google Cybersecurity Certificate"],
    ["Practice in TryHackMe and Blue Team Labs", "Hands-on labs are essential — reading about security is not enough. TryHackMe's SOC Level 1 path and Blue Team Labs Online both give you real scenarios: alert triage, phishing analysis, log investigation, and basic threat hunting.", "TryHackMe SOC Level 1 Path"],
    ["Earn Security+ and build a home lab", "Study for CompTIA Security+ using Professor Messer's free materials. Set up a simple home lab with a VM to practice packet analysis and basic system hardening. Document everything — labs, notes, findings — as portfolio evidence.", "CompTIA Security+ (Professor Messer, free)"],
    ["Apply for SOC Tier 1 and helpdesk security roles", "SOC analyst Tier 1, IT support with security focus, and security helpdesk roles are the right entry points. Your communication skills and ability to explain issues clearly are a genuine advantage in incident handling — analysts need to write clear reports.", "Blue Team Labs Online"]
  ],

  // ── To Accountant ────────────────────────────────────────────────────────────
  "Customer Support Specialist|Accountant": [
    ["Start with bookkeeping fundamentals", "Your exposure to billing, invoices, and payment disputes in support is relevant context. Start with QuickBooks Training's free bookkeeping basics and the Google Sheets functions used in accounting: SUM, VLOOKUP, IF statements, and pivot tables.", "Bookkeeping Basics (QuickBooks Training)"],
    ["Learn the accounting cycle", "Study the full accounting cycle: journal entries, ledgers, trial balance, financial statements. Coursera's Financial Accounting Fundamentals from Wharton covers this clearly and is free to audit. Practice with sample company data sets.", "Financial Accounting Fundamentals (Coursera)"],
    ["Get certified in accounting software", "QuickBooks and Xero both offer free certification programmes. Getting certified in both makes you immediately hireable as a bookkeeper or accounts assistant — these are practical credentials that small businesses and accountancy firms look for.", "Xero Accounting Certification (free)"],
    ["Start with bookkeeper or accounts assistant roles", "Bookkeeper, accounts assistant, and payroll administrator are the realistic entry points. Your customer service background helps with client-facing accounting roles at small firms. Once you have 12 months of experience, more senior roles open up.", "Excel for Accounting (Udemy)"]
  ],

  // ── To HR Manager ────────────────────────────────────────────────────────────
  "Teacher|Human Resources Manager": [
    ["Map teaching to learning and development", "Training design, facilitation, and assessing performance are core HR skills — you've been doing this for years. Start by learning the broader HR landscape: recruitment, employee relations, compensation, and compliance. Coursera's Human Resource Management course is the clearest overview.", "Human Resource Management (Coursera)"],
    ["Focus on learning and development as your entry point", "L&D (Learning and Development) is the most natural bridge from teaching. Study instructional design, LMS platforms, and training effectiveness measurement. Build a short training module on a professional topic as a portfolio piece.", "Recruitment and Selection (LinkedIn Learning)"],
    ["Learn HR tools and employment law basics", "Get familiar with HRIS systems (BambooHR, Workday basics), understand local employment law, and study performance management frameworks. Employment Law Basics on edX covers the legal context most HR professionals need.", "Employment Law Basics (edX)"],
    ["Target L&D and HR generalist roles", "Learning and development specialist, HR generalist, and training coordinator roles are natural first steps. Education companies and large corporates with training programmes are the strongest hiring ground for teachers moving into HR.", "People Analytics (Wharton, Coursera)"]
  ],
  "Operations Coordinator|Human Resources Manager": [
    ["Bridge from operations to HR operations", "You already manage processes, onboarding workflows, and people coordination — that's a large chunk of HR operations. Study the people side: recruitment, performance management, employee relations, and HR metrics. Coursera's HRM course covers all of this.", "Human Resource Management (Coursera)"],
    ["Learn recruitment and HR tools", "Recruitment coordination is a common entry point from operations. Study sourcing, screening, interviewing best practices, and ATS tools (Greenhouse, Lever, Workable). LinkedIn Learning's Recruitment and Selection course is practical and up to date.", "Recruitment and Selection (LinkedIn Learning)"],
    ["Get familiar with employment law and HRIS", "Understanding employment contracts, termination rules, and compliance requirements is essential. Study employment law basics and learn one major HRIS platform — BambooHR and Workday both have free trials or sandboxes.", "Employment Law Basics (edX)"],
    ["Target HR coordinator and people operations roles", "HR coordinator, people operations specialist, and talent acquisition coordinator are realistic starting points. Your operations background makes you fast at process design — HRIS implementation projects are a common early win.", "People Analytics (Wharton, Coursera)"]
  ],

  // ── Student / No current role ────────────────────────────────────────────────
  "Student|Software Developer": [
    ["Build a strong coding foundation first", "Start with CS50x — it's the most respected free introductory course and teaches you to think like a programmer, not just copy code. Follow it with The Odin Project which takes you from basics to a full-stack project in a structured, free curriculum.", "CS50x (Harvard, free)"],
    ["Pick a focus: frontend, backend, or full-stack", "Frontend (HTML/CSS/JS/React) gets you visible results fastest. Backend (Python/Node.js/databases) requires more patience but opens more doors. Full-stack (both) takes longer but is what most junior roles actually require. The Odin Project covers full-stack.", "The Odin Project (free)"],
    ["Build three real portfolio projects", "No degree? Your GitHub is your CV. Build three projects: one solo, one with a public API, and one that solves a real problem. Write clean READMEs, deploy them live (Netlify/Vercel is free), and be able to explain every line in an interview.", "Full-Stack Open (University of Helsinki)"],
    ["Apply widely and contribute to open source", "Junior developer, frontend intern, QA engineer, and technical support roles are all realistic starting points. Contribute to open source projects on GitHub — even fixing documentation counts and gets your name in front of real engineers.", "JavaScript Algorithms (freeCodeCamp)"]
  ],

  // ── To Journalist ────────────────────────────────────────────────────────────
  "Teacher|Journalist": [
    ["Translate classroom communication to reporting", "Your ability to research a topic, explain it clearly, and hold an audience's attention is core journalism. Study the basics that differ: news judgment, the inverted pyramid, source verification, and media ethics. Poynter's free NewsU courses are built for exactly this transition."],
    ["Practice writing news and feature stories", "Write 10 short news pieces on topics you know well — education, community, local issues. Focus on objectivity, clear attribution, and concise sentences. Join a local community paper, school newsletter, or launch a Substack to get real bylines and editorial feedback."],
    ["Build a published clip portfolio", "Pitch stories to local newspapers, online publications, or education journals. Five published clips matter more than twenty unpublished drafts. Cover a local government meeting, profile a community figure, and write one data-driven explainer to show range."],
    ["Apply for reporter and editorial roles", "Entry-level reporter, news researcher, editorial assistant, and content writer roles are the bridge. Education journalism, community news, and nonprofit communications are natural fits. Your classroom presence helps in broadcast and podcast roles too."]
  ],
  "Marketing|Journalist": [
    ["Unlearn marketing habits, learn reporting discipline", "Marketing trains you to persuade; journalism trains you to inform without bias. Study news writing structure, source verification, attribution, and editorial standards. The Poynter journalism basics course addresses this transition directly."],
    ["Develop sources and start pitching", "Pick a beat — technology, business, health, or a topic you've marketed — and start building source relationships. Write 5 story pitches with a clear angle, a news hook, and potential sources. Pitching is a skill that improves with repetition."],
    ["Build bylines and a reporting portfolio", "Contribute to online publications, local outlets, or a personal newsletter. Your content marketing background means your writing is already clean and audience-aware — focus on learning verification and objectivity. Aim for 8-10 published pieces before applying to editorial roles."],
    ["Target digital media and content journalism roles", "Digital journalist, content editor, social media journalist, and newsletter writer roles are strong starting points. Your SEO and analytics background makes you more valuable than most journalism graduates — editorial teams want writers who understand how content performs."]
  ],
  "Customer Support Specialist|Journalist": [
    ["Build your writing foundation", "Your daily written communication in support is a base — now formalise it. Study news writing structure, story angles, and journalistic standards. Coursera's Introduction to Journalism or Poynter's NewsU courses cover the core skills from scratch."],
    ["Find your beat and start writing", "Pick a topic you care about — consumer rights, tech products, community issues — and start covering it. Your support background gives you insight into how products and companies treat customers, which makes strong investigative angles."],
    ["Publish consistently and build clips", "Launch a Substack or Medium publication and post weekly. Pitch local outlets and community papers. Ten published pieces on a consistent topic shows editorial discipline and makes your portfolio legible to editors."],
    ["Target consumer, tech, and community journalism", "Consumer affairs reporter, tech journalist, community news reporter, and editorial assistant roles are realistic entry points. Your customer insight makes you especially strong on stories about companies, products, and user experience."]
  ],

  // ── To Business Owner ────────────────────────────────────────────────────────
  "Customer Support Specialist|Business Owner": [
    ["Identify a business idea rooted in real pain", "You've handled hundreds of customer problems — you know what people struggle with and what workarounds they hate. List 5 problems you saw repeatedly and research whether people pay for solutions. The best first businesses solve a problem the founder personally understands."],
    ["Validate before you build", "Talk to 10 potential customers before spending a single shilling on setup. Ask about the problem, current workarounds, and what they'd pay. A $0 validation conversation is worth more than 3 months of building the wrong thing."],
    ["Launch with the minimum viable offer", "Your first offer should be simple enough to deliver manually. Charge for it from day one — free clients drain energy and give bad feedback. Set up basic payments (M-Pesa, PayPal, or Stripe), a simple one-page site, and a clear service description."],
    ["Get first 5 paying customers, then systematise", "Focus entirely on getting 5 paying customers through referrals, direct outreach, and your existing network. Once you have repeatable demand, start documenting your process, setting boundaries, and building the infrastructure to scale."]
  ],
  "Teacher|Business Owner": [
    ["Turn your teaching expertise into a product or service", "Teachers make excellent tutoring businesses, training consultants, curriculum developers, and e-learning creators. List what you know that people would pay to learn — not just school subjects, but professional skills, exam prep, or personal development topics."],
    ["Start with a service before a product", "Tutoring, training workshops, and consulting require no upfront investment — just your knowledge and time. Start here to generate cash and validate demand before investing in content creation, platforms, or infrastructure."],
    ["Build a simple client acquisition system", "Create a simple website or social profile, collect 5 testimonials from early clients, and ask every satisfied customer for a referral. Word of mouth is the fastest growth channel for education businesses. Consistent content on LinkedIn or YouTube compounds over time."],
    ["Systematise delivery and expand", "Document your delivery process so it's repeatable and scalable. Add group sessions, recorded courses, or licensing your curriculum to other teachers. Your classroom management skills translate directly to client and team management."]
  ],
  "Sales Representative|Business Owner": [
    ["Your biggest asset is already knowing how to sell", "Most first-time founders fail because they can't sell — you've already solved that. Pick a market you've sold into before and identify a product or service gap you saw repeatedly from the customer side."],
    ["Validate the idea through direct outreach", "Use your sales skills to run 10 validation calls with potential customers. Present your concept, handle objections, and ask for a small commitment — a deposit, a signed letter of intent, or a pre-order. Real commitment beats survey responses."],
    ["Build the minimum viable business", "Set up payment collection, a simple contract, and your service delivery process before spending time on branding or a website. Your first version should be manually delivered — automation comes after you've proven the offer."],
    ["Scale through systems and hiring", "Sales founders often stall because they can't stop selling long enough to build the business. Hire your first support or fulfilment person early, systematise your sales process, and focus your time on the highest-leverage activities."]
  ],

  // ── To Nurse ─────────────────────────────────────────────────────────────────
  "Customer Support Specialist|Nurse": [
    ["Confirm the entry requirements for your country", "Nursing has formal licensing requirements that vary by country — check exactly what qualifications, clinical hours, and exams are needed before committing. In Kenya, this means checking the Nursing Council of Kenya requirements for enrolled or registered nurses."],
    ["Build your science foundation", "Anatomy, physiology, and basic chemistry are prerequisites for nursing school. Khan Academy's free biology and anatomy courses are excellent preparation. Strong science fundamentals make clinical training significantly easier."],
    ["Complete formal nursing education and placements", "Nursing cannot be self-taught — you need a recognised programme with supervised clinical placements. Research nursing colleges, bridging programmes for non-science graduates, and bursary options. Your communication skills from support are a genuine advantage in patient interactions."],
    ["Register and apply for graduate roles", "After qualifying, register with the nursing board and apply for internship, graduate nurse, and community health roles. Your background in handling distressed people and de-escalating situations transfers directly to ward work."]
  ],
  "Teacher|Nurse": [
    ["Research nursing school requirements thoroughly", "Teaching and nursing are both regulated professions — you'll need to complete a recognised nursing programme. Research bridging courses and part-time study options that allow you to transition without losing income completely."],
    ["Study sciences alongside your teaching work", "Fill any science gaps — biology, chemistry, anatomy — using Khan Academy and free OpenStax textbooks before or during nursing school applications. Arriving at nursing school with strong foundations reduces the academic load significantly."],
    ["Complete clinical training and practicals", "Nursing school places heavy emphasis on hands-on clinical skills: patient assessment, medication administration, wound care, and emergency response. Your classroom presence helps you absorb practical instruction faster. Volunteer or shadow in a clinic during your studies if possible."],
    ["Leverage your teaching in healthcare education roles", "After qualifying, consider patient education, community health nursing, and school nursing roles — these actively benefit from teaching skills. Hospital training departments and health NGOs also look for nurses who can deliver training and health education."]
  ],

  // ── To Lawyer ────────────────────────────────────────────────────────────────
  "Teacher|Lawyer": [
    ["Research legal education requirements in your country", "In Kenya, you need a law degree (LLB) from a recognised university, followed by the Kenya School of Law diploma and admission to the bar. Research part-time LLB programmes and distance learning options if you're currently teaching."],
    ["Build legal reading habits now", "Start reading legal judgements, constitutional law summaries, and legal news before you formally begin. Legal language and reasoning are learned through exposure. Coursera's Introduction to Law and edX Contract Law courses give you an early feel for legal analysis."],
    ["Pursue the LLB and Kenya School of Law", "The LLB typically takes 4 years full-time or longer part-time. Focus especially on contract law, constitutional law, and the areas that interest you most. Attach yourself to a moot court and legal aid clinic as early as possible."],
    ["Complete pupillage and apply for legal roles", "After the Kenya School of Law, you'll need pupillage (supervised practice) before admission to the bar. Target law firms that handle work in your areas of interest — your teaching background is particularly relevant to family law, education law, and public interest litigation."]
  ],
  "Operations Coordinator|Lawyer": [
    ["Audit your legal education pathway", "Check your country's exact requirements: in Kenya it's an LLB, Kenya School of Law diploma, and bar admission. Look at part-time and weekend programmes at accredited universities so you can continue working during your studies."],
    ["Formalise your existing legal exposure", "Operations roles often touch contracts, procurement, compliance, and HR law — document this experience carefully. It strengthens your law school application and maps to commercial law, contract law, and compliance specialisations."],
    ["Complete legal education with a commercial focus", "Your operations background makes you a strong fit for commercial law, contract management, and compliance roles. Prioritise contract law, company law, and dispute resolution modules. Legal aid clinics and law firm internships during your studies are essential for bar admission."],
    ["Target commercial and in-house legal roles", "In-house legal counsel, contracts manager, and compliance officer roles are the most natural bridge from operations. Many companies hire lawyers specifically because they want legal professionals who understand how businesses actually operate."]
  ],

  // ── To Accountant ────────────────────────────────────────────────────────────
  "Sales Representative|Accountant": [
    ["Start with bookkeeping fundamentals", "Your CRM and pipeline work means you already understand revenue tracking and forecasting at a basic level. Formalise this with bookkeeping basics: debits, credits, ledgers, and bank reconciliation. QuickBooks Training's free courses are a clean starting point."],
    ["Learn the accounting cycle properly", "Study the full accounting cycle — journal entries, trial balance, income statement, balance sheet. Coursera's Financial Accounting Fundamentals from Wharton is free to audit and covers this clearly. Practice with sample small business datasets."],
    ["Get certified in accounting software", "QuickBooks and Xero both offer free certification. These are practical credentials that make you immediately hireable as a bookkeeper or junior accounts assistant. Set up a dummy company account and process a full month of transactions."],
    ["Start with bookkeeper or accounts assistant roles", "Entry-level accounting roles value practical certification over a degree for junior positions. Your sales experience is valuable in client-facing accounting firms — you can handle client relationships while handling their books."]
  ],
  "Operations Coordinator|Accountant": [
    ["Build on your existing numbers exposure", "Operations work involves budgets, purchase orders, vendor payments, and cost tracking — you're already doing informal accounting. Formalise this with a structured bookkeeping course and learn the accounting vocabulary behind what you've been doing."],
    ["Study financial reporting and accounting software", "Learn to produce income statements, balance sheets, and cash flow statements from scratch. Get certified in QuickBooks and Xero — these are free and take 2-3 weeks each. Your process documentation skills make you fast at learning accounting workflows."],
    ["Practice with real or simulated company data", "Download free sample company datasets from QuickBooks or Xero and process a full 3-month accounting period: invoices, payroll, bank reconciliation, and month-end reports. This hands-on practice is what separates you from someone who only took a course."],
    ["Target accounts assistant and finance operations roles", "Accounts assistant, finance coordinator, and payroll administrator roles are the bridge. Your operations background makes you strong at month-end close, vendor management, and budget tracking — frame these as accounting skills in your applications."]
  ],
  "Teacher|Accountant": [
    ["Start with structured bookkeeping learning", "Your analytical skills from lesson planning and grading transfer directly to accounting logic. Begin with bookkeeping fundamentals: the accounting equation, debits and credits, ledger entries. Coursera's Financial Accounting Fundamentals is well-paced for self-study."],
    ["Learn accounting software and Excel", "Excel for accounting is a core skill — pivot tables, VLOOKUP, IF statements, and financial functions. Get certified in QuickBooks and Xero (both free). Practice creating trial balances, income statements, and payroll summaries in Excel."],
    ["Study for a professional accounting qualification", "CPA (Kenya) or ACCA are the recognised routes to becoming a fully qualified accountant. KASNEB administers CPA Kenya — it can be done while working and has a clear stage-by-stage structure. Start with Foundation Level while building practical experience."],
    ["Start with junior accounting and finance roles", "Accounts assistant, bookkeeper, and school bursar roles are natural entry points. Your teaching background is especially relevant for school finance officer and NGO accountant roles where the organisational culture aligns with your experience."]
  ],

  // ── To Chef ──────────────────────────────────────────────────────────────────
  "Customer Support Specialist|Chef": [
    ["Get your food safety certification first", "Before anything else, get a recognised food handler's or food safety certificate. In Kenya this is issued through county public health offices. It's required for any paid kitchen work and takes 1-2 days to complete."],
    ["Build knife skills and kitchen basics through practice", "You can't learn cooking from courses alone — you need repetition. Cook from scratch every day for 3 months, focusing on knife skills, heat control, and classical preparations. Follow structured YouTube channels like Jacques Pépin and The Food Lab for technique."],
    ["Get into a kitchen as a kitchen assistant or commis", "The fastest way into professional cooking is getting into a kitchen at any level — kitchen assistant, food prep, or commis chef. Real kitchens teach speed, consistency, and teamwork that no course replicates. Be prepared to start at the bottom."],
    ["Build a small portfolio and specialise", "Document your cooking with photos and recipe notes. Develop a signature style or speciality — pastry, grills, vegetarian, or a cuisine you know deeply. This specialisation makes you memorable and speeds up progression from commis to chef de partie."]
  ],
  "Teacher|Chef": [
    ["Start with professional food safety and knife fundamentals", "Get your food safety certificate from your county health office. Then focus obsessively on knife skills and mise en place — professional cooking is built on prep speed and consistency, not creativity. Cook the same dishes repeatedly until they're muscle memory."],
    ["Train in a real kitchen environment", "Your teaching skills help you absorb instruction quickly, but kitchen work requires physical stamina and speed under pressure. Volunteer in a school canteen, church catering, or community kitchen first to understand the pace before pursuing paid roles."],
    ["Consider culinary school or apprenticeship", "A short culinary programme (3-6 months) at a hospitality college accelerates kitchen entry and teaches you the language of professional cooking. Alternatively, approach a respected local chef directly about an informal apprenticeship — many are open to motivated career changers."],
    ["Leverage your communication skills in kitchen leadership", "Teachers often progress quickly in kitchen environments because of their communication and leadership skills. Once you have solid technical foundations, aim for chef de partie roles and eventually head chef positions where team management matters as much as cooking."]
  ],

  // ── To Mechanic ──────────────────────────────────────────────────────────────
  "Customer Support Specialist|Mechanic": [
    ["Build foundational vehicle knowledge first", "Start with how engines, braking systems, and electrical systems work before touching tools. The Coursera Automotive Maintenance Basics course and free YouTube channels like Scotty Kilmer give you the vocabulary and theory needed to make sense of hands-on training."],
    ["Get hands-on through a garage apprenticeship", "Theory alone won't get you hired. Approach local garages directly and offer to work for reduced pay while learning. Apprenticeships are common in automotive — being willing to sweep floors and hand tools to experienced mechanics is how most mechanics start."],
    ["Study for a recognised automotive certification", "NTSA, TVETA, and technical colleges in Kenya offer automotive technician qualifications. These formal credentials are increasingly required by garages and dealerships. Study evenings while working during the day if needed."],
    ["Specialise and build a reputation", "After 12 months in a garage, develop a specialisation — electrical diagnostics, body work, or a specific vehicle brand. Specialists earn more and build loyal customer bases. Your support background means you handle difficult customers better than most mechanics."]
  ],
  "Operations Coordinator|Mechanic": [
    ["Start with automotive theory and safety", "Your process and documentation skills will be a major advantage once you're in a workshop — but first you need the technical foundation. Take an automotive maintenance basics course and learn the systems: engine, transmission, braking, electrical, and suspension."],
    ["Enter a garage or fleet environment", "Operations backgrounds are highly valued by fleet managers and logistics companies with their own workshops. Approach these companies directly — your process experience is relevant to workshop management and vehicle maintenance scheduling, which can get you in at a higher level."],
    ["Get certified through TVETA or a technical college", "Formal automotive certification from a TVETA-accredited institution is increasingly required. Evening and part-time programmes are available. Your documentation and systems thinking will make you stand out in diagnostics and maintenance record-keeping."],
    ["Target workshop supervisor and fleet roles", "Workshop supervisor, fleet maintenance coordinator, and automotive technician roles are realistic targets. Your operations background means you're qualified to run a workshop, not just work in one — aim higher than most career changers would."]
  ],

  // ── Graphic Designer pivots ──────────────────────────────────────────────────
  "Graphic Designer|Digital Marketing Manager": [
    ["Add strategy and measurement to your creative skills", "You already produce the assets — now learn how campaigns are planned, targeted, and measured. The Google Digital Marketing Certificate covers funnels, channels, and analytics in a way that connects directly to the creative work you already do."],
    ["Learn paid ads and SEO fundamentals", "Get Google Ads Search certified and Meta Blueprint certified — both are free. Study SEO basics: keyword research, on-page optimisation, and content strategy. Your visual skills mean your ads and landing pages will look better than most marketers' work from day one."],
    ["Run real campaigns with your existing client relationships", "Offer existing design clients a bundled service: design plus campaign management. Run small paid campaigns on their behalf, document the results, and build a portfolio that shows creative work alongside performance metrics."],
    ["Target growth marketing and brand marketing roles", "Growth marketer, brand manager, and digital marketing specialist roles are natural fits. Agencies especially value people who can both strategise and execute creatively — most marketing teams are divided between creatives and analysts, and you can bridge both sides."]
  ],
  "Graphic Designer|Product Manager": [
    ["Build on your design process to understand product thinking", "You've been solving problems visually — now learn to frame those problems in business and user terms. Study jobs-to-be-done, OKRs, prioritisation frameworks, and how PMs decide what to build. Reforge's Product Management Foundations is the most respected starting point."],
    ["Develop discovery and research skills", "Run 5 user interviews on a product you've designed for. Write formal problem statements, map user journeys, and propose a feature with a success metric. Your design eye means your solutions will be well-considered — the gap is the business and research framing."],
    ["Build a PM portfolio alongside your design work", "Create a PRD for a feature in a product you've worked on, a competitive teardown of your industry, and a roadmap prioritised by user value and business impact. These show you can think beyond the screen."],
    ["Target design-led PM and associate PM roles", "Product designer, design lead, and associate PM roles are the bridge. Companies building consumer products especially value PMs with design backgrounds — you can run discovery, evaluate solutions, and work with engineering without translation layers."]
  ],

  // ── Accountant pivots ────────────────────────────────────────────────────────
  "Accountant|Data Analyst": [
    ["Your Excel skills are already analyst-level", "You likely use Excel at a high level already. The gaps are SQL, Python, and data visualisation. Start with SQL — financial data is highly relational and your familiarity with transactions, accounts, and time periods makes SQL feel natural within weeks."],
    ["Add Python for financial data work", "Python with pandas is a direct extension of your spreadsheet modelling. Start with Python for Everybody on Coursera, then move to pandas-specific tutorials using financial datasets: P&L analysis, expense categorisation, and cash flow forecasting."],
    ["Build a finance-focused analyst portfolio", "Create 3 projects: a revenue trend analysis, a cost breakdown dashboard in Power BI, and a budget vs actual variance report built with Python. These speak directly to finance hiring managers and are more compelling than generic analyst projects."],
    ["Target FP&A, BI, and finance analyst roles", "Financial analyst, FP&A analyst, and business intelligence analyst roles are the strongest bridge. You understand what financial numbers mean in context — a skill most pure data analysts take years to develop. Frame your pivot as 'accountant who learned to code', not 'data analyst who used to do accounting'."]
  ],
  "Accountant|Software Developer": [
    ["Python is your natural first language", "Accountants who code almost universally start with Python — the logical structure mirrors spreadsheet formula thinking. Start with CS50P (Harvard's Python course, free) or Python for Everybody. Your first projects should be finance tools: invoice generators, budget trackers, tax calculators."],
    ["Learn web fundamentals and databases", "After Python, pick up HTML, CSS, JavaScript basics, and SQL. Your accounting background means you already understand relational data — databases will feel familiar. The Full-Stack Open course (University of Helsinki, free) takes you through the full web stack."],
    ["Build fintech and finance-adjacent projects", "Create 3 portfolio projects that show coding ability and domain knowledge: a personal finance app, a bookkeeping automation tool, and a financial reporting dashboard. These are immediately credible to fintech hiring managers."],
    ["Target fintech and enterprise software roles", "Junior developer, backend developer, and fintech engineer roles are the right targets. Fintech companies actively recruit accountants who can code — you understand compliance, audit trails, and financial data integrity that takes pure engineers years to learn."]
  ],

  // ── More student paths ────────────────────────────────────────────────────────
  "Student|Product Manager": [
    ["Build foundational product knowledge first", "Read Inspired by Marty Cagan and Continuous Discovery Habits by Teresa Torres — these are the two most important PM books. Take the Digital Product Management course from Boston University on Coursera to get structured foundations before building your portfolio."],
    ["Find a product to work on immediately", "The fastest way to learn product management is to manage something — a side project, a student organisation, an open source tool, or a volunteer digital project. You need decisions, constraints, and real users. Fake exercises from courses are not enough on their own."],
    ["Build a PM portfolio with real artefacts", "Create 3 case studies: a product teardown with your recommendations, a PRD for a feature improvement, and a roadmap for a product you believe in. Document your thinking, your trade-offs, and your success metrics. Quality over quantity here."],
    ["Apply for APM programmes and internships", "Associate PM programmes at companies like Google, Microsoft, Atlassian, and local tech companies are designed for new graduates. Also target product operations, product analyst, and customer success roles as alternative entry points into product teams."]
  ],
  "Student|Digital Marketing Manager": [
    ["Get certified while you're still studying", "Google Digital Marketing Certificate, HubSpot Content Marketing, and Meta Blueprint are all free and recognised by employers. Get all three before you graduate — this immediately separates you from classmates who only have degree credits."],
    ["Build a real digital presence to learn on", "Start a blog, YouTube channel, or Instagram account on a topic you know well. Grow it intentionally using SEO, social strategy, and content planning. Real follower growth is a portfolio piece that proves skills better than any certification."],
    ["Run campaigns for local businesses or student groups", "Offer free or low-cost digital marketing to local businesses, student societies, or NGOs. Document your strategy, execution, and results with screenshots and data. Three real campaign case studies are more valuable than a clean CV with no experience."],
    ["Target coordinator and junior specialist roles", "Digital marketing coordinator, social media assistant, content creator, and SEO trainee roles are realistic first positions. Growth marketing agencies are especially open to hiring talented graduates — the work is demanding but you learn fast."]
  ],
  "Student|Cybersecurity Analyst": [
    ["Start with the Google Cybersecurity Certificate", "It's 6 months, free to audit, and covers the full foundational stack: networking, Linux, security operations, and incident response. It's specifically designed for beginners and recognised by employers. Complete it before investing in paid certifications."],
    ["Get hands-on with TryHackMe and Hack The Box", "Cybersecurity cannot be learned only from reading — you need practice environments. TryHackMe's SOC Level 1 path and Hack The Box's Starting Point are both beginner-friendly. Spend at least 1 hour per day in these labs while studying theory."],
    ["Earn CompTIA Security+ and build a home lab", "Security+ is the baseline credential for most entry-level roles. Professor Messer's free study guides are excellent. Set up a home lab with a free VM running Kali Linux and practice basic pentesting and log analysis. Document your lab work as portfolio evidence."],
    ["Apply for SOC analyst and IT support security roles", "SOC analyst Tier 1, IT support with security responsibilities, and junior cybersecurity analyst roles are the entry points. Bug bounty programmes (HackerOne, Bugcrowd) are also a way to earn money and credentials simultaneously while applying for full-time work."]
  ],
  "Student|Accountant": [
    ["Start CPA Kenya registration early", "KASNEB's CPA Kenya programme is the recognised professional accounting qualification. Register for Foundation Level 1 as early as possible — you can sit papers while finishing your degree. Early registration gives you a structured progression path."],
    ["Get practical with QuickBooks and Xero", "Classroom accounting is different from applied accounting. Get certified in QuickBooks and Xero (both free) and practice processing a full month of transactions for a sample company. Employers value software proficiency over purely academic knowledge."],
    ["Apply for attachments and internships aggressively", "Accounting internships and attachments are often where jobs are offered. Apply to audit firms, banks, NGOs, and manufacturing companies during your second or third year. Real experience handling accounts, reconciliations, and audits accelerates your learning dramatically."],
    ["Target graduate trainee and accounts assistant roles", "Graduate trainee programmes at banks, audit firms (Big 4 and mid-tier), and large corporates are the most structured entry points. Accounts assistant, payroll assistant, and finance officer roles are also strong starting positions that lead to qualified accountant roles."]
  ],
  "Student|Nurse": [
    ["Confirm nursing school requirements in your country", "In Kenya, Kenya Medical Training College (KMTC) offers the enrolled nursing programme (2 years) and university programmes lead to registered nurse status. Check KMTC, Aga Khan University, and public university nursing departments for entry requirements and costs."],
    ["Build your science foundation before applying", "Biology, chemistry, and human anatomy are core prerequisites. Strengthen these with Khan Academy (free) and OpenStax Biology before you apply. Strong science grades improve your admission chances and make clinical training easier."],
    ["Complete clinical rotations with full engagement", "Clinical placements are where nursing is actually learned. Take every placement seriously — medical, surgical, paediatric, maternal health, and community health rotations each build different skills. Build relationships with nurses and doctors who can mentor you."],
    ["Register and target internship and community health roles", "After qualifying, register with the Nursing Council of Kenya and apply for internship positions. Community health nursing, maternal and child health, and school nursing are active areas of recruitment. Private hospitals and NGOs also offer strong early-career opportunities."]
  ],
  "Unemployed|Software Developer": [
    ["Start immediately with a free structured curriculum", "Unemployment is the ideal time to go deep on learning. The Odin Project is a free, full-stack curriculum with a strong community — start with Foundations and work every day. CS50x from Harvard is an excellent parallel course for computer science thinking."],
    ["Build a project every two weeks minimum", "The single biggest mistake career-changers make is over-learning and under-building. After each major topic, immediately build something — however small. Consistent shipping builds confidence, portfolio content, and technical problem-solving ability simultaneously."],
    ["Polish three projects and publish everything on GitHub", "Three well-documented projects with live demos, clean code, and clear READMEs are enough to get junior developer interviews. Deploy on Netlify or Vercel for free. Document your learning publicly on LinkedIn or a blog — companies notice self-taught developers who communicate well."],
    ["Apply widely and attend tech meetups", "Junior developer, frontend intern, technical support engineer, and QA roles are all viable entry points. Attend local tech meetups and developer communities — in Nairobi, iHub and Nairobi Dev School events put you in front of hiring managers directly."]
  ],
  "Unemployed|Data Analyst": [
    ["Use this time for an intensive learning sprint", "The Google Data Analytics Certificate takes about 6 months at a normal pace — push it to 3 months by studying daily. Covers everything you need: spreadsheets, SQL, R basics, Tableau, and data cleaning. A recognised certificate on your CV immediately helps."],
    ["Practice SQL and Python every day", "After the Google certificate, go deeper on SQL using Mode Analytics free exercises and Python using Kaggle's free Python and Pandas courses. Aim to be comfortable with joins, aggregations, and basic data manipulation before applying for roles."],
    ["Build 3 public portfolio projects on Kaggle or GitHub", "Pick datasets from Kaggle or government open data portals. Answer a real question: which counties have the highest disease burden? What drives fuel prices? Which neighbourhoods have the most crime? Publish with clean notebooks and plain-English conclusions."],
    ["Apply for junior analyst roles across sectors", "Data analyst, reporting analyst, research assistant, and junior BI analyst roles are realistic targets. NGOs, financial institutions, and telecom companies in Kenya are active employers of entry-level analysts. Your portfolio matters more than your employment gap."]
  ],

  "Student|Data Analyst": [
    ["Start with Excel and statistics", "Before SQL or Python, get genuinely good at spreadsheets: pivot tables, VLOOKUP, statistical functions, and charting. Khan Academy's statistics course is free and excellent. These basics appear in every analyst interview regardless of seniority.", "Google Data Analytics Certificate"],
    ["Learn SQL thoroughly", "SQL is the single most-requested analyst skill. Learn it on Mode Analytics or SQLZoo using real datasets. Practice joins, aggregations, subqueries, and window functions — these come up constantly in analyst interviews and day-to-day work.", "SQL for Data Analysis (Mode)"],
    ["Build Kaggle and GitHub projects", "Complete 2-3 analysis projects on public datasets and publish them on Kaggle or GitHub. Pick topics you actually care about — sports, music, climate, finance — because genuine curiosity produces better analysis and better storytelling.", "Python for Everybody (Coursera)"],
    ["Apply for analyst internships and junior roles", "Intern, junior analyst, and reporting analyst roles are the entry points. Your academic background in any quantitative subject is a plus — highlight coursework in statistics, economics, or any data-heavy field.", "Power BI for Beginners"]
  ],
  "Student|UX Designer": [
    ["Learn UX foundations with a free certificate", "The Google UX Design Certificate (7 courses, Coursera) is the best structured starting point — it covers research, wireframing, prototyping, and usability testing in a logical order. It's designed specifically for beginners with no prior experience.", "Google UX Design Certificate"],
    ["Master Figma through daily practice", "Figma is the industry standard and it's free for students. Spend time recreating apps you use every day — copy the screens exactly, then redesign one screen based on a usability problem you notice. This builds muscle memory and critical thinking simultaneously.", "Figma UI UX Design Essentials"],
    ["Build two strong portfolio case studies", "Two well-documented case studies beat ten shallow ones. Each should show: the problem, your research, your iterations, your solution, and what you'd do differently. Treat each project like a real client brief, not a school assignment.", "Interaction Design Foundation UX Path"],
    ["Apply for internships and junior roles", "UX intern, junior UX designer, and UX researcher assistant roles are realistic first steps. Design bootcamps also help with structured feedback and community, but they're not required if your portfolio is strong. Start applying before you feel ready.", "Design Thinking Bootcamp (IDEO U)"]
  ]
};

// ─── Current role bias ────────────────────────────────────────────────────────

const currentRoleBias = {
  "None": {},
  "Student": {},
  "Unemployed": {},
  "Customer Support Specialist": { UX: 2, PM: 2, Data: 1 },
  "Teacher": { UX: 2, PM: 1, Marketing: 1 },
  "Sales Representative": { PM: 1, Marketing: 3, Data: 1 },
  "Operations Coordinator": { Data: 3, PM: 1, Cyber: 1 },
  "Graphic Designer": { UX: 3, Marketing: 1, Software: 1 },
  "Accountant": { Data: 2, Software: 1, Cyber: 1 }
};

// ─── DOM refs ─────────────────────────────────────────────────────────────────

const els = {
  currentRole: document.querySelector("#currentRole"),
  targetRole: document.querySelector("#targetRole"),
  currency: document.querySelector("#currency"),
  salary: document.querySelector("#salary"),
  hours: document.querySelector("#hours"),
  experience: document.querySelector("#experience"),
  hoursValue: document.querySelector("#hoursValue"),
  experienceValue: document.querySelector("#experienceValue"),
  targetSalary: document.querySelector("#targetSalary"),
  salaryLift: document.querySelector("#salaryLift"),
  timeline: document.querySelector("#timeline"),
  fitScore: document.querySelector("#fitScore"),
  skillList: document.querySelector("#skillList"),
  timelineList: document.querySelector("#timelineList"),
  storyList: document.querySelector("#storyList"),
  jobList: document.querySelector("#jobList"),
  courseList: document.querySelector("#courseList"),
  salaryBars: document.querySelector("#salaryBars"),
  yAxis: document.querySelector("#yAxis"),
  heroLift: document.querySelector("#heroLift"),
  heroMonths: document.querySelector("#heroMonths"),
  heroSkills: document.querySelector("#heroSkills"),
  heroJobs: document.querySelector("#heroJobs"),
  copySummary: document.querySelector("#copySummary")
};

let currentSummary = "";

// ─── Currency helpers ─────────────────────────────────────────────────────────
// All medians stored in KES. Rates are approximate monthly salary equivalents.

const fxRates = {
  KES: 1,
  USD: 0.0077,   // 1 KES ≈ 0.0077 USD
  GBP: 0.0061,   // 1 KES ≈ 0.0061 GBP
  EUR: 0.0071,   // 1 KES ≈ 0.0071 EUR
  NGN: 12.5,     // 1 KES ≈ 12.5 NGN
  INR: 0.64,     // 1 KES ≈ 0.64 INR
  ZAR: 0.14      // 1 KES ≈ 0.14 ZAR
};

const currencyLocales = {
  KES: "en-KE", USD: "en-US", GBP: "en-GB",
  EUR: "en-IE", NGN: "en-NG", INR: "en-IN", ZAR: "en-ZA"
};

function convertFromKES(kesValue) {
  const currency = els.currency.value;
  if (currency === "none" || currency === "KES") return kesValue;
  return Math.round(kesValue * (fxRates[currency] || 1));
}

function money(kesValue) {
  const currency = els.currency.value;
  const value = convertFromKES(kesValue);
  if (currency === "none") return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);
  return new Intl.NumberFormat(currencyLocales[currency] || "en-US", {
    style: "currency", currency, maximumFractionDigits: 0
  }).format(value);
}

function compactMoney(kesValue) {
  const currency = els.currency.value;
  const value = convertFromKES(kesValue);
  const labels = { KES: "KSh", USD: "$", GBP: "£", EUR: "€", NGN: "₦", INR: "₹", ZAR: "R" };

  // Smart compact: show k for thousands, M for millions
  let compact;
  if (value >= 1000000) {
    compact = (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (value >= 1000) {
    compact = Math.round(value / 1000) + "k";
  } else {
    compact = String(value);
  }

  return currency === "none" ? compact : labels[currency] + " " + compact;
}

// Convert a user-entered salary value TO KES for internal calculations
function salaryToKES(inputValue) {
  const currency = els.currency.value;
  if (currency === "none" || currency === "KES") return inputValue;
  return Math.round(inputValue / (fxRates[currency] || 1));
}

// ─── Career profile helpers ───────────────────────────────────────────────────

function targetKey(role) {
  const r = role.toLowerCase();
  if (r.includes("law") || r.includes("legal") || r.includes("advocate") || r.includes("attorney")) return "Legal";
  if (r.includes("nurse") || r.includes("doctor") || r.includes("medical") || r.includes("health") || r.includes("clinical")) return "Healthcare";
  if (r.includes("account") || r.includes("bookkeep") || r.includes("audit") || r.includes("tax")) return "Accounting";
  if (r.includes("human resource") || r.includes("hr") || r.includes("recruit")) return "HR";
  if (r.includes("chef") || r.includes("cook") || r.includes("culinary")) return "Culinary";
  if (r.includes("mechanic") || r.includes("automotive") || r.includes("vehicle")) return "Mechanic";
  if (r.includes("architect") || r.includes("building design")) return "Architecture";
  if (r.includes("journal") || r.includes("reporter") || r.includes("writer") || r.includes("media")) return "Journalism";
  if (r.includes("business") || r.includes("entrepreneur") || r.includes("founder") || r.includes("startup")) return "Business";
  if (r.includes("ux") || r.includes("ui") || r.includes("user experience") || r.includes("user interface")) return "UX";
  if (r.includes("product manager") || r.includes("product owner") || r.includes("product lead")) return "PM";
  if (r.includes("data") || r.includes("analyst") || r.includes("analytics") || r.includes("statistics") || r.includes("bi ") || r.includes("business intelligence")) return "Data";
  if (r.includes("cyber") || r.includes("security") || r.includes("risk") || r.includes("infosec") || r.includes("soc ")) return "Cyber";
  if (r.includes("market") || r.includes("seo") || r.includes("social media") || r.includes("content") || r.includes("ads") || r.includes("brand")) return "Marketing";
  // IT, tech, programming, coding all map to Software
  if (r.includes("software") || r.includes("developer") || r.includes("engineer") || r.includes("web") ||
      r.includes("programming") || r.includes("coding") || r.includes("it ") || r === "it" ||
      r.includes("tech") || r.includes("computer") || r.includes("frontend") || r.includes("backend") ||
      r.includes("fullstack") || r.includes("full stack") || r.includes("mobile") || r.includes("app dev") ||
      r.includes("devops") || r.includes("cloud") || r.includes("systems")) return "Software";
  if (r.includes("design") || r.includes("graphic") || r.includes("visual") || r.includes("creative")) return "UX";
  if (r.includes("finance") || r.includes("banking") || r.includes("investment") || r.includes("financial")) return "Data";
  if (r.includes("manag") || r.includes("product")) return "PM";
  return "Software"; // default to Software instead of Marketing — more useful for unknown tech terms
}

function getCareerProfile(target) {
  if (roleData[target]) return roleData[target];
  const fallbackByKey = {
    UX: "UX Designer", PM: "Product Manager", Data: "Data Analyst",
    Software: "Software Developer", Cyber: "Cybersecurity Analyst",
    Marketing: "Digital Marketing Manager", Legal: "Lawyer",
    Healthcare: "Nurse", Accounting: "Accountant", HR: "Human Resources Manager",
    Culinary: "Chef", Mechanic: "Mechanic", Architecture: "Architect",
    Journalism: "Journalist", Business: "Business Owner"
  };
  const fallbackRole = fallbackByKey[targetKey(target)];
  const profile = roleData[fallbackRole];
  return {
    ...profile,
    skills: [...profile.skills],
    stories: [
      [`Move into ${target}`, `This plan uses ${fallbackRole.toLowerCase()} patterns as a guide and keeps your typed target role for job and course searches.`],
      ...profile.stories.slice(0, 1)
    ],
    courses: [`${target} beginner roadmap`, ...profile.courses.slice(0, 4)]
  };
}

function isNoCurrentCareer(current) {
  const c = current.toLowerCase().trim();
  return ["none", "no job", "unemployed", "student", "fresh graduate", "not working", "none / not working"].some(t => c.includes(t));
}

// ─── Pivot timeline lookup ────────────────────────────────────────────────────

function wordMatch(input, key) {
  // Only match if the key IS the input, or the input starts with the key word
  // e.g. "teacher" matches key "teacher", NOT "customer support specialist"
  const i = input.trim().toLowerCase();
  const k = key.trim().toLowerCase();
  if (i === k) return true;
  // Allow partial match only if key is at least 5 chars (avoid false hits on short words)
  if (k.length >= 5 && i.startsWith(k)) return true;
  if (k.length >= 5 && i.endsWith(k)) return true;
  return false;
}

function getPivotTimeline(current, target, data, months) {
  // 1. Try exact match
  const exactKey = `${current}|${target}`;
  if (pivotTimelines[exactKey]) return pivotTimelines[exactKey];

  const currentLower = current.toLowerCase().trim();
  const targetLower = target.toLowerCase().trim();

  // 2. Try strict word match on both sides
  for (const key of Object.keys(pivotTimelines)) {
    const [k1, k2] = key.split("|");
    if (wordMatch(currentLower, k1) && wordMatch(targetLower, k2)) {
      return pivotTimelines[key];
    }
  }

  // 3. Student/unemployed special case
  if (isNoCurrentCareer(current)) {
    for (const key of Object.keys(pivotTimelines)) {
      const [k1, k2] = key.split("|");
      if (k1.toLowerCase() === "student" && wordMatch(targetLower, k2)) {
        return pivotTimelines[key];
      }
    }
    for (const key of Object.keys(pivotTimelines)) {
      const [k1, k2] = key.split("|");
      if (k1.toLowerCase() === "unemployed" && wordMatch(targetLower, k2)) {
        return pivotTimelines[key];
      }
    }
  }

  // 4. Target-only match — find any timeline for this target, prefer student path
  // This gives a relevant timeline even if the exact current→target combo isn't hardcoded
  const targetOnlyKeys = Object.keys(pivotTimelines).filter(k => {
    const [, k2] = k.split("|");
    return wordMatch(targetLower, k2);
  });
  // Prefer student path (most general), then first match
  const studentPath = targetOnlyKeys.find(k => k.startsWith("Student|"));
  if (studentPath) return pivotTimelines[studentPath];
  if (targetOnlyKeys.length > 0) return pivotTimelines[targetOnlyKeys[0]];

  // 5. Absolute fallback — fully generic timeline using target role skill/course data
  return buildGenericTimeline(current, target, data, months);
}

function buildGenericTimeline(current, target, data, months) {
  const s = data.skills;
  const c = data.courses;
  const fromText = current && current !== "Current Career" ? `from your ${current} background` : "you already have";
  return [
    [
      `${target} foundations`,
      `Start by building a strong foundation in ${target}. Learn ${s[0].toLowerCase()} and ${s[1].toLowerCase()} — these are the most in-demand skills for entry-level roles. Identify any experience ${fromText} that gives you a head start, even if indirect.`,
      c[0]
    ],
    [
      `${s[2]} and hands-on practice`,
      `Move into applied practice with ${s[2].toLowerCase()}${s[3] ? " and " + s[3].toLowerCase() : ""}. Work through structured exercises, follow along with real projects, and start building things you can show to employers. Consistency matters more than speed at this stage.`,
      c[1]
    ],
    [
      "Build portfolio evidence",
      `Create 2-3 projects or pieces of work that clearly demonstrate your ability in ${target}. Each one should solve a real problem, show your thinking, and be something you can walk an interviewer through. Publish everything publicly — GitHub, Behance, a personal site, or a portfolio platform.`,
      c[2] || c[0]
    ],
    [
      "Job search and first role",
      `Apply for entry-level and junior ${target} roles. Tailor your CV to highlight transferable skills and lead with your portfolio. Network in online communities, attend local meetups, and reach out directly to people working in ${target} roles — most opportunities come through people, not job boards.`,
      c[3] || c[1]
    ]
  ];
}

// ─── Section progress bar ─────────────────────────────────────────────────────

function showSectionProgress(containerEl, label) {
  containerEl.innerHTML = `
    <div class="section-loading">
      <span class="section-loading-label">${label}</span>
      <div class="section-progress-track">
        <div class="section-progress-fill"></div>
      </div>
    </div>
  `;
  requestAnimationFrame(() => {
    const fill = containerEl.querySelector(".section-progress-fill");
    if (fill) fill.style.width = "85%";
  });
}

function completeSectionProgress(containerEl) {
  const fill = containerEl.querySelector(".section-progress-fill");
  if (fill) {
    fill.style.transition = "width 0.2s ease";
    fill.style.width = "100%";
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ─── Simulate ─────────────────────────────────────────────────────────────────

async function simulate() {
  const target = els.targetRole.value.trim() || "New Career";
  const current = els.currentRole.value.trim() || "Current Career";
  const data = getCareerProfile(target);
  const salary = salaryToKES(Number(els.salary.value || 0)); // convert input to KES
  const hours = Number(els.hours.value);
  const experience = Number(els.experience.value);
  const hasNoCurrentCareer = isNoCurrentCareer(current);
  const overlap = (hasNoCurrentCareer ? 0 : currentRoleBias[current]?.[targetKey(target)] || 0) + experience;
  const fit = Math.min(96, Math.max(42, 48 + overlap * 5 + Math.round(hours / 3)));
  const months = Math.max(6, Math.round(data.baseMonths + (hasNoCurrentCareer ? 10 : 6) - hours / 6 - overlap / 3));
  const targetSalary = Math.min(200000, Math.round(data.median * (.88 + fit / 500)));
  const hasCurrentSalary = salary > 0 && !hasNoCurrentCareer;
  const lift = hasCurrentSalary ? Math.round(((targetSalary - salary) / salary) * 100) : null;
  const projections = hasCurrentSalary
    ? [salary, targetSalary * .9, targetSalary, targetSalary * 1.08, targetSalary * 1.17].map(Math.round)
    : [targetSalary * .35, targetSalary * .55, targetSalary * .78, targetSalary, targetSalary * 1.12].map(Math.round);

  // Show progress bars immediately
  showSectionProgress(els.skillList, "Mapping skill gaps…");
  showSectionProgress(els.timelineList, "Building your transition plan…");
  showSectionProgress(els.storyList, "Finding similar stories…");

  document.querySelector(".results").scrollIntoView({ behavior: "smooth", block: "start" });

  // Render metrics and chart instantly
  els.targetSalary.textContent = compactMoney(targetSalary);
  els.salaryLift.textContent = lift === null ? "N/A" : (lift >= 0 ? "+" : "") + lift + "%";
  els.timeline.textContent = months + " mo";
  els.fitScore.textContent = fit;
  els.heroLift.textContent = lift === null ? "N/A" : (lift >= 0 ? "+" : "") + lift + "%";
  els.heroMonths.textContent = months + " mo";
  els.heroSkills.textContent = data.skills.length;
  els.heroJobs.textContent = data.jobs;
  renderChart(projections);
  renderJobs(target);
  renderCourses(data.courses, data.skills);

  // Stagger section reveals with progress bars
  await delay(500);
  completeSectionProgress(els.skillList);
  await delay(200);
  renderSkills(data.skills, fit);

  await delay(400);
  completeSectionProgress(els.storyList);
  await delay(200);
  renderStories(data.stories);

  await delay(400);
  completeSectionProgress(els.timelineList);
  await delay(200);
  renderTimeline(current, target, data, months);

  currentSummary = `${current} to ${target}: estimated ${months} months, target salary ${money(targetSalary)}, salary lift ${lift === null ? "N/A" : (lift >= 0 ? "+" : "") + lift + "%"}, fit score ${fit}/100. Priority skills: ${data.skills.join(", ")}.`;
}

// ─── Render helpers ───────────────────────────────────────────────────────────

function buildRanges(months) {
  const first = Math.max(1, Math.round(months * .25));
  const second = Math.max(first + 1, Math.round(months * .5));
  const third = Math.max(second + 1, Math.round(months * .75));
  return [
    `Months 1–${first}`,
    `Months ${first + 1}–${second}`,
    `Months ${second + 1}–${third}`,
    `Months ${third + 1}–${months}`
  ];
}

function renderChart(values) {
  const max = Math.ceil(Math.max(...values) / 10000) * 10000;
  els.yAxis.innerHTML = [max, Math.round(max * .66), Math.round(max * .33), 0]
    .map(compactMoney).map(v => `<span>${v}</span>`).join("");
  els.salaryBars.innerHTML = values.map((value, i) => {
    const height = Math.max(8, Math.round(value / max * 100));
    return `<div class="bar-wrap"><div class="bar" title="${money(value)}" style="height:${height}%"></div><span>${i === 0 ? "Now" : "Y" + i}</span></div>`;
  }).join("");
}

function renderSkills(skills, fit) {
  els.skillList.innerHTML = skills.map((skill, i) => {
    const gap = Math.max(24, 86 - fit + i * 7);
    return `<div class="skill">
      <div class="skill-top"><strong>${skill}</strong><span>${gap}% gap</span></div>
      <div class="track"><div class="fill" style="width:${gap}%"></div></div>
    </div>`;
  }).join("");
}

function courseSearchLink(course) {
  return "https://www.google.com/search?q=" + encodeURIComponent(course + " course");
}

function renderTimeline(current, target, data, months) {
  const phases = getPivotTimeline(current, target, data, months);
  const ranges = buildRanges(months);
  els.timelineList.innerHTML = phases.map((phase, i) => {
    const [title, body, course] = phase;
    return `<div class="timeline-item">
      <div class="month">${ranges[i]}</div>
      <div>
        <b>${title}</b>
        <span>${body}</span>
        <a class="timeline-course" href="${courseSearchLink(course)}" target="_blank" rel="noreferrer">Course: ${course}</a>
      </div>
    </div>`;
  }).join("");
}

function renderStories(stories) {
  els.storyList.innerHTML = stories.map(([title, body]) =>
    `<article class="story"><h4>${title}</h4><p>${body}</p></article>`
  ).join("");
}

function renderJobs(target) {
  const q = encodeURIComponent(target);
  const items = [
    ["LinkedIn Jobs", `Open LinkedIn results for ${target} roles and filter by location, remote, and experience level.`, `https://www.linkedin.com/jobs/search/?keywords=${q}`],
    ["Indeed", `Compare ${target} salary ranges and common requirements across active job posts.`, `https://www.indeed.com/jobs?q=${q}`],
    ["Wellfound", `Find startup-friendly ${target} openings where portfolio projects carry more weight.`, `https://wellfound.com/jobs?query=${q}`]
  ];
  els.jobList.innerHTML = items.map(([name, body, url]) =>
    `<article class="resource"><div><h4>${name}</h4><p>${body}</p></div><a href="${url}" target="_blank" rel="noreferrer">Open jobs</a></article>`
  ).join("");
}

function renderCourses(courses, skills) {
  els.courseList.innerHTML = courses.map((name, i) => {
    const q = encodeURIComponent(name);
    return `<article class="resource"><div><h4>${name}</h4><p>Best for ${skills[i % skills.length].toLowerCase()} and portfolio momentum.</p></div><a href="https://www.google.com/search?q=${q}" target="_blank" rel="noreferrer">Find course</a></article>`;
  }).join("");
}

// ─── Event listeners ──────────────────────────────────────────────────────────

document.querySelector("#pivotForm").addEventListener("submit", e => {
  e.preventDefault();
  simulate();
});

[els.hours, els.experience].forEach(input => {
  input.addEventListener("input", () => {
    els.hoursValue.textContent = els.hours.value;
    els.experienceValue.textContent = els.experience.value;
  });
});

function showView(viewName, shouldScroll = true) {
  document.querySelectorAll(".tab").forEach(tab => {
    const active = tab.dataset.view === viewName;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
  document.querySelectorAll(".view").forEach(v => v.classList.add("hidden"));
  const active = document.querySelector("#view-" + viewName);
  if (active) active.classList.remove("hidden");
  if (location.hash.replace("#", "") !== viewName) history.replaceState(null, "", "#" + viewName);
  if (shouldScroll) document.querySelector("main").scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => showView(tab.dataset.view)));
document.querySelectorAll("[data-view-link]").forEach(link => {
  link.addEventListener("click", e => { e.preventDefault(); showView(link.dataset.viewLink); });
});

els.copySummary.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(currentSummary);
    els.copySummary.title = "Copied";
  } catch {
    els.copySummary.title = currentSummary;
  }
});

// ─── Searchable dropdown options ─────────────────────────────────────────────

const currentRoleOptions = [
  "None / Not working",
  "Student",
  "Unemployed",
  "Customer Support Specialist",
  "Teacher",
  "Sales Representative",
  "Operations Coordinator",
  "Graphic Designer",
  "Accountant",
  "Nurse",
  "Journalist",
  "Software Developer",
  "Data Analyst",
  "Digital Marketing Manager",
  "Human Resources Manager",
  "Mechanic",
  "Chef",
  "Architect",
  "Business Owner",
  "Lawyer",
  "Bank Teller",
  "Cashier",
  "Receptionist",
  "Office Administrator",
  "Project Manager",
  "Civil Engineer",
  "Electrical Engineer",
  "Pharmacist",
  "Clinical Officer",
  "Social Worker",
  "Security Guard",
  "Driver",
  "Farmer",
  "Carpenter",
  "Electrician",
  "Plumber",
  "Tailor",
  "Photographer",
  "Videographer",
  "Event Planner",
  "Real Estate Agent",
  "Insurance Agent",
  "Procurement Officer",
  "Logistics Coordinator",
  "Warehouse Manager",
  "Lab Technician",
  "Radiographer",
  "Nutritionist",
  "Counsellor / Therapist",
  "Pastor / Religious Leader",
  "Police Officer",
  "Military Personnel",
  "Politician / Civil Servant",
  "NGO / Development Worker",
  "Content Creator / Influencer",
  "Freelancer",
];

const targetRoleOptions = [
  "UX Designer",
  "Data Analyst",
  "Product Manager",
  "Software Developer",
  "Cybersecurity Analyst",
  "Digital Marketing Manager",
  "Lawyer",
  "Nurse",
  "Accountant",
  "Human Resources Manager",
  "Chef",
  "Mechanic",
  "Architect",
  "Journalist",
  "Business Owner",
  "Graphic Designer",
  "Financial Analyst",
  "Project Manager",
  "Civil Engineer",
  "Electrical Engineer",
  "Pharmacist",
  "Clinical Officer",
  "Social Worker",
  "Event Planner",
  "Real Estate Agent",
  "Insurance Agent",
  "Procurement Officer",
  "Logistics Coordinator",
  "Lab Technician",
  "Nutritionist",
  "Counsellor / Therapist",
  "Content Creator / Influencer",
  "Videographer / Photographer",
  "Teacher",
  "IT Support Specialist",
  "Network Engineer",
  "Cloud Engineer",
  "DevOps Engineer",
  "Mobile App Developer",
  "Game Developer",
  "AI / Machine Learning Engineer",
  "Blockchain Developer",
  "E-commerce Manager",
  "SEO Specialist",
  "Copywriter",
  "Translator / Interpreter",
  "Voice Artist",
  "Podcaster",
  "YouTuber",
  "Fitness Trainer",
  "Pilot",
  "Marine Engineer",
];

function buildSearchableSelect(searchInputId, dropdownId, hiddenInputId, options) {
  const searchInput = document.getElementById(searchInputId);
  const dropdown = document.getElementById(dropdownId);
  const hiddenInput = document.getElementById(hiddenInputId);

  function renderOptions(filter) {
    const filtered = filter
      ? options.filter(o => o.toLowerCase().includes(filter.toLowerCase()))
      : options;

    if (filtered.length === 0) {
      dropdown.innerHTML = `<div class="select-option select-empty">No matches found</div>`;
    } else {
      dropdown.innerHTML = filtered.map(o =>
        `<div class="select-option" data-value="${o}">${o}</div>`
      ).join("");
    }

    dropdown.querySelectorAll(".select-option[data-value]").forEach(el => {
      el.addEventListener("mousedown", e => {
        e.preventDefault();
        selectOption(el.dataset.value);
      });
    });
  }

  function selectOption(value) {
    hiddenInput.value = value;
    searchInput.value = value;
    searchInput.classList.add("has-value");
    dropdown.classList.remove("open");
  }

  searchInput.addEventListener("focus", () => {
    renderOptions(searchInput.value);
    dropdown.classList.add("open");
  });

  searchInput.addEventListener("input", () => {
    hiddenInput.value = ""; // clear until a real option is selected
    searchInput.classList.remove("has-value");
    renderOptions(searchInput.value);
    dropdown.classList.add("open");
  });

  searchInput.addEventListener("blur", () => {
    // If typed text matches an option exactly, accept it; otherwise clear
    setTimeout(() => {
      const match = options.find(o => o.toLowerCase() === searchInput.value.toLowerCase());
      if (match) {
        selectOption(match);
      } else if (!hiddenInput.value) {
        searchInput.value = "";
        searchInput.classList.remove("has-value");
      }
      dropdown.classList.remove("open");
    }, 150);
  });

  // Keyboard nav
  searchInput.addEventListener("keydown", e => {
    const items = [...dropdown.querySelectorAll(".select-option[data-value]")];
    const active = dropdown.querySelector(".select-option.active");
    let idx = items.indexOf(active);
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (idx < items.length - 1) idx++;
      else idx = 0;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (idx > 0) idx--;
      else idx = items.length - 1;
    } else if (e.key === "Enter" && active) {
      e.preventDefault();
      selectOption(active.dataset.value);
      return;
    } else if (e.key === "Escape") {
      dropdown.classList.remove("open");
      return;
    } else {
      return;
    }
    items.forEach(i => i.classList.remove("active"));
    if (items[idx]) {
      items[idx].classList.add("active");
      items[idx].scrollIntoView({ block: "nearest" });
    }
  });
}

buildSearchableSelect("currentRoleSearch", "currentRoleDropdown", "currentRole", currentRoleOptions);
buildSearchableSelect("targetRoleSearch", "targetRoleDropdown", "targetRole", targetRoleOptions);

showView(["plan", "jobs", "courses", "how"].includes(location.hash.replace("#", "")) ? location.hash.replace("#", "") : "plan", false);