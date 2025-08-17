import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Dashboard from './components/Dashboard'
import { cn } from './lib/utils'

// Floating particles background component
const FloatingParticles = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 10,
    duration: Math.random() * 20 + 15
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/5 blur-xl"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Main navigation component
const Navigation = () => {
  return (
    <nav className="relative z-10 p-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "backdrop-blur-xl bg-white/5 rounded-2xl",
            "border border-white/10 p-4",
            "shadow-2xl shadow-black/50"
          )}
        >
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-2xl font-bold text-white tracking-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Liquid Glass
            </motion.h1>
            <div className="flex space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-2 rounded-xl text-white/80 hover:text-white",
                  "backdrop-blur-sm bg-white/5 border border-white/10",
                  "transition-all duration-300 hover:bg-white/10"
                )}
              >
                Dashboard
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-2 rounded-xl text-white/80 hover:text-white",
                  "backdrop-blur-sm bg-white/5 border border-white/10",
                  "transition-all duration-300 hover:bg-white/10"
                )}
              >
                Analytics
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

// Hero section component
const HeroSection = () => {
  return (
    <div className="relative z-10 flex-1 flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className={cn(
            "backdrop-blur-2xl bg-white/5 rounded-3xl",
            "border border-white/10 p-12",
            "shadow-2xl shadow-black/50",
            "relative overflow-hidden"
          )}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-3xl" />
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-white/20" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-7xl font-bold text-white mb-4 tracking-tight">
                $127,450
              </h2>
              <p className="text-xl text-white/60">Total Revenue</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12"
            >
              <div className={cn(
                "backdrop-blur-xl bg-white/5 rounded-2xl p-6",
                "border border-white/10"
              )}>
                <div className="text-3xl font-bold text-white mb-2">+24%</div>
                <div className="text-white/60">Growth</div>
              </div>
              <div className={cn(
                "backdrop-blur-xl bg-white/5 rounded-2xl p-6",
                "border border-white/10"
              )}>
                <div className="text-3xl font-bold text-white mb-2">1,247</div>
                <div className="text-white/60">Users</div>
              </div>
              <div className={cn(
                "backdrop-blur-xl bg-white/5 rounded-2xl p-6",
                "border border-white/10"
              )}>
                <div className="text-3xl font-bold text-white mb-2">98.2%</div>
                <div className="text-white/60">Uptime</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Main App component
function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Floating particles background */}
      <FloatingParticles />
      
      {/* Additional ambient lighting */}
      <div className="fixed inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <Router>
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navigation />
          
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
      
      {/* Bottom ambient glow */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}

export default App