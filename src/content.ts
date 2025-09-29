export type Link = { label: string; url: string }

export const profile = {
  name: 'Mandar Vijay Patil',
  title: 'Software Engineer & Learner',
  location: 'Thane, Maharashtra, India',
  email: 'mvp23402@gmail.com',
  phone: '+91 8454996601',
  taglinePhrases: ['Learner', 'Engineer @Monotype', 'Former Intern @Microsoft', "SIH'22 Winner"],
  socials: [
    { label: 'GitHub', url: 'https://github.com/Patil-Mandar/' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/mandar-patil-89bb90203/' },
    { label: 'LeetCode', url: 'https://leetcode.com/mvp23402/' },
    { label: 'Blog', url: 'https://medium.com/@mvp23402/' },
  ] as Link[],
  resumeUrl: 'https://drive.google.com/file/d/1t85VX-nNMLtdA3GYF22iDX6SNx60pRGX/view?usp=sharing',
  headshotUrl: 'https://source.unsplash.com/collection/895539/400x400',
}

export const intro = `Hi, my name is Mandar Vijay Patil, and I’m from Mumbai. I completed my B. Tech in Computer Science from Vishwakaram Institute of Technology, Pune. I have a strong background in web application development, working with technologies like C++, PHP(Laravel), MongoDB, and JavaScript frameworks like React & Vue.

I’ve interned at Talentbox in Bangalore and Microsoft in Hyderabad, and later joined Monotype as a trainee for six months. Currently, I’m a full-time developer at Monotype, where I work on enhancing websites, improving system performance, and solving technical challenges. I really enjoy tackling complex problems and finding efficient solutions—it’s what excites me the most.

Outside of work, I’m passionate about exploring my own potential—mentally, physically, and spiritually. I enjoy meditation and pushing myself to understand limits and achieve personal growth.`

export type Experience = {
  company: string
  role: string
  location: string
  start: string
  end?: string
  points: string[]
  highlight?: string
}

export const experiences: Experience[] = [
  {
    company: 'Monotype',
    role: 'Software Engineer',
    location: 'Noida, India',
    start: 'Jan 2024',
    points: [
      'Boosted productivity with Copilot, Cursor IDE, and AI-assisted utilities',
      'Built full‑stack features (PHP/Laravel, MongoDB, Vue), async workflows and pipelines',
      'Designed inventory features processing up to 1,000 files concurrently',
      'Developed AI‑Writing Assistant with configurable OpenAI integrations',
      'Reliability: reduced code smells 1,000 → 20, unit tests to 91% coverage',
    ],
    highlight:
      'Related family feature: maintained transitive relationships A↔B↔C via add/remove events used across saves/deletes, keeping data in sync and extensible.',
  },
  {
    company: 'Microsoft',
    role: 'Software Engineer Intern',
    location: 'Hyderabad, India',
    start: 'May 2023',
    end: 'Jul 2023',
    points: [
      'Enhanced internal dev tool with team‑specific log analysis',
      'Fixed five critical production bugs',
      'Worked across React/TypeScript frontend and C# .NET + KQL backend',
    ],
    highlight:
      'Sequence diagram titles: rendered a lightweight duplicate diagram for persistent titles, avoiding heavy re‑renders for thousands of requests.',
  },
  {
    company: 'TalentBox Labs',
    role: 'Full Stack Developer Intern',
    location: 'Bengaluru, India',
    start: 'Oct 2022',
    end: 'Feb 2023',
    points: [
      'Built a job portal end‑to‑end with the MERN stack',
      'Contributed across design, implementation and deployment',
    ],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  links: Link[]
}

export const projects: Project[] = [
  {
    title: 'SeeKers',
    description:
      'Two‑way recommendation system simplifying job hunting and recruiting. Optimized backend algorithms for faster loads.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React'],
    image: 'https://user-images.githubusercontent.com/80695146/170883425-0c57f083-d3db-48d7-9ec0-57eb4dee2ed4.png',
    links: [{ label: 'GitHub', url: 'https://github.com/Patil-Mandar/SeeKers' }],
  },
  {
    title: 'Course Sentiment Rater',
    description:
      'Scrapes up to 100 comments, trains ML (CountVectorizer + RandomForest) to rate courses, 93% test accuracy.',
    tech: ['Python', 'Flask'],
    image: 'https://user-images.githubusercontent.com/76464970/166136619-cd8c02de-2ed2-49e2-a048-d9ad5c28f659.gif',
    links: [{ label: 'GitHub', url: 'https://github.com/Patil-Mandar/Suggesting-Best-Courses-using-Sentiment-Analysis' }],
  },
  {
    title: 'Virtual Operating System (3 Phases)',
    description:
      'C++ OS model executing jobs with memory, buffers, Round Robin, and spooling; error handling phases.',
    tech: ['C++'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpzwEsMdNs7n8s9wZ213k0k4NVzUzyrl5IA&s',
    links: [],
  },
]

export type AchievementItem = { title: string; image?: string }
export const achievements: AchievementItem[] = [
  { title: 'Smart India Hackathon 2022 – Winner', image: 'https://media.licdn.com/dms/image/v2/C4D22AQG4qpXZEiTseA/feedshare-shrink_800/feedshare-shrink_800/0/1661916452414?e=1761782400&v=beta&t=y2ZSckUFmcEaHrnBzlQ4cGPCYLnlrdem9LJVMkME3aA' },
  { title: 'Binance Ideathon 2022 – 1st Runner Up', image: 'https://media.licdn.com/dms/image/v2/C5622AQGg-z5P_K-a0w/feedshare-shrink_800/feedshare-shrink_800/0/1660804082060?e=1761782400&v=beta&t=A6WQil_hPTmn9R1vQjxyW8cchCJFdPueUNxO1t5SpYI' },
  { title: 'ISA VIT Pune Hackathon – 3rd Runner Up', image: 'https://media.licdn.com/dms/image/v2/C4D22AQEWTBrX5HiQgw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1652067382211?e=1761782400&v=beta&t=1irSS0AIHi7cGTXq0t211WyZDtnbPWFSa7bVy--bxhM' },
  { title: 'India‑Luxembourg International Hackathon – Finalist', image: 'https://media.licdn.com/dms/image/v2/C4D22AQFaUwDRJ08law/feedshare-shrink_800/feedshare-shrink_800/0/1675260189391?e=1761782400&v=beta&t=3fhUrpFMEaFdtV6mzvZdxyK3Yedc-hU1mqTwz2mTvq8' },
  { title: 'College contests: CODE_SET 3.0 & Pattern Up – Winner', image: 'https://media.licdn.com/dms/image/v2/C4E22AQHX2s_tth47Zw/feedshare-shrink_800/feedshare-shrink_800/0/1628227716020?e=1761782400&v=beta&t=1BpoWtExG5S00w6AGqlW018E_CN9SX0C2MOFkfu0vrc' },
]

export type CertificationItem = { name: string; by: string; url: string }
export const certifications: CertificationItem[] = [
  {
    name: 'Deep Dive in C++ with OOP',
    by: 'Udemy',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-5eae055a-39b1-4bf3-beb5-f1ec2810b4ac.pdf',
  },
  {
    name: 'Web Developer Bootcamp 2022',
    by: 'Udemy',
    url: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-4f912cdc-8982-4583-8b1d-54482532908c.pdf',
  },
]

export const skills = {
  programming: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript', 'Node.js', 'PHP', 'C# (.NET)'],
  frameworks: ['React', 'Vue', 'Express', 'Mongoose', 'Flask', 'Django', 'Laravel', 'Pandas', 'NumPy'],
  databases: ['MySQL', 'KQL', 'Oracle', 'MongoDB'],
  tools: ['VS Code', 'Figma', 'Azure', 'Git', 'GitHub', 'Docker', 'Linux', 'AWS', 'RabbitMQ', 'Postman', 'Cursor'],
}

export const education = [
  {
    school: 'Vishwakarma Institute of Technology, Pune',
    degree: 'B.Tech, Computer Science',
    years: '2020 – 2024',
    note: 'CGPA 8.87',
  },
  {
    school: "St. Xavier's English High School, Thane",
    degree: 'HSC (PCM + CS)',
    years: '2018 – 2020',
    note: '83.38%',
  },
]

export const hobbies = {
  list: ['Meditation', 'Traveling', 'Fitness'],
  mapHint: 'Visited states feature coming soon',
}


