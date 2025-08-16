import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const btnsRef = useRef(null);
  const imgRef = useRef(null);
  const bookRef = useRef(null);

  // Bubble refs
  const bubbleTopRightRef = useRef(null);
  const bubbleBottomLeftRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        para1Ref.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        para2Ref.current,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      bookRef.current,
      { y: 0, rotate: -2 },
      {
        y: -16,
        rotate: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 2.2,
      }
    );

    gsap.to(bubbleTopRightRef.current, {
      y: -10,
      scale: 1.08,
      duration: 2,
      repeat: 2,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(bubbleBottomLeftRef.current, {
      x: -40,
      scale: 1.12,
      duration: 2,
      repeat: 5,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      className="
        relative overflow-hidden
        w-full min-h-screen flex items-center
        bg-gradient-to-r from-white to-gray-200
      "
    >
      {/* Background bubbles */}
      <div
        ref={bubbleTopRightRef}
        className="pointer-events-none absolute -right-[15rem] -top-[15rem] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 opacity-20 z-0"
      />
      <div
        ref={bubbleBottomLeftRef}
        className="pointer-events-none absolute -left-[18rem] bottom-[-18rem] w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-gray-400 to-purple-400 opacity-20 z-0"
      />

      {/* Content */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20 relative z-20">
        {/* Left: Text */}
        <div className="flex flex-col justify-center space-y-6">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm"
          >
            Redefining Learning with{" "}
            <span className="text-purple-700">Owl AI</span>
          </h1>

          <p
            ref={para1Ref}
            className="text-lg lg:text-xl text-gray-900 leading-relaxed max-w-2xl drop-shadow-sm"
          >
            Owl AI is an EdTech startup offering self-paced, virtual internships
            with curated learning content — empowering learners to gain
            real-world skills, complete guided tasks, and earn meaningful
            certificates.
          </p>

          <p ref={para2Ref} className="text-base text-gray-800 drop-shadow-sm">
            Accessible. Affordable. Practical exposure for every learner.
          </p>

          <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#git"
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition"
            >
              Get Started →
            </a>
            <a
              href="#offers"
              className="px-6 py-3 rounded-full border-2 border-purple-600 text-purple-700 font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              Explore Internships
            </a>
          </div>
        </div>

        {/* Right: Images */}
        <div className="relative flex justify-center items-center">
          <img
            ref={imgRef}
            src="https://cdn-icons-png.flaticon.com/512/2920/2920277.png"
            alt="Computer"
            className="w-64 lg:w-80 drop-shadow-2xl relative z-10"
          />
          <img
            ref={bookRef}
            src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
            alt="Books"
            className="w-24 lg:w-28 absolute -top-4 right-4 drop-shadow-xl z-10"
          />
        </div>
      </div>
    </section>
  );
}
