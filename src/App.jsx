import React from 'react'
import { motion } from 'framer-motion'
import MatrixBackground from './components/MatrixBackground.jsx'
import SkillGrid from './components/SkillGrid.jsx'
import ExperienceCard from './components/ExperienceCard.jsx'

// Import only the necessary SVG assets
import emailIcon from './assets/email-icon.svg'
import phoneIcon from './assets/phone-icon.svg'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import helloGif from './assets/Hello.gif'
import harishImage from './assets/harish.png'

const skills = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Go', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Spark (PySpark)', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg' },
  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'GitHub Actions', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'Hugging Face', logo: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
  { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
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
  },
  {
    role: 'Software Engineer – ML/AI',
    company: 'Psiog Digital (P) Ltd',
    period: 'May 2017 – Apr 2018',
    location: 'Chennai, India',
    bullets: [
      'Developed NLP data pipelines with NLTK, spaCy, and PySpark on Databricks for scalable document processing.',
      'Trained BiLSTM-CRF model for NER on 10M PubMed articles, achieving 95.5% accuracy.',
      'Automated text vectorization and storage via Databricks Feature Store, reducing preprocessing time by 50%.',
      'Created rule-based SVO extraction using regex and grammar rules for structured information mining.'
    ]
  }
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.5 }
  })
}

const terminalType = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: { duration: 1.5, ease: 'easeInOut' }
  }
}

// New animation variants
const glitchEffect = {
  initial: { x: 0, y: 0 },
  animate: {
    x: [0, -5, 5, -5, 5, 0],
    y: [0, 5, -5, 5, -5, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: 10,
    }
  }
}

const matrixReveal = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75]
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const terminalScan = {
  initial: { width: 0, opacity: 0.7 },
  animate: {
    width: "100%",
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      ease: "linear",
      repeat: Infinity
    }
  }
}

