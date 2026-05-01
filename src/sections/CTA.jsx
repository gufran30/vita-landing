import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

/** for learning pupose
 * const numbers = Array.from({ length: 5 }, (_, i) => i);
 *  Result: [0, 1, 2, 3, 4]
 */

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  duration: 4 + Math.random() * 6,
  delay: Math.random() * 4,
  size: 2 + Math.random() * 3,
}))

console.log(particles)

export default function CTA({ dark }) {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "100vh", padding: "8rem 2rem" }}
    >

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, #4ade8022 0%, transparent 70%)"
            : "radial-gradient(circle, #16a34a18 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          filter: "blur(40px)",
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{ y: [0, -120, 0], opacity: [0, 0.6, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "10%",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: dark ? "#4ade80" : "#16a34a",
            pointerEvents: "none",
            opacity: 0,
          }}
        />
      ))}

      {/* Content */}
      <div
        className="relative flex flex-col items-center gap-8"
        style={{ zIndex: 1 }}
      >

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-widest uppercase"
          style={{
            color: dark ? "#4ade8066" : "#16a34a66",
            fontFamily: "sans-serif",
          }}
        >
          Your journey starts here
        </motion.p>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl leading-tight"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: dark ? "#f0fdf4" : "#052e16",
          }}
        >
          The best time to start{" "}
          <span style={{ color: dark ? "#4ade80" : "#16a34a" }}>
            was yesterday.
          </span>
          <br />
          The second best is now.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md leading-relaxed"
          style={{
            fontSize: "1rem",
            color: dark ? "#86efac77" : "#15803d88",
            fontFamily: "sans-serif",
          }}
        >
          Join 12,000+ people who stopped guessing and started knowing.
          Free to start. No credit card required.
        </motion.p>

        {/* CTA Button — glowing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative"
        >
          {/* Button glow layer */}
          <div
            style={{
              position: "absolute",
              inset: -8,
              borderRadius: 999,
              background: dark
                ? "radial-gradient(ellipse, #4ade8033 0%, transparent 70%)"
                : "radial-gradient(ellipse, #16a34a22 0%, transparent 70%)",
              filter: "blur(12px)",
              pointerEvents: "none",
            }}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex items-center gap-3 rounded-full font-bold tracking-wide"
            style={{
              background: dark ? "#4ade80" : "#16a34a",
              color: dark ? "#052e16" : "#ffffff",
              border: "none",
              padding: "1.2rem 3rem",
              fontSize: "1rem",
              cursor: "pointer",
              fontFamily: "sans-serif",
              boxShadow: dark
                ? "0 0 60px #4ade8044, 0 4px 20px rgba(0,0,0,0.3)"
                : "0 0 60px #16a34a33, 0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            Start for free
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Fine print */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs tracking-widest"
          style={{
            color: dark ? "#4ade8033" : "#16a34a44",
            fontFamily: "sans-serif",
          }}
        >
          NO CREDIT CARD · CANCEL ANYTIME · GDPR COMPLIANT
        </motion.p>
      </div>
    </section>
  )
}