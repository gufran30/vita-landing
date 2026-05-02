import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Features from "./sections/Features"
import Testimonials from "./sections/Testimonials"
import ProductVisual from "./sections/ProductVisual"
import Pricing from "./sections/Pricing"
import CTA from "./sections/CTA"
import Footer from "./sections/Footer"


export default function App() {
  const [dark, setDark] = useState(true)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  // create a custom cursor that only activates on devices
  // with a mouse (like desktops) and disables itself on touchscreens
  useEffect(() => {
    const check = () => {
      setIsPointer(window.matchMedia("(pointer: fine)").matches)
    }
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    if (!isPointer) return
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [isPointer])

  return (
    <div
      style={{
        background: dark
          ? "radial-gradient(ellipse at 20% 50%, #0d2818 0%, #000000 50%, #0a0a0a 100%)"
          : "radial-gradient(ellipse at 20% 50%, #e8f5e9 0%, #ffffff 50%, #f0faf0 100%)",
        minHeight: "100vh",
        transition: "background 0.6s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >

      {/* Custom Cursor */}
      {isPointer && (
        <motion.div
          animate={{ x: cursor.x - 16, y: cursor.y - 16, scale: hovered ? 2.5 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          style={{
            position: "fixed",
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: `2px solid ${dark ? "#4ade80" : "#16a34a"}`,
            pointerEvents: "none",
            zIndex: 9999,
            mixBlendMode: "difference",
          }}
        />
      )}

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, #16a34a44 0%, transparent 70%)"
            : "radial-gradient(circle, #bbf7d066 0%, transparent 70%)",
          top: -100,
          left: -100,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, #05966944 0%, transparent 70%)"
            : "radial-gradient(circle, #d1fae566 0%, transparent 70%)",
          bottom: -50,
          right: -100,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content sits above orbs */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar dark={dark} setDark={setDark} setHovered={setHovered} />
        <Hero dark={dark} setHovered={setHovered} />
        <Features dark={dark} />
        <Testimonials dark={dark} />
        <ProductVisual dark={dark} />
        <Pricing dark={dark} setHovered={setHovered} />
        <CTA dark={dark} setHovered={setHovered} />
        <Footer dark={dark} />
      </div>

    </div>
  )
}