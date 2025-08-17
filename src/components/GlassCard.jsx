import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../lib/utils'

const GlassCard = forwardRef(({ 
  className, 
  children, 
  variant = 'default',
  blur = 'md',
  border = true,
  glow = false,
  animate = true,
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-white/5 backdrop-blur-md',
    subtle: 'bg-white/3 backdrop-blur-sm',
    strong: 'bg-white/10 backdrop-blur-lg',
    minimal: 'bg-white/2 backdrop-blur-sm'
  }

  const blurVariants = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  }

  const baseClasses = cn(
    'relative overflow-hidden rounded-2xl',
    variants[variant],
    blurVariants[blur],
    border && 'border border-white/10',
    glow && 'shadow-2xl shadow-white/5',
    'before:absolute before:inset-0 before:rounded-2xl',
    'before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-transparent',
    'before:opacity-50 before:pointer-events-none',
    'after:absolute after:top-0 after:left-0 after:right-0 after:h-px',
    'after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent',
    className
  )

  const Component = animate ? motion.div : 'div'

  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    whileHover: { 
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  } : {}

  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...animationProps}
      {...props}
    >
      <div className="relative z-10 h-full">
        {children}
      </div>
      
      {/* Liquid glass reflection */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/2 opacity-60 pointer-events-none" />
      
      {/* Subtle inner glow */}
      <div className="absolute inset-0 rounded-2xl shadow-inner shadow-white/5 pointer-events-none" />
      
      {/* Corner highlights */}
      <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-radial from-white/10 to-transparent rounded-full blur-xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-radial from-white/8 to-transparent rounded-full blur-lg opacity-30 pointer-events-none" />
    </Component>
  )
})

GlassCard.displayName = 'GlassCard'

// Predefined glass card variants
export const GlassPanel = forwardRef(({ className, ...props }, ref) => (
  <GlassCard
    ref={ref}
    variant="default"
    className={cn('p-6', className)}
    {...props}
  />
))

export const GlassContainer = forwardRef(({ className, ...props }, ref) => (
  <GlassCard
    ref={ref}
    variant="subtle"
    blur="lg"
    className={cn('p-8', className)}
    {...props}
  />
))

export const GlassMetric = forwardRef(({ className, ...props }, ref) => (
  <GlassCard
    ref={ref}
    variant="strong"
    glow={true}
    className={cn('p-6 text-center', className)}
    {...props}
  />
))

export const GlassFloating = forwardRef(({ className, ...props }, ref) => (
  <GlassCard
    ref={ref}
    variant="minimal"
    border={false}
    className={cn(
      'p-4 shadow-2xl shadow-black/20',
      'hover:shadow-white/10 transition-shadow duration-500',
      className
    )}
    {...props}
  />
))

GlassPanel.displayName = 'GlassPanel'
GlassContainer.displayName = 'GlassContainer'
GlassMetric.displayName = 'GlassMetric'
GlassFloating.displayName = 'GlassFloating'

export default GlassCard