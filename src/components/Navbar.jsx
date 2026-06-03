import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ mode = "dark", toggleTheme = () => {} }) => {
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
        className={`relative ${mode === "dark" ? "bg-black/80 border-white/10" : "bg-white/80 border-neutral-200"} backdrop-blur-xl shadow-xl border-b flex items-center justify-between py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-6`}
        style={{ perspective: 1200 }}
      >
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onHoverStart={handleLogoHoverStart}
          onHoverEnd={handleLogoHoverEnd}
          animate={logoControls}
          initial={{ rotateY: 0, scale: 1 }}
          className={`group relative w-28 h-10 rounded-2xl border border-white/15 ${mode==="dark"?"bg-slate-950 shadow-[0_12px_30px_rgba(15,23,42,0.6)]":"bg-white/80 shadow-md"} overflow-hidden transform-gpu transition-transform duration-500`}
          style={{ perspective: 1000 }}
        >
          {/* Dark-mode logo (visible in dark) and Classic-mode logo (visible in classic) */}
          <motion.span
            className={`absolute inset-0 flex items-center justify-center text-xs sm:text-sm md:text-base font-bold tracking-widest transition-opacity duration-300 ${mode==="dark"?"opacity-100 text-white":"opacity-0 text-neutral-900"}`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
          >
            Portfolio
          </motion.span>
          <motion.span
            className={`absolute inset-0 flex items-center justify-center text-xs sm:text-sm md:text-base font-bold tracking-widest transition-opacity duration-300 ${mode!=="dark"?"opacity-100 text-transparent bg-clip-text bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500":"opacity-0 text-white/80"}`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(0deg)" }}
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

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={mode === "dark" ? "Switch to Classic" : "Switch to Dark"}
            className="ml-3 px-4 py-1.5 rounded-full text-sm font-semibold text-white flex items-center justify-center transition-all duration-300 transform bg-linear-to-r from-purple-500 via-fuchsia-500 to-violet-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] shadow-purple-500/20"
          >
            {mode === "dark" ? <FaSun className="text-white" /> : <FaMoon className="text-white" />}
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;