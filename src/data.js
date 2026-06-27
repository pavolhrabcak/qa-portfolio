export const personalInfo = {
  name: 'Pavol Hrabčák',
  title: 'QA Automation Engineer',
  subtitle: 'Building quality strategies that prioritize value over automation percentages.',
  email: 'pali.hrabcak@gmail.com',
  linkedin: 'linkedin.com/in/pavol-hrabcak-856388303',
  github: '',
  location: 'Košice, Slovakia',
  available: true,
  summary: 'QA Engineer with a background in both manual and automated testing, currently responsible for quality processes across enterprise applications. Experienced in building and scaling Playwright-based automation frameworks, defining test strategies, implementing RBAC and API validation, and driving release confidence through reliable end-to-end testing. Focused on risk-based testing, scalable automation, and efficient QA workflows supported by modern AI tools. Rather than measuring success by automation percentages alone, I build sustainable quality strategies that balance coverage, execution speed, long-term maintenance costs, and business risk.',
  languages: ['English', 'Slovak', 'Czech'],
  stats: [
    { value: '12+',  label: 'Years Experience' },
    { value: '8',    label: 'Projects Delivered' },
    { value: '600+', label: 'Automated Tests' },
    { value: '2',    label: 'Certifications' },
  ],
}

export const skills = [
  {
    category: 'Manual Testing',
    emoji: '🔍',
    accent: { border: 'rgba(16,185,129,0.3)', glow: 'rgba(16,185,129,0.08)' },
    items: [
      { name: 'Functional Testing',         level: 95 },
      { name: 'Regression Testing',         level: 92 },
      { name: 'Integration Testing',        level: 85 },
      { name: 'User Acceptance Testing',    level: 88 },
      { name: 'Smoke & Sanity Testing',     level: 95 },
      { name: 'Compatibility Testing',      level: 82 },
      { name: 'Exploratory Testing',        level: 90 },
      { name: 'Ad-Hoc Testing',             level: 88 },
      { name: 'Chrome DevTools',            level: 85 },
    ],
  },
  {
    category: 'Test Automation',
    emoji: '⚙️',
    accent: { border: 'rgba(129,140,248,0.3)', glow: 'rgba(129,140,248,0.08)' },
    items: [
      { name: 'Playwright',                 level: 85 },
      { name: 'Cypress',                    level: 85 },
      { name: 'Selenium WebDriver',         level: 62 },
      { name: 'Page Object Model (POM)',    level: 85 },
      { name: 'BDD / Cucumber / Gherkin',  level: 70 },
      { name: 'Web Automation Locators',    level: 88 },
      { name: 'E2E Testing',               level: 88 },
      { name: 'AI-Assisted Test Development', level: 85 },
      { name: 'CI Integration',             level: 70 },
    ],
  },
  {
    category: 'API & Performance',
    emoji: '🌐',
    accent: { border: 'rgba(168,85,247,0.3)', glow: 'rgba(168,85,247,0.08)' },
    items: [
      { name: 'REST API Testing',           level: 70 },
      { name: 'Postman',                    level: 70 },
      { name: 'JMeter',                     level: 55 },
    ],
  },
  {
    category: 'Methodologies',
    emoji: '🔄',
    accent: { border: 'rgba(52,211,153,0.3)', glow: 'rgba(52,211,153,0.08)' },
    items: [
      { name: 'Agile',                      level: 92 },
      { name: 'Scrum',                      level: 90 },
      { name: 'Kanban',                     level: 82 },
    ],
  },
]

export const technologies = [
  {
    category: 'CI/CD & DevOps',
    color: 'text-orange-300',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.25)',
    items: ['GitHub', 'Git', 'Azure DevOps', 'Jenkins', 'Docker', 'Vercel', 'Linux', 'Terminal'],
  },
  {
    category: 'Bug Tracking & TMS',
    color: 'text-red-300',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.25)',
    items: ['JIRA', 'Azure DevOps'],
  },
  {
    category: 'IDE & AI Tools',
    color: 'text-violet-300',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    items: ['VS Code', 'Claude', 'GitHub Copilot', 'Codex'],
  },
  {
    category: 'Reporting & Documentation',
    color: 'text-blue-300',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    items: ['Allure Report', 'Playwright Report', 'Confluence'],
  },
]

export const experience = [
  {
    role: 'QA Automation Engineer',
    company: 'Hotovo',
    period: '07/2025 – Present',
    description:
      'Sole QA owner responsible for release confidence, test strategy, and automation framework development for an enterprise translation platform supporting document translation, reporting, administration, and role-based workflows.',
    highlights: [
      'Built and scaled a Playwright + TypeScript automation suite with 450+ E2E tests',
      'Implemented RBAC validation, API mocking, accessibility checks (axe-core), and risk-based regression coverage across business-critical workflows',
      'Designed reusable Page Object Model architecture, fixtures, and shared testing utilities',
      'Reduced manual regression effort by automating core business workflows with stable, low-flakiness Playwright tests integrated into CI pipelines',
      'Prepared and maintained test data to support automated and manual test scenarios',
    ],
    tech: ['Playwright', 'TypeScript', 'Azure DevOps', 'axe-core', 'API Mocking', 'RBAC Testing', 'AI-Assisted QA'],
  },
  {
    role: 'QA Automation Engineer',
    company: 'Hotovo',
    period: '10/2023 – 07/2025',
    description:
      'Member of an international QA team delivering automated test coverage for a large enterprise application consisting of approximately 10 modules. Responsible for end-to-end testing of a dedicated module using Cypress and Cucumber BDD.',
    highlights: [
      'Owned E2E test coverage for a dedicated module within a 10-module enterprise application',
      'Implemented automated tests using Cypress + Cucumber following BDD practices',
      'Collaborated with QA colleagues across regions to align coverage and support release cycles',
      'Contributed to test planning, defect reporting, and regression validation',
      'Designed test data sets for regression, RBAC, and edge case coverage',
    ],
    tech: ['Cypress', 'Cucumber', 'BDD', 'TypeScript', 'JIRA', 'Manual Testing', 'Figma'],
  },
  {
    role: 'Test Engineer / CMS Content Administrator',
    company: 'GlobalLogic',
    period: '10/2018 – 10/2023',
    description:
      'Supported the delivery and quality of a large-scale multilingual scientific web platform by managing content publication, validating releases, and coordinating website updates across multiple business teams. Served as a key link between marketing, designers, developers, and QA throughout the content delivery lifecycle.',
    highlights: [
      'Delivered hundreds of website updates including product pages, landing pages, navigation changes, metadata, and multilingual content',
      'Validated new functionality and content releases in UAT environments before production deployment',
      'Maintained structured content and data using Oracle BCC CMS, HTML, CSS, JSON, and XML',
      'Mentored team members and helped establish consistent publishing practices',
    ],
    tech: ['UAT Testing', 'Oracle BCC CMS', 'HTML/CSS', 'JSON/XML', 'JIRA', 'GitHub', 'Bitbucket', 'Zeplin'],
  },
  {
    role: 'Test Engineer',
    company: 'GlobalLogic',
    period: '01/2017 – 09/2018',
    description:
      'Performed manual and automated testing for OneTrack, an online real-time medical equipment management system tracking 50,000+ devices across healthcare facilities. Responsible for test planning, test case design, and defect reporting in a regulated environment.',
    highlights: [
      'Executed manual and Selenium-based automated tests across core equipment tracking and reporting workflows',
      'Designed and maintained test cases and test plans in TestLink',
      'Validated bar code scanning, RFID, user compliance reporting, and maintenance tracking features',
      'Collaborated with developers on defect triage and regression cycles',
    ],
    tech: ['Selenium', 'TestLink', 'Manual Testing', 'JIRA', 'Test Planning'],
  },
  {
    role: 'QA & Application Administrator',
    company: 'T-Systems International',
    period: '04/2007 – 12/2016',
    description:
      'Combined application support, testing, and data analysis responsibilities for enterprise business systems. Built experience in software quality, defect investigation, data validation, and stakeholder collaboration while supporting production environments and business operations.',
    highlights: [
      'Executed manual testing and defect reporting for web applications and business workflows',
      'Validated data quality, monitored integrations, and investigated production issues',
      'Performed SQL-based analysis and reporting using SAP BusinessObjects and XML datasets',
      'Administered user roles and permissions while supporting customers during on-call operations',
    ],
    tech: ['Manual Testing', 'SQL', 'SAP BO', 'XML', 'Data Quality', 'Business Reporting', 'Production Support'],
  },
]

