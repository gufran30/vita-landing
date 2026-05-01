import { motion } from "motion/react"
import { Brain, Activity, ShieldCheck, TicketIcon } from "lucide-react"


const stats = [
  { value: "12K+", label: "Early Users" },
  { value: "94%", label: "Report Better Sleep" },
  { value: "3.2x", label: "Faster Results" },
  { value: "4.9★", label: "App Store Rating" },
]

const features = [
  {
    icon: Brain,
    title: "AI Body Intelligence",
    description:
      "Vīta's engine analyses 40+ biomarkers daily and learns your unique biology — building a model that gets smarter every week.",
  },
  {
    icon: Activity,
    title: "Real-Time Tracking",
    description:
      "From heart rate variability to stress patterns, every signal is captured, interpreted, and turned into a clear daily action.",
  },
  {
    icon: ShieldCheck,
    title: "Science-Backed Protocol",
    description:
      "Every recommendation is grounded in peer-reviewed research. No wellness trends. No guesswork. Just what actually works.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  })
}

export default function Features({ dark }) {

  return (
    <section className="relative z-10 px-8 md:px-24 py-32">

      {/* Thin divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-px mb-24 origin-left"
        style={{ background: dark ? "#4ade8022" : "#16a34a22" }}
      />

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i} // used to pass a unique value (usually an index) into a dynamic variant.
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-1"
          >
            <span
              className="font-bold leading-none font-playfair"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontFamily: "'Playfair Display', serif",
                color: dark ? "#4ade80" : "#16a34a",
              }}
            >
              {stat.value}
            </span>
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: dark ? "#86efac66" : "#15803d88", fontFamily: "sans-serif" }}
            >
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Section Headline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-widest uppercase mb-6"
        style={{ color: dark ? "#4ade8066" : "#16a34a66", fontFamily: "sans-serif" }}
      >
        Why Vīta works
      </motion.p>

      {/* Section Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-20 max-w-2xl leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: dark ? "#f0fdf4" : "#052e16",
        }}
      >
        Your body is speaking.<br />
        <span style={{ color: dark ? "#4ade80" : "#16a34a" }}>We help you listen.</span>
      </motion.h2>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, i) => {
          const Icon = feature.icon
          
          return (
            <motion.div
              key={feature.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="rounded-3xl p-8 flex flex-col gap-6 cursor-default"
              style={{
                background: dark
                  ? "rgba(255, 255, 255, 0.03"
                  : "rgba(0, 0, 0, 0.02",
                border: `1px solid ${dark ? "#4ade8018" : "#16a34a18"}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: dark ? "#4ade8015" : "#dcfce7",
                  border: `1px solid ${dark ? "#4ade8030" : "#86efac"}`,
                }}
              >
                <Icon
                  size={20}
                  style={{ color: dark ? "#4ade80" : "#16a34a" }}
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3
                  className="font-semibold text-lg leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: dark ? "#f0fdf4" : "#052e16",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: dark ? "#86efac77" : "#15803d88",
                    fontFamily: "sans-serif",
                  }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Bottom arrow */}
              <motion.span
                whileHover={{ x: 4 }}
                className="text-xs tracking-widest mt-auto uppercase"
                style={{
                  color: dark ? "#4ade8066" : "#16a34a66",
                  fontFamily: "sans-serif",
                }}
              >
                LEARN MORE →
              </motion.span>
            </motion.div>
          )
        })}

      </div>

    </section>
  )
}