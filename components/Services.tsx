"use client"

import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaPalette, FaRobot, FaNetworkWired } from 'react-icons/fa'

const services = [
  {
    icon: <FaCode className="text-4xl" />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with modern technologies.",
  },
  {
    icon: <FaMobileAlt className="text-4xl" />,
    title: "Mobile App Development",
    description: "iOS and Android applications that deliver seamless user experiences.",
  },
  {
    icon: <FaPalette className="text-4xl" />,
    title: "Web Design & UI/UX",
    description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
  },
  {
    icon: <FaRobot className="text-4xl" />,
    title: "AI-Powered Solutions",
    description: "Leverage artificial intelligence to automate processes and gain insights.",
  },
  {
    icon: <FaNetworkWired className="text-4xl" />,
    title: "IoT & Smart Systems",
    description: "Connect devices and build smart ecosystems for your business.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0]">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="absolute rounded-full bg-[#7c3aed]"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Comprehensive IT solutions designed to propel your business into the digital future.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(124, 58, 237, 0.2)" }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden relative group"
            >
              {/* Animated background effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-[#2563eb]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1 }}
              />
              
              {/* Icon container with gradient border */}
              <motion.div 
                className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#7c3aed] to-[#2563eb] p-1"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center text-[#7c3aed]">
                  {service.icon}
                </div>
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#7c3aed] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
              
              {/* Animated read more indicator */}
              <motion.div 
                className="absolute bottom-6 right-6 text-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  delay: 0.3,
                  duration: 1.5,
                  repeat: Infinity
                }}
              >
                →
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}