export const caseStudy = {
  title: 'Enterprise Translation Platform Quality Transformation',
  company: 'Hotovo',
  period: '07/2025 – Present',
  role: 'QA Automation Engineer',
  summary:
    "Built and scaled a Playwright + TypeScript automation solution for an enterprise translation platform, becoming the sole QA owner responsible for release confidence, test strategy, and automation architecture across multiple business-critical modules.",
  challenge:
    "The application supports document and text translation workflows used across a global organization—covering role-based areas, complex data tables, reporting features, administration screens, file processing workflows, and strict authorization requirements. As the team structure changed and engineering resources were reduced, maintaining release confidence required a scalable automation strategy that could validate business-critical functionality without creating excessive maintenance overhead or slow execution times.",
  approach: [
    "Designed and expanded a Playwright + TypeScript framework with Page Object Model architecture, reusable utilities, and shared fixtures.",
    "Implemented role-based testing strategy covering multiple user roles and unauthorized access scenarios (full RBAC validation).",
    "Introduced extensive API mocking to reduce backend dependencies, improve test determinism, and keep execution fast.",
    "Built end-to-end coverage across document translation, history, billing, reporting, administration, and feedback workflows.",
    "Added accessibility validation using axe-core and established quality guidelines defining E2E coverage boundaries.",
    "Adopted AI-assisted development workflow for test generation, code reviews, and framework improvements.",
    "Intentionally excluded third-party-dependent scenarios (e.g. large file uploads, Azure translation service) from automation due to execution cost and instability risks — maintained as targeted manual regression.",
  ],
  comparison: [
    { label: 'E2E Coverage',           before: 'Limited',        after: '450+ automated tests',        delta: 'Core paths covered'     },
    { label: 'Regression Execution',   before: 'Mostly manual',  after: 'Core workflows automated',    delta: '~90% · risk-based'  },
    { label: 'Role Coverage',          before: 'Partial',        after: 'Complete RBAC validation',    delta: '5 roles covered'        },
    { label: 'API Dependency',         before: 'High',           after: 'Extensively mocked',          delta: 'Low flakiness'          },
    { label: 'Accessibility Testing',  before: 'None',           after: 'Automated axe-core checks',   delta: 'Continuous a11y'        },
    { label: 'Test Architecture',      before: 'Ad-hoc',         after: 'Reusable test architecture',  delta: 'Scalable & documented'  },
  ],
  impact: [
    "Reduced manual regression effort by approximately 90% while maintaining high release confidence across translation, reporting, administration, and RBAC workflows.",
    "Subsequent performance optimization of the automated suite further reduced execution time from ~55 to ~15 minutes, enabling rapid feedback on critical user journeys and supporting faster release decisions.",
    "Established reusable automation patterns, testing standards, and documentation that enable future contributors to expand coverage efficiently with minimal maintenance overhead.",
  ],
  tech: ['Playwright', 'TypeScript', 'Page Object Model', 'API Mocking', 'axe-core', 'GitHub Actions', 'RBAC Testing', 'E2E Automation', 'Accessibility Testing', 'AI-Assisted Development'],
}

export const training = [
  {
    year: '2025',
    title: 'Advanced Playwright',
    provider: 'Skillmea',
    type: 'Course',
    description: 'Advanced Playwright patterns, fixtures, API mocking, and scalable test architecture.',
  },
  {
    year: '2024',
    title: 'API Testing with Postman',
    provider: 'Udemy',
    type: 'Course',
    description: 'REST API testing, collection design, environments, and automation with Newman — course by Valentin Despa.',
  },
  {
    year: '2023',
    title: 'Test Automation in Playwright',
    provider: 'Skillmea',
    type: 'Course',
    description: 'End-to-end test automation with Playwright covering core patterns and CI integration.',
  },
  {
    year: '2021',
    title: 'Cypress Bootcamp',
    provider: 'Cypress.io',
    type: 'Course',
    description: 'Intensive Cypress bootcamp led by Filip Hric (Slovak Cypress ambassador) — advanced test patterns and best practices.',
  },
  {
    year: '2019',
    title: 'MySQL',
    provider: 'Skillmea',
    type: 'Course',
    description: 'SQL querying, data validation, and database-level test support.',
  },
  {
    year: '2018',
    title: 'SAFe 4 Certified Scrum Master',
    provider: 'Scaled Agile',
    type: 'Certification',
    description: 'Scaled Agile Framework certification covering Scrum Master role within large-scale Agile delivery.',
  },
  {
    year: '2017',
    title: 'ISTQB® Certified Tester – Foundation Level',
    provider: 'ISTQB',
    type: 'Certification',
    description: 'Official ISTQB certification covering software testing fundamentals, techniques, and best practices.',
  },
]

export const projects = [
  {
    title: 'Ľudovky z Východu',
    subtitle: 'Folk Songs Database',
    description: 'Bilingual digital archive of 400+ folk songs from Eastern Slovakia. Built on 2 years of personal content work — collecting songs, creating music sheets, and recording MP3 samples — combined with a full-featured web platform for preserving and sharing regional musical heritage.',
    url: 'https://ludovky-z-vychodu.vercel.app/',
    status: 'Invite Only',
    roles: ['Product Owner', 'QA', 'AI-Assisted Dev', 'Content Creator'],
    features: [
      'Browse and search 400+ folk songs with full lyrics',
      'Favourites, full-screen view, copy and print lyrics',
      'View, download and print PDF sheet music',
      'Admin panel with bulk CSV song upload and editing',
      'Slovak / English language switch',
    ],
    tech: ['React', 'Tailwind', 'Vite', 'Supabase'],
  },
  {
    title: 'Machins SK',
    subtitle: 'British Stamps Collectors Guide',
    description: 'Comprehensive Slovak-language collectors guide for British Machin definitive stamps — the result of several years of personal philatelic study and research. Covers the full history, variants, and identifying characteristics of this iconic Queen Elizabeth II stamp series.',
    url: 'https://machins-sk.vercel.app/',
    status: 'Live',
    roles: ['Product Owner', 'QA', 'AI-Assisted Dev', 'Content Creator'],
    features: [
      'Years of philatelic research and professional content preparation',
      'Full history of the Machin definitive stamp series',
      'Types, parameters and security features to distinguish variants',
      'Rarities, regional and anniversary printings',
      'Philatelic dictionary of related terms',
    ],
    tech: ['React', 'Tailwind', 'Node.js'],
  },
]
