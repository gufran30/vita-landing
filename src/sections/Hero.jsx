import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"


export default function Hero({ dark, setHovered }) {

  const words = ["Know", "your", "body."]
  const words2 = ["Own", "your", "life."]

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-8">

      {/* Pill badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`inline-flex items-center gap-2 mb-10 py-[0.4rem] px-[1.2rem] rounded-full
              ${dark ? "bg-[#16a34a22]" : "bg-[#dcfce7]"}
              ${dark ? "border-[#4ade8033]" : "border-[#86efac]"} border
            `}
      >
        <span style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "#4ade80",
          display: "inline-block",
          boxShadow: "0 0 8px #4ade80",
        }} />
        <span style={{
          fontSize: "0.75rem",
          color: dark ? "#86efac" : "#16a34a",
          letterSpacing: "0.12em",
          fontFamily: "sans-serif",
          fontWeight: 500,
        }}>
          AI-POWERED WELLNESS · NOW IN BETA
        </span>
      </motion.div>

      {/* Main headline — staggered word animation */}
      <div className="mb-4">
        {/* words - 1  */}
        <div className="flex gap-[0.4rem] justify-center flex-wrap">
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1]
              }}
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 700,
                color: dark ? "#f0fdf4" : "#052e16",
                lineHeight: 1.05,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        {/* words - 2  */}
        <div style={{ display: "flex", gap: "0.4em", justifyContent: "center", flexWrap: "wrap" }}>
          {words2.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.7 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 700,
                color: i === 0 ? (dark ? "#4ade80" : "#16a34a") : dark ? "#f0fdf4" : "#052e16",
                lineHeight: 1.05,
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        style={{
          fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
          color: dark ? "#86efac99" : "#15803d99",
          maxWidth: 520,
          lineHeight: 1.7,
          fontFamily: "sans-serif",
          fontWeight: 400,
          marginBottom: "3rem",
        }}
      >
        Vīta learns your biology, tracks what matters, and gives you a clear path to your healthiest self. No guesswork. Just science.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: dark ? "#4ade80" : "#16a34a",
            color: dark ? "#052e16" : "#ffffff",
            border: "none",
            borderRadius: 999,
            padding: "1rem 2.5rem",
            fontSize: "0.9rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            cursor: "pointer",
            fontFamily: "sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            boxShadow: dark ? "0 0 40px #4ade8033" : "0 0 40px #16a34a22",
          }}
        >
          Start for free <ArrowRight size={16} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: "transparent",
            color: dark ? "#86efac" : "#16a34a",
            border: `1px solid ${dark ? "#4ade8044" : "#86efac"}`,
            borderRadius: 999,
            padding: "1rem 2.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            cursor: "pointer",
            fontFamily: "sans-serif",
          }}
        >
          Watch the demo
        </motion.button>
      </motion.div>

      {/* Social proof */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          marginTop: "2.5rem",
          fontSize: "0.75rem",
          color: dark ? "#4ade8055" : "#16a34a66",
          letterSpacing: "0.15em",
          fontFamily: "sans-serif",
        }}
      >
        TRUSTED BY 12,000+ PEOPLE IN EARLY ACCESS
      </motion.p>
    </div>
  )
}