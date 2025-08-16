// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     service: "",
//     details: "",
//   });

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", form);
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="text-center text-4xl font-extrabold"
//         >
//           Get in{" "}
//           <span className="bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
//             Touch
//           </span>
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           className="mt-3 text-center text-gray-600"
//         >
//           Ready to start your project? Fill out the form below and we’ll get back to you within 24 hours.
//         </motion.p>

//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.15 }}
//           className="mx-auto mt-10 max-w-3xl rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 p-10 shadow-lg"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={form.firstName}
//               onChange={handleChange}
//               className="input-pill"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={form.lastName}
//               onChange={handleChange}
//               className="input-pill"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={handleChange}
//               className="input-pill md:col-span-2"
//             />
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Phone Number"
//               value={form.phone}
//               onChange={handleChange}
//               className="input-pill md:col-span-2"
//             />
//             <select
//               name="service"
//               value={form.service}
//               onChange={handleChange}
//               className="input-pill md:col-span-2"
//             >
//               <option value="">Service Interested In</option>
//               <option>Web Development</option>
//               <option>Mobile Applications</option>
//               <option>UI/UX Design</option>
//               <option>SEO Optimization</option>
//               <option>E-commerce Solutions</option>
//               <option>Maintenance & Support</option>
//               <option>Digital Marketing</option>
//               <option>Data Analyst</option>
//             </select>
//             <textarea
//               name="details"
//               placeholder=" Details"
//               rows={5}
//               value={form.details}
//               onChange={handleChange}
//               className="input-pill resize-none md:col-span-2"
//             />
//           </div>

//           <div className="mt-8 flex justify-center">
//             <button
//               type="submit"
//               className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-8 py-3 font-semibold text-white shadow-md hover:opacity-90 transition"
//             >
//               Send Message
//             </button>
//           </div>
//         </motion.form>

//         {/* Developer Portfolio Link */}
//         <div className="mt-6 text-center">
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-gray-500 text-sm"
//           >
//             Developed with ❤️ by{" "}
//             <a
//               href="https://portfolio-gowtham1008.onrender.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-purple-700 hover:underline"
//             >
//               Gowtham R - Portfolio
//             </a>
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    developerName: "",
    developerEmail: "",
    developerPhone: "",
    projectName: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const bgRef = useRef(null);

  // GSAP Background Animation
  useEffect(() => {
    gsap.to(bgRef.current, {
      duration: 20,
      backgroundPosition: "200% 0%",
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const data = {
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // replace with your Web3Forms key
      ...form,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Form submitted successfully!");
        setForm({
          developerName: "",
          developerEmail: "",
          developerPhone: "",
          projectName: "",
          service: "",
          message: "",
        });
      } else {
        setError("Failed to submit the form. Try again later.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
  };

  return (
    <div
      ref={bgRef}
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(270deg, #6EE7B7, #3B82F6, #9333EA)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg w-full p-8 bg-white rounded-2xl shadow-lg"
      >
        <motion.h1
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
>
  Get in Touch
</motion.h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <input
              type="text"
              name="developerName"
              placeholder=" Name"
              value={form.developerName}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="developerEmail"
              placeholder=" Email"
              value={form.developerEmail}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="developerPhone"
              placeholder="Mobile number"
              value={form.developerPhone}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-4 mt-4"
            variants={inputVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
           
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              required
            >
              <option value="">Service Interested In</option>
           <option>Web Development</option>
              <option>Mobile Applications</option>
               <option>UI/UX Design</option>
               <option>SEO Optimization</option>
             <option>E-commerce Solutions</option>
             <option>Maintenance & Support</option>
              <option>Digital Marketing</option>
              <option>Data Analyst</option>
              <option value="other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Project details / message"
              value={form.message}
              onChange={handleChange}
              className="p-3 border rounded-lg w-full"
              rows="5"
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="mt-4 w-full  bg-violet-900  text-white p-3 rounded-lg hover:bg-blue-600"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? "Submitting..." : "Submit"}
          </motion.button>

          {success && <p className="text-green-500 mt-2">{success}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>

        {/* Developer Portfolio Link */}
        <div className="mt-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-sm"
          >
            Developed with ❤️ by{" "}
            <a
              href="https://portfolio-gowtham1008.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 hover:underline"
            >
              Gowtham R - Portfolio
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
