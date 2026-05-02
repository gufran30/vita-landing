import { useState } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


const navLinks = ["Product", "Science", "Pricing", "Stories"];

export default function Navbar({ dark, setHovered, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 flex justify-between items-center py-8 px-8 md:px-16"
      >
        {/* Logo */}
        <span
          className={`text-[1.5rem] font-bold ${dark ? "text-[#4ade80]" : "text-[#16a34a]"}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Vīta
        </span>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((item) => (
            <span
              key={item}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className={`text-[0.85rem] tracking-widest cursor-pointer font-sans font-medium transition-opacity duration-200
                ${dark ? "text-[#86efac]" : "text-[#15803d]"}`}
            >
              {item}
            </span>
          ))}

          {/* Dark/Light Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex items-center gap-2 cursor-pointer rounded-full py-2 px-4"
            style={{
              background: dark ? "#ffffff11" : "#00000011",
              border: `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`,
              color: dark ? "#4ade80" : "#16a34a",
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
            <span style={{ fontSize: "0.75rem", fontFamily: "sans-serif" }}>
              {dark ? "Light" : "Dark"}
            </span>
          </motion.button>
        </div>

        {/* Mobile Right — toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setDark(!dark)}
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{
              background: dark ? "#ffffff11" : "#00000011",
              border: `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`,
              color: dark ? "#4ade80" : "#16a34a",
            }}
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-9 h-9 rounded-full"
            style={{
              background: dark ? "#ffffff11" : "#00000011",
              border: `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`,
              color: dark ? "#4ade80" : "#16a34a",
            }}
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full h-full flex flex-col z-40 md:hidden"
            style={{
              background: dark
                ? "rgba(0,0,0,0.97)"
                : "rgba(255,255,255,0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Close button top right */}
            <div className="flex justify-between items-center px-8 py-8">
              <span
                className={`text-[1.5rem] font-bold ${dark ? "text-[#4ade80]" : "text-[#16a34a]"}`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Vīta
              </span>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-9 h-9 rounded-full"
                style={{
                  background: dark ? "#ffffff11" : "#00000011",
                  border: `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`,
                  color: dark ? "#4ade80" : "#16a34a",
                }}
              >
                <X size={16} />
              </motion.button>
            </div>

            {/* Nav Links */}
            <div className="flex flex-col items-start px-8 gap-2 mt-8">
              {navLinks.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer py-4 w-full"
                  style={{
                    fontSize: "clamp(2rem, 8vw, 3rem)",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: dark ? "#f0fdf4" : "#052e16",
                    borderBottom: `1px solid ${dark ? "#4ade8012" : "#16a34a12"}`,
                  }}
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-auto px-8 pb-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 }}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 rounded-full font-bold text-sm tracking-wide"
                style={{
                  background: dark ? "#4ade80" : "#16a34a",
                  color: dark ? "#052e16" : "#ffffff",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "sans-serif",
                  boxShadow: dark
                    ? "0 0 40px #4ade8033"
                    : "0 0 40px #16a34a22",
                }}
              >
                Start for free
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}