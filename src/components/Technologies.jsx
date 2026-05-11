import { motion } from "framer-motion";
import { FaAws, FaPython } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { BsShieldLockFill } from "react-icons/bs";

// Helper function to create randomized floating animations
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const cards = [
  {
    label: "AWS",
    icon: <FaAws className="text-5xl sm:text-6xl" />,
    color: "#FF9900",
    ring: "from-[#FF9900]/20 via-transparent to-transparent",
    bg: "bg-[#1F1A10]/80",
    accent: "bg-[#FF9900]/15",
  },
  {
    label: "Security",
    icon: <BsShieldLockFill className="text-5xl sm:text-6xl" />,
    color: "#1A6CFF",
    ring: "from-[#1A6CFF]/20 via-transparent to-transparent",
    bg: "bg-[#0F172A]/80",
    accent: "bg-[#1A6CFF]/15",
  },
  {
    label: "Python",
    icon: <FaPython className="text-5xl sm:text-6xl" />,
    color: "#FFD43B",
    ring: "from-[#FFD43B]/20 via-transparent to-transparent",
    bg: "bg-[#2A261C]/80",
    accent: "bg-[#FFD43B]/15",
  },
  {
    label: "SQL",
    icon: <span className="text-4xl sm:text-5xl font-extrabold tracking-tighter">SQL</span>,
    color: "#00E559",
    ring: "from-[#00E559]/20 via-transparent to-transparent",
    bg: "bg-[#0E2217]/80",
    accent: "bg-[#00E559]/15",
  },
  {
    label: "Terraform",
    icon: <SiTerraform className="text-5xl sm:text-6xl" />,
    color: "#844FBA",
    ring: "from-[#844FBA]/20 via-transparent to-transparent",
    bg: "bg-[#120F1D]/80",
    accent: "bg-[#844FBA]/15",
  },
  {
    label: ".NET",
    icon: <span className="text-3xl sm:text-4xl font-bold">.NET</span>,
    color: "#007FFF",
    ring: "from-[#007FFF]/20 via-transparent to-transparent",
    bg: "bg-[#0B1727]/80",
    accent: "bg-[#007FFF]/15",
  },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Technologies
      </motion.h2>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            variants={iconVariants(index + 2)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className={`relative overflow-hidden rounded-[28px] border-2 border-neutral-800 p-4 w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center ${card.bg} shadow-[0_20px_40px_rgba(0,0,0,0.25)]`}
          >
            <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${card.ring} opacity-80`} />
            <div className={`pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-full ${card.accent} blur-2xl`} />
            <div className={`pointer-events-none absolute -right-3 -bottom-3 h-16 w-16 rounded-full ${card.accent} blur-3xl`} />
            <span className="relative z-10 text-white" style={{ color: card.color }}>
              {card.icon}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;