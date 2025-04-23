import React from 'react'
import { motion } from 'framer-motion'

const bulletVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + (custom * 0.1),
      duration: 0.3
    }
  })
}

const terminalCommand = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
}

const terminalBlink = {
  initial: { opacity: 1 },
  animate: { 
    opacity: [1, 0, 1],
    transition: { 
      duration: 1,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
}

const scanLine = {
  initial: { top: 0 },
  animate: {
    top: "100%",
    opacity: [0.1, 0.2, 0.1],
    transition: {
      duration: 1.5,
      ease: "linear",
      repeat: Infinity
    }
  }
}

const ExperienceCard = ({ role, company, period, location, bullets }) => {
  const companySlug = company.toLowerCase().replace(/\s+/g, '');
  
  return (
    <motion.div 
      className="border-l-4 border-green-400 pl-4 mb-8 bg-black/20 backdrop-blur-sm rounded-r-lg p-4 hover:bg-black/30 transition-colors relative overflow-hidden"
      whileHover={{ 
        borderLeftWidth: 6,
        boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3), 0 0 5px rgba(74, 222, 128, 0.2)" 
      }}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent z-0 pointer-events-none"
        variants={scanLine}
        initial="initial"
        animate="animate"
        style={{ height: "5px" }}
      />
      
      <div className="relative z-10">
        <motion.div 
          className="mb-3 font-mono text-green-400 flex items-center"
          variants={terminalCommand}
          initial="initial"
          animate="animate"
        >
          <span className="mr-2">$</span> 
          <span>cat experience_{companySlug}.txt</span>
          <motion.span 
            className="ml-1 inline-block w-2 h-4 bg-green-400"
            variants={terminalBlink}
            initial="initial"
            animate="animate"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-2 border-b border-green-400/20 pb-2"
        >
          <motion.h3 
            className="text-xl font-semibold"
            whileHover={{ 
              color: "#4ade80", 
              textShadow: "0 0 8px rgba(74, 222, 128, 0.5)" 
            }}
          >
            {role} · {company}
          </motion.h3>
          <p className="text-sm text-gray-400">{location} | {period}</p>
        </motion.div>
        
        <div className="mt-3 font-mono text-xs mb-2 text-green-400 flex items-center">
          <span className="mr-2">$</span> 
          <span>list achievements --format=terminal</span>
        </div>
        
        <motion.div 
          className="code-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ul className="list-none ml-2 mt-2 space-y-3">
            {bullets.map((bullet, idx) => (
              <motion.li 
                key={idx}
                className="flex items-start group"
                variants={bulletVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx}
                whileHover={{ x: 3 }}
              >
                <motion.span 
                  className="text-green-400 mr-2 transition-colors inline-block"
                  animate={{ 
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
                <motion.span 
                  initial={{ color: "#fff" }}
                  whileHover={{ 
                    color: "#4ade80",
                    transition: { duration: 0.2 } 
                  }}
                >
                  {bullet}
                </motion.span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ExperienceCard
