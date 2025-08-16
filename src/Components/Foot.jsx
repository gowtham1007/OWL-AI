// src/components/Footer.jsx
"use client";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import owlLogo from "../assets/logo.jpeg"; // replace with Owl AI logo

export default function Footer() {
  return (
    <footer className="bg-[#0b0f1a] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center space-x-2">
            <img src={owlLogo} alt="Owl AI Logo" className="h-10 w-10" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-500">
              Owl AI
            </span>
          </div>
          <p className="mt-4 text-gray-300 max-w-xs">
            Redefining EdTech for students and freshers—learn in-demand skills, complete virtual internships, and earn certificates that matter.
          </p>
          <p className="mt-4 text-gray-500 text-sm">© 2025 Owl AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={22} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={22} /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={22} /></a>
            <a href="https://wa.me/919025047116" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={22} /></a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/">Home</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            <li><a href="#social">SOCIAL</a></li>
            <li><a href="#offers">OFFERS</a></li>
             <li><a href="#contact">CONTACT</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <p className="flex items-center space-x-2"><span>📧</span><span>hello@owlai.com</span></p>
          <p className="flex items-center space-x-2"><span>📞</span><span>+91 63695 48380</span></p>
          <p className="mt-4 text-gray-400 text-sm">
            Self-paced learning. Real internships. Flexible schedules. Learn. Intern. Grow.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
