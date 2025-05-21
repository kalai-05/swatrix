"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-darker text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={item}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Swatrix
            </h3>
            <p className="mb-4">
              Innovating Tomorrow. Today.
            </p>
            <p>
              © {new Date().getFullYear()} Swatrix. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#about" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#contact" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Contact
                </motion.a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Software Development
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Mobile Apps
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Web Design
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  AI Solutions
                </motion.a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg group-hover:rotate-12 transition-all">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email us</p>
                  <a href="mailto:info@swatrix.com" className="hover:text-primary transition-colors">
                    info@swatrix.com
                  </a>
                  <br />
                  <a href="mailto:support@swatrix.com" className="hover:text-primary transition-colors">
                    support@swatrix.com
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg group-hover:rotate-12 transition-all">
                  <FaPhone className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us (24/7)</p>
                  <a href="tel:+94704414832" className="hover:text-primary transition-colors">
                    +94 70 441 4832
                  </a>
                  <br />
                  <a href="tel:+94761597810" className="hover:text-primary transition-colors">
                    +94 76 159 7810
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
              >
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg group-hover:rotate-12 transition-all">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Our Location</p>
                  <span className="hover:text-primary transition-colors">
                    No 36 Dharmarama Road,<br />
                    Wellawatta, Colombo 06<br />
                    Sri Lanka
                  </span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}