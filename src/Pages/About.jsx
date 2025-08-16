"use client";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      aboutRefs.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%", // when section enters viewport
        },
      }
    );
  }, []);

  return (
    <section id="about" className="w-full">
      {/* White Section */}
      <div className="w-full py-20 bg-white shadow-inner">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="About Owl AI"
              className="w-72 lg:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Right: Text */}
          <div className="space-y-6 text-gray-800">
            <h2
              ref={(el) => (aboutRefs.current[0] = el)}
              className="text-3xl lg:text-4xl font-extrabold text-gray-900"
            >
              🧠 Overview for <span className="text-purple-700">Owl AI</span>
            </h2>

            <p ref={(el) => (aboutRefs.current[1] = el)}>
              Owl AI is an EdTech startup focused on redefining how students,
              learners, and freshers gain experience.
            </p>

            <p ref={(el) => (aboutRefs.current[2] = el)}>
              We offer self-paced, virtual internships combined with curated
              learning content — empowering individuals to build real-world
              skills, complete guided tasks, and earn meaningful certificates.
            </p>

            <p ref={(el) => (aboutRefs.current[3] = el)}>
              Our mission is to make quality education and practical exposure
              accessible and affordable for every learner.
            </p>
          </div>
        </div>
      </div>

      {/* Grey Section with Elevation */}
      <div className="w-full py-20 bg-gray-50 relative z-10 shadow-lg">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-2xl space-y-6"
          >
            <p ref={(el) => (aboutRefs.current[4] = el)}>
              Whether you’re a student exploring your career path, a fresher
              looking to strengthen your resume, or someone eager to gain
              hands-on tech experience —{" "}
              <span className="font-semibold text-purple-700">
                Owl AI is built for you.
              </span>
            </p>

            {/* What We Offer */}
            <div ref={(el) => (aboutRefs.current[5] = el)}>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                🔹 What We Offer:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Self-paced learning modules with real internship tasks</li>
                <li>
                  Hands-on projects in Data Analytics, Python, Power BI, Excel,
                  AI, and more
                </li>
                <li>Internship certificates on successful completion</li>
                <li>Flexible schedules for students & freshers</li>
              </ul>
            </div>

            <p
              ref={(el) => (aboutRefs.current[6] = el)}
              className="text-xl font-semibold text-gray-900 text-center"
            >
              Learn. Intern. Grow. – with{" "}
              <span className="text-purple-700">Owl AI</span>.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center text-gray-700"
            >
              📩 Reach out for collaborations, partnerships, or internship
              opportunities.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
