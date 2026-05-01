import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Vīta didn't just track my health — it completely changed how I understand my own body. Three months in, I sleep better, think clearer, and feel 10 years younger.",
    name: "Sarah K.",
    role: "Founder, Luminary Studio",
    initial: "S",
  },
  {
    quote:
      "I've tried every wellness app out there. Vīta is the first one that actually felt like it was built for me specifically. The AI recommendations are scary accurate.",
    name: "Marcus T.",
    role: "Product Designer, Notion",
    initial: "M",
  },
  {
    quote:
      "Within 6 weeks my HRV scores improved by 34%. My doctor was genuinely surprised. I just showed her the Vīta dashboard.",
    name: "Priya R.",
    role: "Surgeon, Apollo Health",
    initial: "P",
  },
]

const ticker = [
  "⬤  12,000+ active users",
  "⬤  94% report better sleep",
  "⬤  4.9 stars on App Store",
  "⬤  Featured in TechCrunch",
  "⬤  $2.4M raised in seed round",
  "⬤  Ships to 40+ countries",
  "⬤  Zero data sold. Ever.",
]

export default function Testimonials({ dark }) {
  const tickerRef = useRef(null)

  useEffect(() => {
    const el = tickerRef.current
    // console.log("el", el)
    if (!el) return

    let pos = 0
    const speed = 0.5

    const animate = () => {
      pos = pos - speed;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0
      el.style.transform = `translateX(${pos}px)`
      requestAnimationFrame(animate)
    }
    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)

  }, [])


  return (
    <section className="relative z-10 py-32 overflow-hidden">

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          color: dark ? "#4ade8066" : "#16a34a66",
          fontFamily: "sans-serif",
        }}
        className="text-xs tracking-widest uppercase mb-6 px-8 md:px-24"
      >
        Real people. Real results.
      </motion.p>

      {/* Big pull quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="px-8 md:px-24 mb-24"
      >
        <p
          className="max-w-4xl leading-tight"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            color: dark ? "#f0fdf4" : "#052e16",
          }}
        >
          "Vīta didn't just track my health —{" "}
          <span style={{ color: dark ? "#4ade80" : "#16a34a" }}>
            it completely changed how I understand my own body.
          </span>
          "
        </p>
        <div className="flex items-center gap-4 mt-8">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
            style={{
              background: dark ? "#4ade8022" : "#dcfce7",
              color: dark ? "#4ade80" : "#16a34a",
              fontFamily: "sans-serif",
            }}
          >
            S
          </div>
          <div>
            <p
              className="text-sm font-semibold"
              style={{
                color: dark ? "#f0fdf4" : "#052e16",
                fontFamily: "sans-serif",
              }}
            >
              Sarah K.
            </p>
            <p
              className="text-xs"
              style={{
                color: dark ? "#86efac66" : "#15803d88",
                fontFamily: "sans-serif",
              }}
            >
              Founder, Luminary Studio
            </p>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-24 mb-24">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="rounded-3xl p-8 flex flex-col gap-6"
            style={{
              background: dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
              border: `1px solid ${dark ? "#4ade8018" : "#16a34a18"}`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            {/* Quote mark */}
            <span
              style={{
                fontSize: "4rem",
                lineHeight: 0.8,
                fontFamily: "'Playfair Display', serif",
                color: dark ? "#4ade8033" : "#16a34a33",
              }}
            >
              <Quote size={14} />
            </span>

            <p
              className="text-sm leading-relaxed flex-1"
              style={{
                color: dark ? "#86efacaa" : "#15803daa",
                fontFamily: "sans-serif",
              }}
            >
              {t.quote}
            </p>

            <div className="flex items-center gap-3 mt-auto">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  background: dark ? "#4ade8022" : "#dcfce7",
                  color: dark ? "#4ade80" : "#16a34a",
                  fontFamily: "sans-serif",
                }}
              >
                {t.initial}
              </div>
              <div>
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{
                    color: dark ? "#f0fdf4" : "#052e16",
                    fontFamily: "sans-serif",
                  }}
                >
                  {t.name}
                </p>
                <p
                  className="text-xs"
                  style={{
                    color: dark ? "#86efac66" : "#15803d88",
                    fontFamily: "sans-serif",
                  }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Ticker */}
      <div
        className="relative w-full overflow-hidden py-5"
        style={{
          borderTop: `1px solid ${dark ? "#4ade8018" : "#16a34a18"}`,
          borderBottom: `1px solid ${dark ? "#4ade8018" : "#16a34a18"}`,
        }}
      >
        <div ref={tickerRef} className="flex gap-16 whitespace-nowrap w-max">
          {[...ticker, ...ticker].map((item, i) => (
            <span
              key={i}
              className="text-xs tracking-widest uppercase"
              style={{
                color: dark ? "#4ade8066" : "#16a34a66",
                fontFamily: "sans-serif",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}