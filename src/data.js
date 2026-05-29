export const personalInfo = {
  name: 'Pavol Hrabčák',
  title: 'QA Engineer',
  subtitle: 'Web & Desktop Application Testing · Test Automation · Quality Advocate',
  email: 'pavol.hrabcak@email.com',       // ← update
  linkedin: 'linkedin.com/in/pavol-hrabcak', // ← update
  github: 'github.com/pavol-hrabcak',       // ← update
  location: 'Slovakia',
  available: true,
  summary: 'QA Engineer with a background in both manual and automated testing, currently focused on owning quality processes for enterprise applications. Experienced in building and scaling Playwright-based automation frameworks, defining test strategies, implementing RBAC and API validation, and driving release confidence through reliable end-to-end testing. Passionate about improving quality practices, reducing testing inefficiencies, and leveraging modern tools—including AI-assisted workflows—to accelerate software delivery without compromising quality.',
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
      { name: 'Exploratory Testing',        level: 90 },
      { name: 'User Acceptance Testing',    level: 88 },
      { name: 'Smoke & Sanity Testing',     level: 95 },
      { name: 'Compatibility Testing',      level: 82 },
    ],
  },
  {
    category: 'Test Automation',
    emoji: '⚙️',
    accent: { border: 'rgba(129,140,248,0.3)', glow: 'rgba(129,140,248,0.08)' },
    items: [
      { name: 'Playwright',                 level: 90 },
      { name: 'Cypress',                    level: 85 },
      { name: 'Selenium WebDriver',         level: 82 },
      { name: 'Page Object Model (POM)',    level: 92 },
      { name: 'BDD / Cucumber / Gherkin',  level: 80 },
      { name: 'Locators (XPath / CSS)',     level: 88 },
    ],
  },
  {
    category: 'API & Performance',
    emoji: '🌐',
    accent: { border: 'rgba(168,85,247,0.3)', glow: 'rgba(168,85,247,0.08)' },
    items: [
      { name: 'REST API Testing',           level: 90 },
      { name: 'Postman',                    level: 88 },
      { name: 'JMeter',                     level: 75 },
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
    items: ['GitHub', 'GitHub Actions', 'Azure DevOps', 'Jenkins', 'Docker', 'Linux', 'Terminal'],
  },
  {
    category: 'Bug Tracking & TMS',
    color: 'text-red-300',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.25)',
    items: ['JIRA', 'Azure DevOps', 'TestLink'],
  },
  {
    category: 'IDE & AI Tools',
    color: 'text-violet-300',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    items: ['VS Code', 'Claude', 'GitHub Copilot', 'Codex'],
  },
  {
    category: 'Languages & Data',
    color: 'text-cyan-300',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.25)',
    items: ['SQL', 'JSON', 'XML'],
  },
  {
    category: 'Design & Markup',
    color: 'text-pink-300',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.25)',
    items: ['Figma', 'Zeplin', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    category: 'Reporting & Documentation',
    color: 'text-blue-300',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    items: ['Allure Report', 'Playwright HTML Report', 'Confluence'],
  },
]

export const experience = [
  {
    role: 'Senior QA Engineer',
    company: 'TechCorp Solutions',
    period: 'Mar 2022 — Present',
    description:
      'Leading QA efforts for a large-scale SaaS web platform serving 100 000+ users. Building and maintaining automation frameworks using Playwright and Cypress. Mentoring junior QA engineers and establishing testing best practices across teams.',
    highlights: [
      'Reduced regression testing time by 60 % through automation',
      'Built end-to-end test framework from scratch with Playwright + TypeScript',
      'Integrated automated tests into CI/CD pipeline with GitHub Actions',
    ],
    tech: ['Playwright', 'TypeScript', 'JIRA', 'GitHub Actions', 'Docker', 'Allure'],
  },
  {
    role: 'QA Engineer',
    company: 'DesktopApp Studio',
    period: 'Jun 2020 — Feb 2022',
    description:
      'Responsible for QA of Windows desktop applications built with WinForms and Electron. Performed manual and automated testing across multiple product versions. Collaborated closely with developers in Agile/Scrum environment.',
    highlights: [
      'Automated 200+ test cases for desktop application regression suite',
      'Reduced bug escape rate by 40 % through improved test coverage',
      'Introduced BDD practices using Cucumber and Gherkin',
    ],
    tech: ['Selenium', 'Python', 'pytest', 'Cucumber', 'Jenkins', 'TestRail'],
  },
  {
    role: 'Junior QA Engineer',
    company: 'WebDev Agency',
    period: 'Sep 2018 — May 2020',
    description:
      'Started QA career testing web applications for agency clients across various industries. Focused on manual testing, writing test plans, test cases, and detailed bug reports. First experience with Selenium WebDriver automation.',
    highlights: [
      'Tested 15+ client web projects from kickoff to delivery',
      'Created comprehensive test documentation and test plans',
      'First automation experience with Selenium WebDriver + Java',
    ],
    tech: ['Selenium', 'Java', 'Postman', 'JIRA', 'Bugzilla', 'SQL'],
  },
]

export const caseStudy = {
  title: 'Enterprise Translation Platform Quality Transformation',
  company: 'Global Manufacturing Company',
  period: '2024 – Present',
  role: 'QA Automation Engineer',
  summary:
    "Built and scaled a Playwright-based automation framework for an enterprise translation platform, becoming the sole QA owner responsible for release confidence, test strategy, and automation architecture across multiple business-critical modules.",
  challenge:
    "The application supports document and text translation workflows used across a global organization—covering role-based areas, complex data tables, reporting features, administration screens, file processing workflows, and strict authorization requirements. As the team structure changed and engineering resources were reduced, maintaining release confidence required a scalable automation strategy that could validate business-critical functionality without creating excessive maintenance overhead or slow execution times.",
  approach: [
    "Designed and expanded a Playwright + TypeScript framework with Page Object Model architecture, reusable utilities, and shared fixtures.",
    "Implemented role-based testing strategy covering Admin, Data Science, User, and unauthorized access scenarios (full RBAC validation).",
    "Introduced extensive API mocking to reduce backend dependencies, improve test determinism, and keep execution fast.",
    "Built end-to-end coverage across document translation, history, billing, reporting, administration, and feedback workflows.",
    "Added accessibility validation using axe-core and established quality guidelines defining E2E coverage boundaries.",
    "Adopted AI-assisted development workflow for test generation, code reviews, and framework improvements.",
  ],
  comparison: [
    { label: 'E2E Coverage',           before: 'Limited',        after: '450+ automated tests',        delta: 'Full regression'        },
    { label: 'Regression Execution',   before: 'Mostly manual',  after: 'Fully automated',             delta: 'Zero manual regression' },
    { label: 'Role Coverage',          before: 'Partial',        after: 'Complete RBAC validation',    delta: '4 roles covered'        },
    { label: 'API Dependency',         before: 'High',           after: 'Extensively mocked',          delta: 'Low flakiness'          },
    { label: 'Accessibility Testing',  before: 'None',           after: 'Automated axe-core checks',   delta: 'Continuous a11y'        },
    { label: 'Test Architecture',      before: 'Ad-hoc',         after: 'Reusable POM framework',      delta: 'Scalable & documented'  },
  ],
  impact:
    "Enabled reliable regression validation across all major business workflows while maintaining a stable automation suite with low flakiness. Established testing standards, reusable patterns, and documentation that allow future contributors to onboard quickly and expand coverage without increasing maintenance costs. Improved release confidence by providing comprehensive validation of authentication, authorization, reporting, translation workflows, administration functions, and critical user journeys.",
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