const App = () => (
  <div className="relative min-h-screen">
    <MatrixBackground />
    <header className="relative z-10 flex items-center justify-center px-6 py-4 backdrop-blur-lg">
      <motion.nav 
        className="space-x-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.3,
          staggerChildren: 0.1 
        }}
      >
        <motion.a 
          href="#about" 
          className="hover:text-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </motion.a>
        <motion.a 
          href="#skills" 
          className="hover:text-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Skills
        </motion.a>
        <motion.a 
          href="#experience" 
          className="hover:text-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Experience
        </motion.a>
        <motion.a 
          href="#contact" 
          className="hover:text-green-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.a>
      </motion.nav>
    </header>

    <main className="relative z-10 px-6 max-w-5xl mx-auto">
      <section id="about" className="min-h-screen flex flex-col justify-center bg-black/50 backdrop-blur-sm p-8 rounded-lg mb-16">
        <div className="w-full flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <motion.div 
              className="terminal-container mb-8"
              variants={matrixReveal}
              initial="hidden"
              animate="visible"
            >
              <div className="terminal-header flex items-center mb-4">
                <div className="terminal-button bg-red-500 w-3 h-3 rounded-full mr-2"></div>
                <div className="terminal-button bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
                <div className="terminal-button bg-green-500 w-3 h-3 rounded-full mr-2"></div>
                <div className="text-gray-400 text-sm ml-2">~/portfolio</div>
              </div>
              <div className="terminal-content font-mono">
                <div className="text-green-400 mb-2 flex">
                  $ <motion.span 
                      className="overflow-hidden whitespace-nowrap" 
                      initial="hidden"
                      animate="visible"
                      variants={terminalType}
                    >cat name.txt</motion.span>
                </div>
                <motion.h1 
                  className="text-5xl font-bold text-green-400 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  variants={glitchEffect}
                  whileHover="animate"
                >
                  Harish Kanna
                </motion.h1>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={0}
              className="mb-6"
            >
              <motion.h3 
                className="text-3xl font-semibold text-green-400 mb-2 animate-matrix-text"
                variants={glitchEffect}
                whileHover="animate"
              >
                Software Engineer/Machine Learning Engineer
              </motion.h3>
              <p className="text-gray-400 mb-4">3+ Years Experience</p>
            </motion.div>
            
            <motion.div 
              className="relative code-block mb-6 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
            >
              <motion.div
                className="absolute top-0 h-1 bg-green-400/50"
                initial="initial"
                animate="animate"
                variants={terminalScan}
                style={{ left: 0 }}
              />
        <p className="text-lg leading-relaxed max-w-3xl">
          I&apos;m a Machine Learning & Software Engineer passionate about building scalable AI systems,
          crafting data pipelines, and creating engaging user experiences. Explore my work below!
        </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap space-x-4 mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
            >
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-green-400 text-black font-semibold rounded-full shadow hover:bg-green-500 transition-colors animate-pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href="/Harish_Kanna_Resume.pdf" 
                download="Harish_Kanna_Resume.pdf"
                className="px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-400/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
            
            <motion.div
              className="social-media flex space-x-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:harish.kanna.s.98@gmail.com" 
                className="social-icon-link"
                variants={fadeIn}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img src={emailIcon} alt="Email" className="w-6 h-6 invert" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/harish-kanna-srinivasan/" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-link"
                variants={fadeIn}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://github.com/Hkkay" 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon-link"
                variants={fadeIn}
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={harishImage} 
              alt="Harish Kanna" 
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-green-400 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      <motion.section 
        id="skills" 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
      >
        <motion.div 
          className="bg-black/50 backdrop-blur-sm p-8 rounded-lg"
          whileHover={{ boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="flex items-center mb-8">
            <motion.div 
              className="mr-3 h-6 w-1 bg-green-400"
              animate={{ 
                height: ["24px", "32px", "24px"],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.h2 
              className="text-3xl font-bold"
              variants={glitchEffect}
              whileHover="animate"
            >
              Skills
            </motion.h2>
          </motion.div>
        <SkillGrid skills={skills} />
        </motion.div>
      </motion.section>

      <motion.section 
        id="experience" 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
      >
        <motion.div 
          className="bg-black/50 backdrop-blur-sm p-8 rounded-lg"
          whileHover={{ boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="flex items-center mb-8">
            <motion.div 
              className="mr-3 h-6 w-1 bg-green-400"
              animate={{ 
                height: ["24px", "32px", "24px"],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
            <motion.h2 
              className="text-3xl font-bold"
              variants={glitchEffect}
              whileHover="animate"
            >
              Experience
            </motion.h2>
          </motion.div>
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={idx + 1}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
      >
        <motion.div 
          className="bg-black/50 backdrop-blur-sm p-8 rounded-lg"
          whileHover={{ boxShadow: "0 0 15px rgba(74, 222, 128, 0.3)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div className="flex items-center mb-8">
            <motion.div 
              className="mr-3 h-6 w-1 bg-green-400"
              animate={{ 
                height: ["24px", "32px", "24px"],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
            <motion.h2 
              className="text-3xl font-bold"
              variants={glitchEffect}
              whileHover="animate"
            >
              Get in Touch
            </motion.h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1}
              className="contact-item flex items-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="contact-icon bg-black/30 p-3 rounded-full mr-4">
                <img src={emailIcon} alt="Email" className="w-8 h-8 invert" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="mailto:harish.kanna.s.98@gmail.com" className="text-green-400 hover:underline">harish.kanna.s.98@gmail.com</a>
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={2}
              className="contact-item flex items-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="contact-icon bg-black/30 p-3 rounded-full mr-4">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/harish-kanna-srinivasan/" target="_blank" rel="noreferrer" className="text-green-400 hover:underline">linkedin.com/in/harish-kanna-srinivasan</a>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="terminal-container mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={3}
          >
            <div className="terminal-header flex items-center mb-4">
              <div className="terminal-button bg-red-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="terminal-button bg-yellow-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="terminal-button bg-green-500 w-3 h-3 rounded-full mr-2"></div>
              <div className="text-gray-400 text-sm ml-2">~/contact</div>
            </div>
            <div className="terminal-content font-mono">
              <p className="mb-4 text-green-400">$ echo "Have an exciting project? Reach out and let's create something amazing together!"</p>
              <motion.a 
                href="mailto:harish.kanna.s.98@gmail.com" 
                className="px-6 py-3 bg-green-400 text-black font-semibold rounded shadow inline-flex items-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 10px rgba(74, 222, 128, 0.7)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send Message
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </main>

    <motion.footer 
      className="relative z-10 text-center py-6 text-sm text-gray-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={0}
    >
      <div className="font-mono">
        <motion.span 
          className="text-green-400"
          animate={{ 
            opacity: [1, 0.5, 1],
            textShadow: [
              "0 0 5px rgba(74, 222, 128, 0.7)",
              "0 0 2px rgba(74, 222, 128, 0.3)",
              "0 0 5px rgba(74, 222, 128, 0.7)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity
          }}
        >
          $
        </motion.span> uptime --since {new Date().toLocaleDateString()}
      </div>
      <div className="mt-2">© {new Date().getFullYear()} Harish Kanna Srinivasan — Built with React & Vite</div>
    </motion.footer>
  </div>
)

export default App
