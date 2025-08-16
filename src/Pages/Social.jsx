"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Brain } from "lucide-react";
import { useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

/* ------------------------- Main Page ------------------------- */
export default function OwlAISinglePage() {
  return (
    <div className="flex flex-col">
      <OwlAIOverview />
      <CallToAction />
    </div>
  );
}

/* ------------------------- Owl AI Overview ------------------------- */
function OwlAIOverview() {
  const bgRef = useRef(null);

  useEffect(() => {
    if (bgRef.current) {
      const orbs = bgRef.current.querySelectorAll(".orb");

      gsap.to(orbs, {
        y: -30,
        repeat: -1,
        yoyo: true,
        duration: 6,
        ease: "sine.inOut",
        stagger: { amount: 2, from: "random" },
      });

      gsap.to(orbs, {
        opacity: 0.4,
        repeat: -1,
        yoyo: true,
        duration: 4,
        stagger: { amount: 3, from: "random" },
      });
    }
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Background Orbs */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="orb absolute rounded-full bg-purple-400/30 blur-3xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 150}px`,
              height: `${100 + Math.random() * 150}px`,
              opacity: 0.2 + Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Brain className="w-14 h-14 text-purple-600 mb-4 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            🦉 Welcome to <span className="text-purple-600">Owl AI</span>
          </h2>
        </motion.div>

        {/* Overview */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
        >
          Owl AI is an EdTech startup focused on redefining how students,
          learners, and freshers gain experience. We combine{" "}
          <span className="font-semibold text-purple-600">self-paced learning</span> 
          with{" "}
          <span className="font-semibold text-purple-600">virtual internships</span>{" "}
          to empower individuals with real-world skills and meaningful certificates.
        </motion.p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-6 md:grid-cols-2 text-left"
        >
          {[
            "Self-paced learning modules with real internship tasks",
            "Hands-on projects in Data Analytics, Python, Power BI, Excel, AI, and more",
            "Certificates on successful completion",
            "Flexible schedules designed for students and freshers",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg bg-white shadow hover:shadow-lg transition"
            >
              <span className="text-purple-600 font-bold mr-2">✓</span>
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="inline-block mt-12 bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition"
        >
          Learn. Intern. Grow. – with Owl AI 🚀
        </motion.a>
      </div>
    </section>
  );
}

/* ------------------------- Call To Action ------------------------- */
function CallToAction() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-purple-500 to-purple-700 text-white text-center"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Get Started?
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg mb-8 max-w-2xl mx-auto"
        >
          Let’s build the future of learning together. Reach out today to
          collaborate, explore internships, or partner with{" "}
          <span className="font-semibold">Owl AI</span>.
        </motion.p>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <ContactLink
            icon={<FaEnvelope />}
            text="contact@owlai.com"
            link="mailto:contact@owlai.com"
          />
          <ContactLink
            icon={<FaPhone />}
            text="+91 6369548380"
            link="tel:+916369548380"
          />
          <ContactLink
            icon={<FaTwitter />}
            text="@owlai"
            link="https://twitter.com/owlai"
          />
          <ContactLink
            icon={<FaLinkedin />}
            text="Owl AI"
            link="https://linkedin.com/company/owlai"
          />
          <ContactLink
            icon={<FaInstagram />}
            text="@owlai_official"
            link="https://instagram.com/owlai_official"
          />
          <ContactLink
            icon={<FaWhatsapp />}
            text="+91 6369548380"
            link="https://wa.me/919876543210"
          />
        </motion.div>

        {/* Button */}
        <motion.a
          href="#offers"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-100 transition"
        >
          Start Your Journey with Owl AI 🚀
        </motion.a>
      </div>
    </section>
  );
}

/* Contact Link Component */
function ContactLink({ icon, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-white hover:text-purple-200 transition"
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-lg">{text}</span>
    </a>
  );
}
