import React from 'react'
import MatrixBackground from './components/MatrixBackground.jsx'
import SkillGrid from './components/SkillGrid.jsx'
import ExperienceCard from './components/ExperienceCard.jsx'

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Snowflake', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' }
]

const experiences = [
  {
    role: 'Machine Learning Engineer',
    company: '4L Data Intelligence',
    period: 'Oct 2023 – Present',
    location: 'San Ramon, CA',
    bullets: [
      'Scraped 2M+ provider records from 1,000+ hospital sites using Craw4AI and GPT-4o-mini, cutting data acquisition time by 90%.',
      'Built RAG pipeline with OpenAI Assistants API; applied semantic chunking and vector DB storage to boost retrieval accuracy by 35%.',
      'Migrated RESTful APIs from Flask to FastAPI with async I/O, increasing throughput 2.5× and reducing response time from 1.2s to 480ms.',
      'Converted Figma designs into interactive Dashboards with Angular, D3.js, and Tailwind CSS.',
      'Built ETL pipelines and Snowflake stored procedures handling 500K+ records/day with <1% failure.'
    ]
  },
  {
    role: 'Full Stack Software Engineer',
    company: 'Agile Datapro, Inc',
    period: 'Aug 2022 – Oct 2023',
    location: 'San Jose, CA',
    bullets: [
      'Integrated GPT‑3.5 Turbo into ChatBot using LangChain to suggest mitigation steps on a network analytics dashboard.',
      'Designed highly available microservices with Docker and Kubernetes, increasing system stability and uptime by 30%.',
      'Built a log‑monitoring system with Elasticsearch, Logstash, and Kibana.',
      'Improved webpage load time by 70% by building a custom CDN with S3 and CloudFront.'
    ]
  },
  {
    role: 'Software Engineer',
    company: 'Byte to Bit Technologies Pvt. Ltd',
    period: 'Jun 2018 – Dec 2020',
    location: 'Chennai, India',
    bullets: [
      'Automated deployments using Helm Charts, reducing deployment errors by 75%.',
      'Accelerated DB queries by 50% and reduced response time 80% by optimizing SQL with caching design pattern.',
      'Cut deployment time by 40% by automating CI/CD pipelines using GitHub Actions.'
    ]
  }
]

const App = () => (
  <div className="relative">
    <MatrixBackground />
    <header className="relative z-10 flex items-center justify-between px-6 py-4 backdrop-blur-lg">
      <h1 className="text-3xl font-bold text-green-400">Harish Kanna</h1>
      <nav className="space-x-6">
        <a href="#about" className="hover:text-green-400">About</a>
        <a href="#skills" className="hover:text-green-400">Skills</a>
        <a href="#experience" className="hover:text-green-400">Experience</a>
        <a href="#contact" className="hover:text-green-400">Contact</a>
      </nav>
    </header>

    <main className="relative z-10 px-6 max-w-5xl mx-auto">
      <section id="about" className="min-h-screen flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-4">Hello 👋</h2>
        <p className="text-lg leading-relaxed max-w-3xl">
          I&apos;m a Machine Learning & Software Engineer passionate about building scalable AI systems,
          crafting data pipelines, and creating engaging user experiences. Explore my work below!
        </p>
        <div className="mt-6 space-x-4">
          <a href="mailto:harish.kanna.s.98@gmail.com" className="px-4 py-2 border rounded hover:bg-green-400 hover:text-black">Email</a>
          <a href="https://linkedin.com/in/harish-kanna" target="_blank" rel="noreferrer" className="px-4 py-2 border rounded hover:bg-green-400 hover:text-black">LinkedIn</a>
        </div>
      </section>

      <section id="skills" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <SkillGrid skills={skills} />
      </section>

      <section id="experience" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        {experiences.map((exp, idx) => <ExperienceCard key={idx} {...exp} />)}
      </section>

      <section id="contact" className="py-16">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">Have an exciting project? Reach out → harish.kanna.s.98@gmail.com</p>
        <a href="mailto:harish.kanna.s.98@gmail.com" className="px-6 py-3 bg-green-400 text-black font-semibold rounded shadow hover:scale-105 transition-transform">Say Hello</a>
      </section>
    </main>

    <footer className="relative z-10 text-center py-6 text-sm text-gray-500">
      © {new Date().getFullYear()} Harish Kanna Srinivasan — Built with React & Vite
    </footer>
  </div>
)

export default App
