import { motion } from "framer-motion"

const links = {
  Product: ["Features", "Science", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Cookies", "GDPR"],
}

export default function Footer({ dark }) {
  return (
    <footer
      className="relative z-10 px-8 md:px-24 py-16"
      style={{
        borderTop: `1px solid ${dark ? "#4ade8015" : "#16a34a15"}`,
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

        {/* Brand column */}
        <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: dark ? "#4ade80" : "#16a34a",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Vīta
          </span>
          <p
            className="text-sm leading-relaxed max-w-xs"
            style={{
              color: dark ? "#86efac55" : "#15803d77",
              fontFamily: "sans-serif",
            }}
          >
            Know your body. Own your life. AI-powered wellness for the serious few.
          </p>

          {/* Social dots */}
          <div className="flex gap-3 mt-2">
            {["𝕏", "in", "ig"].map((s) => (
              <div
                key={s}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs cursor-pointer"
                style={{
                  background: dark ? "#ffffff0a" : "#0000000a",
                  border: `1px solid ${dark ? "#4ade8018" : "#16a34a18"}`,
                  color: dark ? "#86efac66" : "#15803d88",
                  fontFamily: "sans-serif",
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([category, items]) => (
          <div key={category} className="flex flex-col gap-4">
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{
                color: dark ? "#4ade8066" : "#16a34a66",
                fontFamily: "sans-serif",
              }}
            >
              {category}
            </span>
            <ul className="flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-sm cursor-pointer transition-opacity hover:opacity-100"
                  style={{
                    color: dark ? "#86efac55" : "#15803d77",
                    fontFamily: "sans-serif",
                    opacity: 0.7,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
        style={{
          borderTop: `1px solid ${dark ? "#4ade8010" : "#16a34a10"}`,
        }}
      >
        <p
          className="text-xs"
          style={{
            color: dark ? "#4ade8033" : "#16a34a44",
            fontFamily: "sans-serif",
          }}
        >
          © 2025 Vīta Inc. All rights reserved.
        </p>
        <p
          className="text-xs"
          style={{
            color: dark ? "#4ade8033" : "#16a34a44",
            fontFamily: "sans-serif",
          }}
        >
          Designed & built with intention.
        </p>
      </div>
    </footer>
  )
}