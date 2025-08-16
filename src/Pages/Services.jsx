"use client";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  BarChart3,
  Brain,
  Code,
  Megaphone,
  Palette,
  Rocket,
  Search,
  Settings,
  ShoppingCart,
  Smartphone,
  Table,
} from "lucide-react";
import { useEffect, useRef } from "react";

const services = [
  { icon: <Code size={28} />, title: "Web Development", description: "Custom websites built with modern technologies for optimal performance and user experience." },
  { icon: <Smartphone size={28} />, title: "Mobile Applications", description: "Responsive mobile apps that provide seamless experiences across all devices and platforms." },
  { icon: <Palette size={28} />, title: "UI/UX Design", description: "Beautiful, intuitive designs that enhance user engagement and drive business results." },
  { icon: <Search size={28} />, title: "SEO Optimization", description: "Boost your online visibility and drive organic traffic with our proven SEO strategies." },
  { icon: <ShoppingCart size={28} />, title: "E-commerce Solutions", description: "Complete online stores with secure payment systems and inventory management." },
  { icon: <Settings size={28} />, title: "Maintenance & Support", description: "Ongoing website maintenance and technical support to keep your business running smoothly." },
  { icon: <Megaphone size={28} />, title: "Digital Marketing", description: "Strategic campaigns to increase brand awareness, engagement, and conversions." },
  { icon: <BarChart3 size={28} />, title: "Data Analyst", description: "Data-driven insights to help you make informed business decisions and improve performance." },
  { icon: <BarChart3 size={28} />, title: "Data Analytics", description: "Analyze datasets, visualize results, and extract insights to drive smarter decisions." },
  { icon: <Code size={28} />, title: "Python", description: "Learn Python from fundamentals to projects: scripting, automation, and data workflows." },
  { icon: <BarChart3 size={28} />, title: "Power BI", description: "Create interactive dashboards and BI reports for real business scenarios." },
  { icon: <Table size={28} />, title: "Excel", description: "Master functions, pivot tables, and data modeling for professional reporting." },
  { icon: <Brain size={28} />, title: "AI", description: "Explore AI concepts and apply machine learning techniques to practical problems." },
];

export default function ServicesSection() {
  const starsRef = useRef(null);
  const rocketsRef = useRef([]);

  useEffect(() => {
    // Floating + blinking stars ✨
    if (starsRef.current) {
      const stars = starsRef.current.querySelectorAll(".star");

      gsap.to(stars, {
        y: -20,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
        stagger: { amount: 2, from: "random" },
      });

      gsap.to(stars, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        stagger: { amount: 3, from: "random" },
      });
    }

    // Rocket bounce 🚀
    rocketsRef.current.forEach((rocket, i) => {
      if (rocket) {
        gsap.to(rocket, {
          y: -10,
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      }
    });
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-gray-900 to-black z-0 animate-pulse" />

      {/* Stars Background ✨ */}
      <div ref={starsRef} className="absolute inset-0 z-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="star absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl font-bold text-white"
        >
          Our <span className="text-purple-400">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-300 mt-3 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2"
        >
          We provide comprehensive digital solutions to help your business
          thrive in the digital landscape.
        </motion.p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition flex flex-col hover:-translate-y-2 transform duration-300"
            >
              {/* Rocket inside card 🚀 */}
              <div
                ref={(el) => (rocketsRef.current[index] = el)}
                className="absolute top-2 right-3 text-purple-500"
              >
                <Rocket size={20} />
              </div>

              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-lg bg-purple-500 text-white mb-4">
                {service.icon}
              </div>
              <h3 className="font-bold text-base sm:text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
