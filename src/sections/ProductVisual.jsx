import { motion } from "framer-motion"
import { Heart, Moon, Zap, TrendingUp, Droplets, Brain } from "lucide-react"

const floatingCards = [
  {
    icon: Heart,
    label: "Heart Rate",
    value: "72 bpm",
    change: "+2%",
    positive: true,
    top: "10%",
    left: "-22%",
  },
  {
    icon: Moon,
    label: "Sleep Score",
    value: "94 / 100",
    change: "+12%",
    positive: true,
    top: "10%",
    right: "-22%",
  },
  {
    icon: Zap,
    label: "Energy Level",
    value: "High",
    change: "+18%",
    positive: true,
    bottom: "20%",
    left: "-22%",
  },
  {
    icon: Droplets,
    label: "Hydration",
    value: "2.4L",
    change: "-3%",
    positive: false,
    bottom: "20%",
    right: "-22%",
  },
]

const chartBars = [40, 65, 45, 80, 60, 90, 75, 85, 70, 95, 80, 88]

export default function ProductVisual({ dark }) {
  return (
    <section className="relative z-10 px-8 md:px-24 py-32 flex flex-col items-center">

      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-widest uppercase mb-6"
        style={{
          color: dark ? "#4ade8066" : "#16a34a66",
          fontFamily: "sans-serif",
        }}
      >
        The dashboard
      </motion.p>

      {/* Section Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-24 max-w-2xl leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: dark ? "#f0fdf4" : "#052e16",
        }}
      >
        Everything about you,{" "}
        <span style={{ color: dark ? "#4ade80" : "#16a34a" }}>
          in one place.
        </span>
      </motion.h2>

      {/* Dashboard Wrapper — relative so floating cards position against it */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-3xl"
      >

        {/* Glow beneath dashboard */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: "70%",
            height: 80,
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(ellipse, #4ade8033 0%, transparent 70%)"
              : "radial-gradient(ellipse, #16a34a22 0%, transparent 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />

        {/* Floating Cards */}
        {floatingCards.map((card, i) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.label}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
              className="absolute hidden md:flex flex-col gap-1 rounded-2xl p-4 w-36"
              style={{
                top: card.top,
                left: card.left,
                right: card.right,
                bottom: card.bottom,
                background: dark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.9)",
                border: `1px solid ${dark ? "#4ade8022" : "#16a34a22"}`,
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: dark
                  ? "0 8px 32px rgba(0,0,0,0.4)"
                  : "0 8px 32px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex items-center justify-between">
                <Icon
                  size={14}
                  style={{ color: dark ? "#4ade80" : "#16a34a" }}
                />
                <span
                  className="text-xs font-semibold"
                  style={{
                    color: card.positive
                      ? dark ? "#4ade80" : "#16a34a"
                      : "#f87171",
                    fontFamily: "sans-serif",
                  }}
                >
                  {card.change}
                </span>
              </div>
              <span
                className="text-xs"
                style={{
                  color: dark ? "#86efac66" : "#15803d88",
                  fontFamily: "sans-serif",
                }}
              >
                {card.label}
              </span>
              <span
                className="text-sm font-bold"
                style={{
                  color: dark ? "#f0fdf4" : "#052e16",
                  fontFamily: "sans-serif",
                }}
              >
                {card.value}
              </span>
            </motion.div>
          )
        })}

        {/* Main Dashboard — floats up and down */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-3xl overflow-hidden"
          style={{
            background: dark
              ? "rgba(255,255,255,0.04)"
              : "rgba(255,255,255,0.85)",
            border: `1px solid ${dark ? "#4ade8022" : "#16a34a22"}`,
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: dark
              ? "0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)"
              : "0 32px 80px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
          }}
        >

          {/* Dashboard Header */}
          <div
            className="flex items-center justify-between px-8 py-5"
            style={{
              borderBottom: `1px solid ${dark ? "#4ade8012" : "#16a34a12"}`,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
                  <div
                    key={color}
                    className="w-3 h-3 rounded-full"
                    style={{ background: color }}
                  />
                ))}
              </div>
              <span
                className="text-xs tracking-widest uppercase ml-2"
                style={{
                  color: dark ? "#4ade8066" : "#16a34a66",
                  fontFamily: "sans-serif",
                }}
              >
                Vīta Dashboard
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#4ade80",
                  boxShadow: "0 0 6px #4ade80",
                }}
              />
              <span
                className="text-xs"
                style={{
                  color: dark ? "#4ade8088" : "#16a34a88",
                  fontFamily: "sans-serif",
                }}
              >
                Live
              </span>
            </div>
          </div>

          {/* Dashboard Body */}
          <div className="p-8 flex flex-col gap-8">

            {/* Top row — greeting + score */}
            <div className="flex items-start justify-between">
              <div>
                <p
                  className="text-xs tracking-widest uppercase mb-2"
                  style={{
                    color: dark ? "#4ade8066" : "#16a34a66",
                    fontFamily: "sans-serif",
                  }}
                >
                  Good morning
                </p>
                <h3
                  style={{
                    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    color: dark ? "#f0fdf4" : "#052e16",
                  }}
                >
                  You're in your top 10%.
                </h3>
              </div>

              {/* Circular score */}
              <div className="flex flex-col items-center gap-1">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: dark
                      ? "conic-gradient(#4ade80 0% 88%, #4ade8022 88% 100%)"
                      : "conic-gradient(#16a34a 0% 88%, #16a34a22 88% 100%)",
                    padding: 3,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      background: dark ? "#0a0a0a" : "#ffffff",
                    }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{
                        color: dark ? "#4ade80" : "#16a34a",
                        fontFamily: "sans-serif",
                      }}
                    >
                      88
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs"
                  style={{
                    color: dark ? "#86efac66" : "#15803d88",
                    fontFamily: "sans-serif",
                  }}
                >
                  Vita Score
                </span>
              </div>
            </div>

            {/* Chart */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{
                    color: dark ? "#4ade8066" : "#16a34a66",
                    fontFamily: "sans-serif",
                  }}
                >
                  Weekly Vitality
                </span>
                <div className="flex items-center gap-2">
                  <TrendingUp
                    size={12}
                    style={{ color: dark ? "#4ade80" : "#16a34a" }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: dark ? "#4ade80" : "#16a34a",
                      fontFamily: "sans-serif",
                    }}
                  >
                    +23% this week
                  </span>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 h-24">
                {chartBars.map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex-1 rounded-full"
                    style={{
                      background:
                        i === chartBars.length - 1
                          ? dark ? "#4ade80" : "#16a34a"
                          : dark ? "#4ade8033" : "#16a34a22",
                      minWidth: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Bottom row — 3 mini stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Brain, label: "Focus", value: "92%" },
                { icon: Heart, label: "Recovery", value: "87%" },
                { icon: Moon, label: "Deep Sleep", value: "1h 42m" },
              ].map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl p-4 flex flex-col gap-2"
                    style={{
                      background: dark
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(0,0,0,0.03)",
                      border: `1px solid ${dark ? "#4ade8015" : "#16a34a15"}`,
                    }}
                  >
                    <Icon
                      size={14}
                      style={{ color: dark ? "#4ade80" : "#16a34a" }}
                    />
                    <span
                      className="text-xs"
                      style={{
                        color: dark ? "#86efac55" : "#15803d77",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {stat.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{
                        color: dark ? "#f0fdf4" : "#052e16",
                        fontFamily: "sans-serif",
                      }}
                    >
                      {stat.value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}