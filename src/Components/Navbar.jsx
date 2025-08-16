import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const titleRef = useRef(null);

  // Static black and dark grey logo letters
  useEffect(() => {
    const letters = titleRef.current.querySelectorAll(".letter");

    // Alternate black and dark grey
    letters.forEach((letter, i) => {
      letter.style.color = i % 2 === 0 ? "#000000" : "#333333";
    });
  }, []);

  // Desktop hover blinking animation
  const blinkAnimation = {
    hover: {
      opacity: [1, 0.6, 1],
      transition: { duration: 0.8, repeat: Infinity },
    },
  };

  // Mobile + Tablet stagger effect
  const mobileLinkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.4 },
    }),
  };

  const menuItems = [
    { name: "HOME", href: "#/" },
    { name: "ABOUT", link: "#about" },
    { name: "SERVICES", link: "#services" },
    { name: "SOCIAL", link: "#social" },
     { name: "OFFERS", link: "#offers" },
    { name: "CONTACT", link: "#contact" },
    
  ];

  const titleText = "OWL AI";

  return (
    <header className="w-full shadow-lg bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-3 items-center py-4 px-6 text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-2"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D560BAQFWzC5SjczRrg/company-logo_200_200/B56ZgrkWwVH0AM-/0/1753077607890?e=1758153600&v=beta&t=1sLLjsQ8ktQ2U0D3DqqYu-8hcJfckb5g5dk0m_ZSfF8"
            alt="Logo"
            className="h-10 w-10 rounded-full shadow-md"
          />
          <span className="text-xl font-extrabold tracking-wide" ref={titleRef}>
            {titleText.split("").map((char, index) => (
              <span key={index} className="letter">
                {char}
              </span>
            ))}
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex justify-center space-x-8 font-medium">
          {menuItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              className="relative px-3 py-2 rounded-lg transition duration-300 group"
              whileHover="hover"
              variants={blinkAnimation}
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 rounded-lg ring-0 group-hover:ring-2 group-hover:ring-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Support Button */}
        <div className="hidden lg:flex justify-end">
          <motion.a
            href="#Form"
            whileHover={{
              scale: 1.1,
              backgroundColor: "#fff",
              color: "#6b21a8",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2 border-2 border-white rounded-full font-semibold transition cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">SUPPORT →</span>
            <span className="absolute inset-0 rounded-full ring-0 hover:ring-2 hover:ring-white hover:shadow-[0_0_18px_rgba(255,255,255,1)] transition-all duration-300"></span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex justify-end lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden bg-gradient-to-b from-purple-600 via-purple-500 to-pink-500 text-white shadow-lg"
          >
            <nav className="flex flex-col items-center space-y-6 py-6 font-medium">
              {menuItems.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={mobileLinkVariants}
                  className="relative px-4 py-2 rounded-lg transition duration-300"
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px rgba(255,255,255,0.9)",
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute inset-0 rounded-lg ring-0 hover:ring-2 hover:ring-white hover:shadow-[0_0_15px_rgba(255,255,255,0.9)] transition-all duration-300"></span>
                </motion.a>
              ))}

              <motion.a
                href="#git"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#fff",
                  color: "#6b21a8",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-2 border-2 border-white rounded-full font-semibold transition cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                SUPPORT →
                <span className="absolute inset-0 rounded-full ring-0 hover:ring-2 hover:ring-white hover:shadow-[0_0_18px_rgba(255,255,255,1)] transition-all duration-300"></span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link as ScrollLink } from "react-scroll";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { name: "Home", to: "hero" },
//     { name: "About", to: "about" },
//     { name: "Services", to: "services" },
//     { name: "Social", to: "social" },
//     { name: "Contact", to: "contact" },
//   ];

//   return (
//     <nav className="fixed w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg z-50">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-xl font-bold">OWL AI</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <ScrollLink
//                 to={item.to}
//                 smooth={true}
//                 duration={500}
//                 offset={-70}
//                 className="cursor-pointer hover:underline"
//               >
//                 {item.name}
//               </ScrollLink>
//             </li>
//           ))}
//         </ul>

//         {/* Support Button */}
//         <button className="hidden md:inline-block px-4 py-2 border rounded-full hover:bg-white hover:text-pink-500 transition">
//           SUPPORT →
//         </button>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-purple-600 px-4 py-3 space-y-3">
//           {navItems.map((item) => (
//             <ScrollLink
//               key={item.name}
//               to={item.to}
//               smooth={true}
//               duration={500}
//               offset={-70}
//               className="block cursor-pointer hover:underline"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </ScrollLink>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
