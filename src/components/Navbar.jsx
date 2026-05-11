import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [resetTimer, setResetTimer] = useState(null);
  const logoControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 72);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (resetTimer) window.clearTimeout(resetTimer);
    };
  }, [resetTimer]);

  const isVisible = isAtTop || isHovered;

  const handleLogoHoverStart = () => {
    if (resetTimer) {
      window.clearTimeout(resetTimer);
      setResetTimer(null);
    }
    logoControls.start({ rotateY: 360, scale: 1.03, transition: { duration: 1.2, ease: "easeInOut" } });
  };

  const handleLogoHoverEnd = () => {
    const timer = window.setTimeout(() => {
      logoControls.start({ rotateY: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } });
      setResetTimer(null);
    }, 2000);
    setResetTimer(timer);
  };

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-x-0 top-0 h-6 bg-transparent" />
      <motion.nav
        initial={false}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative bg-black/80 backdrop-blur-xl shadow-xl border-b border-white/10 flex items-center justify-between py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6"
        style={{ perspective: 1200 }}
      >
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onHoverStart={handleLogoHoverStart}
          onHoverEnd={handleLogoHoverEnd}
          animate={logoControls}
          initial={{ rotateY: 0, scale: 1 }}
          className="group relative w-28 h-10 rounded-2xl border border-white/15 bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.6)] overflow-hidden transform-gpu transition-transform duration-500"
          style={{ perspective: 1000 }}
        >
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm md:text-base font-bold text-white tracking-widest group-hover:text-cyan-300 transition-colors duration-300"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
          >
            Portfolio
          </motion.span>
          <motion.span
            className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm md:text-base font-bold text-white/80 tracking-widest group-hover:text-cyan-300 transition-colors duration-300"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            Portfolio
          </motion.span>
        </motion.button>

        <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-lg sm:text-xl md:text-2xl text-purple-900">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;