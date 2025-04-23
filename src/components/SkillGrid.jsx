import React from 'react'
import { motion } from 'framer-motion'

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  }),
  hover: {
    scale: 1.05,
    y: -5,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 0 5px rgba(74, 222, 128, 0.3)",
    transition: {
      duration: 0.2
    }
  }
}

const matrixEffect = {
  initial: {
    filter: "hue-rotate(0deg) saturate(1)"
  },
  animate: {
    filter: [
      "hue-rotate(0deg) saturate(1)",
      "hue-rotate(90deg) saturate(1.5)",
      "hue-rotate(180deg) saturate(2)",
      "hue-rotate(270deg) saturate(1.5)",
      "hue-rotate(360deg) saturate(1)"
    ],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "loop"
    }
  }
}

const iconRotate = {
  rest: { rotate: 0 },
  hover: { 
    rotate: 360,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

const SkillGrid = ({ skills }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {skills.map(({ name, logo }, i) => (
        <motion.div
          key={name}
          className="flex flex-col items-center bg-black/30 rounded-lg p-4 backdrop-blur-sm border border-transparent hover:border-green-400/30"
          variants={skillVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          custom={i}
        >
          <motion.div
            className="h-16 w-16 mb-4 flex items-center justify-center relative bg-black/40 rounded-full p-2"
            whileHover="hover"
            initial="rest"
            variants={iconRotate}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0 }}
              whileHover={{ 
                opacity: 1,
                boxShadow: "0 0 10px rgba(74, 222, 128, 0.7)" 
              }}
              transition={{ duration: 0.3 }}
              style={{ background: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(0, 0, 0, 0) 70%)" }}
            />
            <motion.div
              className="h-12 w-12 flex items-center justify-center"
              variants={matrixEffect}
              whileHover="animate"
            >
              <img src={logo} alt={name} className="h-10 w-10 object-contain" />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.3 }}
          >
            <motion.span 
              className="text-sm text-center font-medium block"
              whileHover={{ 
                color: "#4ade80",
                textShadow: "0 0 8px rgba(74, 222, 128, 0.6)" 
              }}
            >
              {name}
            </motion.span>
            <motion.div 
              className="h-0.5 w-0 bg-green-400 mt-1 mx-auto"
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillGrid
