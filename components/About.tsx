"use client"

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
            className="absolute rounded-lg bg-[#7c3aed]"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.1 + 0.05,
              rotate: Math.random() * 360
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#7c3aed] to-[#2563eb] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Why Choose Swatrix?
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 text-gray-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </motion.p>
            
            <ul className="space-y-6">
              {[
                "Custom solutions tailored to your specific needs",
                "Modern tech stack for scalable and future-proof solutions",
                "Client-centric approach with transparent communication",
                "Proven track record of innovation and excellence"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white p-2 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <motion.span 
                    className="text-lg text-gray-700 group-hover:text-[#7c3aed] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 relative"
          >
            <motion.div 
              className="bg-gradient-to-br from-[#7c3aed] to-[#2563eb] rounded-2xl h-96 w-full shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Placeholder for an image or illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Abstract tech pattern overlay */}
                  <div className="absolute inset-0 bg-[url('/tech-pattern.svg')] bg-cover opacity-10"></div>
                  <div className="flex items-center justify-center h-full text-white text-2xl font-medium p-8 text-center">
                    Transforming Ideas Into Digital Reality
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#2563eb] rounded-xl h-64 w-64 -z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            />
            <motion.div 
              className="absolute -top-6 -right-6 bg-[#7c3aed] rounded-xl h-48 w-48 -z-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}