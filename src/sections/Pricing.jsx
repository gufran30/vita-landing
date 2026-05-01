import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Zap } from "lucide-react"

const plans = [
  {
    name: "Starter",
    desc: "For curious minds beginning their wellness journey.",
    monthly: 0,
    annual: 0,
    color: "neutral",
    features: [
      "Basic health tracking",
      "7-day history",
      "Sleep score",
      "Daily wellness tip",
      "Mobile app access",
    ],
    cta: "Get started free",
    popular: false,
  },
  {
    name: "Pro",
    desc: "For people serious about understanding their biology.",
    monthly: 19,
    annual: 12,
    color: "green",
    features: [
      "Everything in Starter",
      "AI body intelligence",
      "Unlimited history",
      "40+ biomarker tracking",
      "Weekly AI insights report",
      "Priority support",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Elite",
    desc: "For athletes and high performers who demand more.",
    monthly: 49,
    annual: 29,
    color: "neutral",
    features: [
      "Everything in Pro",
      "Personal wellness coach",
      "Lab test integration",
      "Custom protocols",
      "Early feature access",
      "1-on-1 onboarding call",
    ],
    cta: "Contact us",
    popular: false,
  },
]

export default function Pricing({ dark }) {
  const [annual, setAnnual] = useState(false)

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

      {/* Section Label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-widest uppercase mb-6"
        style={{ color: dark ? "#4ade8066" : "#16a34a66", fontFamily: "sans-serif" }}
      >
        Simple pricing
      </motion.p>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-xl leading-tight"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: dark ? "#f0fdf4" : "#052e16",
        }}
      >
        Invest in yourself.{" "}
        <span style={{ color: dark ? "#4ade80" : "#16a34a" }}>
          Cancel anytime.
        </span>
      </motion.h2>

      {/* Toggle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span
          className="text-sm font-medium"
          style={{
            color: !annual
              ? dark ? "#f0fdf4" : "#052e16"
              : dark ? "#86efac66" : "#15803d66",
            fontFamily: "sans-serif",
            transition: "color 0.3s",
          }}
        >
          Monthly
        </span>

        {/* Toggle pill */}
        <div
          onClick={() => setAnnual(!annual)}
          className="relative w-14 h-7 rounded-full cursor-pointer flex items-center px-1"
          style={{
            background: dark ? "#4ade8033" : "#16a34a33",
            border: `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`,
          }}
        >
          <motion.div
            animate={{ x: annual ? 26 : 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="w-5 h-5 rounded-full"
            style={{ background: dark ? "#4ade80" : "#16a34a" }}
          />
        </div>

        <span
          className="text-sm font-medium"
          style={{
            color: annual
              ? dark ? "#f0fdf4" : "#052e16"
              : dark ? "#86efac66" : "#15803d66",
            fontFamily: "sans-serif",
            transition: "color 0.3s",
          }}
        >
          Annual
        </span>

        {/* Savings badge */}
        <AnimatePresence>
          {annual && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold"
              style={{
                background: dark ? "#4ade8022" : "#dcfce7",
                color: dark ? "#4ade80" : "#16a34a",
                border: `1px solid ${dark ? "#4ade8033" : "#86efac"}`,
                fontFamily: "sans-serif",
              }}
            >
              <Zap size={10} />
              Save up to 40%
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative rounded-3xl p-8 flex flex-col gap-6"
            style={{
              background: plan.popular
                ? dark ? "rgba(74,222,128,0.08)" : "rgba(22,163,74,0.06)"
                : dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
              border: plan.popular
                ? `1px solid ${dark ? "#4ade8044" : "#16a34a44"}`
                : `1px solid ${dark ? "#4ade8018" : "#16a34a18"}`,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >

            {/* Popular badge */}
            {plan.popular && (
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: dark ? "#4ade80" : "#16a34a",
                  color: dark ? "#052e16" : "#ffffff",
                  fontFamily: "sans-serif",
                  whiteSpace: "nowrap",
                }}
              >
                Most Popular
              </div>
            )}

            {/* Plan name + desc */}
            <div className="flex flex-col gap-2">
              <span
                className="text-xs tracking-widest uppercase font-medium"
                style={{
                  color: dark ? "#4ade8088" : "#16a34a88",
                  fontFamily: "sans-serif",
                }}
              >
                {plan.name}
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: dark ? "#86efac77" : "#15803d88",
                  fontFamily: "sans-serif",
                }}
              >
                {plan.desc}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={annual ? "annual" : "monthly"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    fontWeight: 700,
                    fontFamily: "'Playfair Display', serif",
                    color: dark ? "#f0fdf4" : "#052e16",
                    lineHeight: 1,
                  }}
                >
                  {plan.monthly === 0
                    ? "Free"
                    : `$${annual ? plan.annual : plan.monthly}`}
                </motion.span>
              </AnimatePresence>
              {plan.monthly !== 0 && (
                <span
                  className="text-sm mb-2"
                  style={{
                    color: dark ? "#86efac55" : "#15803d77",
                    fontFamily: "sans-serif",
                  }}
                >
                  / mo
                </span>
              )}
            </div>

            {/* Annual note */}
            {plan.monthly !== 0 && (
              <p
                className="text-xs -mt-4"
                style={{
                  color: dark ? "#4ade8055" : "#16a34a66",
                  fontFamily: "sans-serif",
                  minHeight: 16,
                }}
              >
                {annual
                  ? `Billed $${plan.annual * 12}/year`
                  : "Billed monthly"}
              </p>
            )}

            {/* Divider */}
            <div
              className="w-full h-px"
              style={{
                background: dark ? "#4ade8015" : "#16a34a15",
              }}
            />

            {/* Features */}
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm"
                  style={{
                    color: dark ? "#86efacaa" : "#15803daa",
                    fontFamily: "sans-serif",
                  }}
                >
                  <Check
                    size={14}
                    style={{
                      color: dark ? "#4ade80" : "#16a34a",
                      flexShrink: 0,
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 rounded-full text-sm font-bold tracking-wide mt-auto"
              style={{
                background: plan.popular
                  ? dark ? "#4ade80" : "#16a34a"
                  : "transparent",
                color: plan.popular
                  ? dark ? "#052e16" : "#ffffff"
                  : dark ? "#86efac" : "#16a34a",
                border: plan.popular
                  ? "none"
                  : `1px solid ${dark ? "#4ade8033" : "#16a34a33"}`,
                cursor: "pointer",
                fontFamily: "sans-serif",
                boxShadow: plan.popular
                  ? dark ? "0 0 30px #4ade8033" : "0 0 30px #16a34a22"
                  : "none",
              }}
            >
              {plan.cta}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}   