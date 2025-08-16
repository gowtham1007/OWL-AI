"use client";
import { motion } from "framer-motion";
import { BadgeCheck, BookOpen, Code, Laptop, Layers, Search, Smartphone } from "lucide-react";

export default function CoursesInternships() {
  const courses = [
    { title: "Data Analytics", desc: "Analyze, clean, and visualize data to drive business decisions.", icon: <BookOpen className="w-10 h-10 text-purple-600" /> },
    { title: "Python Programming", desc: "From syntax to real-world automation and data workflows.", icon: <Code className="w-10 h-10 text-purple-600" /> },
    { title: "Power BI & Excel", desc: "Dashboards, reports, and modeling for BI use-cases.", icon: <BookOpen className="w-10 h-10 text-purple-600" /> },
    { title: "Artificial Intelligence", desc: "Foundations of ML/AI and hands-on projects.", icon: <Laptop className="w-10 h-10 text-purple-600" /> },
    { title: "Frontend Development", desc: "Modern UI engineering with HTML, CSS, Tailwind, React, and accessibility.", icon: <Layers className="w-10 h-10 text-purple-600" /> },
    { title: "Full-Stack Development", desc: "APIs, databases, auth, and deployment with Node/Express/Next.js.", icon: <Laptop className="w-10 h-10 text-purple-600" /> },
    { title: "Mobile Development", desc: "Build cross-platform apps with React Native/Expo and device APIs.", icon: <Smartphone className="w-10 h-10 text-purple-600" /> },
    { title: "SEO", desc: "Technical SEO, on-page/off-page tactics, and performance fundamentals.", icon: <Search className="w-10 h-10 text-purple-600" /> },
  ];

  const internships = [
    { title: "Virtual Internship", desc: "Guided, real-world tasks that mirror industry workflows.", icon: <BadgeCheck className="w-10 h-10 text-purple-600" /> },
    { title: "Certified Programs", desc: "Earn verifiable certificates on successful completion.", icon: <BadgeCheck className="w-10 h-10 text-purple-600" /> },
    { title: "Flexible Schedules", desc: "Self-paced timelines that fit student and fresher needs.", icon: <BadgeCheck className="w-10 h-10 text-purple-600" /> },
  ];

  // Bubble animation variants
  const bubbleVariants = {
    animate: (custom) => ({
      y: [0, -custom.yDistance, 0, custom.yDistance, 0],
      x: [0, custom.xDistance, 0, -custom.xDistance, 0],
      transition: { duration: custom.duration, repeat: Infinity, ease: "easeInOut", delay: custom.delay },
    }),
  };

  // Generate 30 bubbles with random properties
  const bubbles = Array.from({ length: 30 }).map(() => ({
    size: Math.random() * 25 + 10,          // 10-35px
    top: Math.random() * 100,              // percentage
    left: Math.random() * 100,             // percentage
    delay: Math.random() * 2,              // animation delay
    xDistance: Math.random() * 30 + 10,    // horizontal movement
    yDistance: Math.random() * 30 + 10,    // vertical movement
    duration: Math.random() * 4 + 3,       // 3-7s
    color: `rgba(156, 163, 175, ${Math.random() * 0.4 + 0.2})`, // subtle grey-purple
  }));

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Bubbles */}
      {bubbles.map((bubble, i) => (
        <motion.div
          key={i}
          custom={bubble}
          variants={bubbleVariants}
          animate="animate"
          className="absolute rounded-full"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            backgroundColor: bubble.color,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            📚 Courses & <span className="text-purple-600">Internships</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Learn in-demand skills and apply them through guided, virtual internships—earn certificates and build a standout portfolio.
          </p>
        </motion.div>

        {/* Courses */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h3 className="text-2xl font-semibold text-purple-700 mb-6">Our Courses</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course, i) => (
              <motion.div key={course.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: i * 0.07 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                {course.icon}
                <h4 className="text-xl font-bold text-gray-800 mt-4">{course.title}</h4>
                <p className="text-gray-600 mt-2">{course.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Internships */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }} className="mt-16">
          <h3 className="text-2xl font-semibold text-purple-700 mb-6">Our Internships</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internships.map((intern, i) => (
              <motion.div key={intern.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: i * 0.07 }} viewport={{ once: true }} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                {intern.icon}
                <h4 className="text-xl font-bold text-gray-800 mt-4">{intern.title}</h4>
                <p className="text-gray-600 mt-2">{intern.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="text-center mt-16">
          <a href="#contact" className="inline-block bg-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-purple-700 transition">
            Explore Courses & Internships 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}
