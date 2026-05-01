import { Moon, Sun } from "lucide-react"
import { motion } from "motion/react"


export default function Navbar({ dark, setHovered, setDark }) {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 flex justify-between items-center py-8 px-16"
        >
            <span className={`text-[1.5rem] font-playfair font-bold ${dark ? "text-[#4ade80]" : "text-[#16a34a]"}`}>
                Vīta
            </span>

            <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
                {["Product", "Science", "Pricing", "Stories"].map((item) => (
                    <span
                        key={item}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        className={`text-[0.85rem] tracking-widest cursor-pointer font-sans font-medium transition-opacity duration-200
                  ${dark ? "text-[#86efac]" : "text-[#15803d]"}   
                `}
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
                    style={{
                        background: dark ? "#ffffff11" : "#00000011",
                        border: `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`,
                        padding: "0.5rem 1rem",
                        color: dark ? "#4ade80" : "#16a34a",
                    }}
                    className={`flex items-center gap-[0.4rem] cursor-pointer py-2 px-4 rounded-full`}
                >
                    {dark ? <Sun size={14} /> : <Moon size={14} />}
                    <span style={{ fontSize: "0.75rem", fontFamily: "sans-serif" }}>
                        {dark ? "Light" : "Dark"}
                    </span>
                </motion.button>
            </div>
        </motion.nav>
    )
}