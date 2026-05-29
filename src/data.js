export const personalInfo = {
  name: 'Pavol Hrabčák',
  title: 'QA Engineer',
  subtitle: 'Web & Desktop Application Testing · Test Automation · Quality Advocate',
  email: 'pavol.hrabcak@email.com',       // ← update
  linkedin: 'linkedin.com/in/pavol-hrabcak', // ← update
  github: 'github.com/pavol-hrabcak',       // ← update
  location: 'Slovakia',
  available: true,
  summary: 'Experienced QA Engineer with a strong background in manual and automated testing of web and desktop applications. Passionate about delivering high-quality software through comprehensive test strategies, solid automation frameworks, and thorough defect analysis. Skilled at collaborating with cross-functional teams in Agile environments to embed quality throughout the entire software development lifecycle.',
  stats: [
    { value: '5+',    label: 'Years Experience' },
    { value: '30+',   label: 'Projects Tested' },
    { value: '20+',   label: 'Tools Mastered' },
    { value: '1000+', label: 'Bugs Reported' },
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
      { name: 'Selenium WebDriver',         level: 88 },
      { name: 'Playwright',                 level: 85 },
      { name: 'Cypress',                    level: 80 },
      { name: 'Page Object Model (POM)',    level: 90 },
      { name: 'BDD / Cucumber / Gherkin',  level: 82 },
      { name: 'TestNG / JUnit / pytest',   level: 85 },
    ],
  },
  {
    category: 'API & Performance',
    emoji: '🌐',
    accent: { border: 'rgba(168,85,247,0.3)', glow: 'rgba(168,85,247,0.08)' },
    items: [
      { name: 'REST API Testing',           level: 90 },
      { name: 'Postman / Newman',           level: 92 },
      { name: 'REST Assured',               level: 78 },
      { name: 'JMeter',                     level: 75 },
      { name: 'GraphQL Testing',            level: 70 },
      { name: 'k6 Load Testing',            level: 68 },
    ],
  },
  {
    category: 'Desktop Testing',
    emoji: '🖥️',
    accent: { border: 'rgba(52,211,153,0.3)', glow: 'rgba(52,211,153,0.08)' },
    items: [
      { name: 'Windows Desktop Apps',       level: 88 },
      { name: 'Electron Applications',      level: 80 },
      { name: 'WinForms / WPF',            level: 75 },
      { name: 'Installation Testing',       level: 85 },
      { name: 'Usability Testing',          level: 82 },
      { name: 'Accessibility Testing',      level: 70 },
    ],
  },
]

export const technologies = [
  {
    category: 'Automation Frameworks',
    color: 'text-emerald-300',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    items: ['Selenium WebDriver', 'Playwright', 'Cypress', 'Appium', 'TestNG', 'JUnit', 'pytest', 'Robot Framework'],
  },
  {
    category: 'Programming Languages',
    color: 'text-emerald-300',
    bg: 'rgba(129,140,248,0.08)',
    border: 'rgba(129,140,248,0.25)',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'Bash'],
  },
  {
    category: 'API & Performance',
    color: 'text-purple-300',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.25)',
    items: ['Postman', 'REST Assured', 'SoapUI', 'JMeter', 'k6', 'Gatling', 'Newman'],
  },
  {
    category: 'CI/CD & DevOps',
    color: 'text-orange-300',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.25)',
    items: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Docker', 'Git', 'Maven', 'Gradle'],
  },
  {
    category: 'Bug Tracking & TMS',
    color: 'text-red-300',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.25)',
    items: ['JIRA', 'TestRail', 'Zephyr', 'qTest', 'Bugzilla', 'Azure DevOps'],
  },
  {
    category: 'Reporting & Tooling',
    color: 'text-blue-300',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    items: ['Allure Report', 'ExtentReports', 'VS Code', 'IntelliJ IDEA', 'Fiddler', 'Charles Proxy'],
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
  title: 'Automation Framework from Zero',
  company: 'TechCorp Solutions',
  period: '2022 – 2023',
  role: 'Senior QA Engineer',
  summary:
    'Built a complete test automation framework from scratch for a SaaS platform with 100,000+ active users, replacing a fully manual regression process that was blocking every release.',
  challenge:
    'The QA team spent 3 full days per sprint on manual regression, which caused biweekly release cycles and a persistently high bug escape rate. Every hotfix created more regression work, forming a cycle the team could not break.',
  approach:
    'Designed a Playwright + TypeScript framework with strict Page Object Model, integrated it into GitHub Actions with parallel execution across 4 environments, and introduced a dashboard-based reporting loop so developers could triage failures without QA involvement.',
  comparison: [
    { label: 'Regression Duration', before: '3 days',    after: '2 hrs',      delta: '−90%',      up: false },
    { label: 'Automated Coverage',  before: '12%',       after: '74%',        delta: '+62 pp',     up: true  },
    { label: 'Bug Escape Rate',     before: '18%',       after: '3%',         delta: '−83%',      up: false },
    { label: 'Release Cadence',     before: '2× / month', after: '4× / month', delta: '2× faster',  up: true  },
  ],
  impact:
    'Saved ~6 dev-days per month, enabled weekly releases, and cut production incidents by 60% in the quarter following rollout.',
  tech: ['Playwright', 'TypeScript', 'GitHub Actions', 'Docker', 'Allure Report', 'Page Object Model', 'Parallel Execution'],
}

export const training = [
  {
    year: '2024',
    title: 'Playwright Advanced Automation',
    provider: 'Udemy',
    type: 'Course',
    description: 'Advanced Playwright patterns, API mocking, component testing, and full CI/CD integration.',
  },
  {
    year: '2023',
    title: 'Docker for QA Engineers',
    provider: 'LinkedIn Learning',
    type: 'Course',
    description: 'Containerizing test environments, running tests in Docker, integrating with CI pipelines.',
  },
  {
    year: '2023',
    title: 'k6 Performance Testing',
    provider: 'k6 Academy',
    type: 'Course',
    description: 'Modern load testing with k6, JavaScript scripting, thresholds, and metrics analysis.',
  },
  {
    year: '2022',
    title: 'Performance Testing with JMeter',
    provider: 'Udemy',
    type: 'Course',
    description: 'Load, stress, and spike testing using Apache JMeter with CI/CD integration.',
  },
  {
    year: '2021',
    title: 'BDD with Cucumber & Selenium',
    provider: 'Udemy',
    type: 'Course',
    description: 'Behavior-driven development using Cucumber, Gherkin, and Selenium WebDriver.',
  },
  {
    year: '2020',
    title: 'REST API Testing with Postman',
    provider: 'LinkedIn Learning',
    type: 'Course',
    description: 'API testing fundamentals, collection management, environment variables, and Newman CLI.',
  },
  {
    year: '2019',
    title: 'ISTQB® Certified Tester – Foundation Level (CTFL)',
    provider: 'ISTQB / GASQ',
    type: 'Certification',
    description: 'Official ISTQB certification covering testing fundamentals, techniques, and best practices.',
  },
  {
    year: '2019',
    title: 'Agile Testing with Scrum',
    provider: 'Coursera',
    type: 'Course',
    description: 'Testing practices in Agile environments, Scrum ceremonies, and iterative quality approaches.',
  },
  {
    year: '2018',
    title: 'Selenium WebDriver with Java',
    provider: 'Udemy',
    type: 'Course',
    description: 'Selenium WebDriver fundamentals, Page Object Model, and test framework design patterns.',
  },
]
