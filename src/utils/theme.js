// Theme configuration and constants for the liquid glass design system
export const THEME_CONFIG = {
  // Color palette - pure monochrome
  colors: {
    background: '#000000',
    foreground: '#ffffff',
    glass: {
      primary: 'rgba(255, 255, 255, 0.05)',
      secondary: 'rgba(255, 255, 255, 0.03)',
      border: 'rgba(255, 255, 255, 0.1)',
      highlight: 'rgba(255, 255, 255, 0.15)',
      shadow: 'rgba(0, 0, 0, 0.3)'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      muted: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.4)'
    }
  },

  // Glass panel variations
  glass: {
    primary: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)'
    },
    floating: {
      background: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(24px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)'
    },
    metric: {
      background: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      backdropFilter: 'blur(18px)',
      boxShadow: '0 6px 28px rgba(0, 0, 0, 0.25)'
    }
  },

  // Animation configurations
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '750ms',
      slowest: '1000ms'
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      liquid: 'cubic-bezier(0.23, 1, 0.32, 1)'
    },
    bokeh: {
      duration: '20s',
      easing: 'ease-in-out',
      delay: {
        min: 0,
        max: 10000
      }
    }
  },

  // Typography scale
  typography: {
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    weights: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75'
    }
  },

  // Spacing system
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem'
  },

  // Border radius
  radius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px'
  },

  // Bokeh effect configuration
  bokeh: {
    particles: {
      count: 15,
      sizes: {
        small: { min: 20, max: 60 },
        medium: { min: 60, max: 120 },
        large: { min: 120, max: 200 }
      },
      opacity: {
        min: 0.02,
        max: 0.08
      },
      blur: {
        min: 40,
        max: 80
      }
    },
    movement: {
      speed: {
        x: { min: -0.5, max: 0.5 },
        y: { min: -0.3, max: 0.3 }
      },
      drift: {
        amplitude: 100,
        frequency: 0.001
      }
    }
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },

  // Z-index layers
  zIndex: {
    background: -1,
    default: 0,
    content: 10,
    overlay: 20,
    modal: 30,
    popover: 40,
    tooltip: 50
  }
};

// CSS custom properties generator
export const generateCSSVariables = () => {
  const cssVars = {};
  
  // Generate color variables
  Object.entries(THEME_CONFIG.colors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      cssVars[`--color-${key}`] = value;
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        cssVars[`--color-${key}-${subKey}`] = subValue;
      });
    }
  });

  // Generate spacing variables
  Object.entries(THEME_CONFIG.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  // Generate typography variables
  Object.entries(THEME_CONFIG.typography.sizes).forEach(([key, value]) => {
    cssVars[`--text-${key}`] = value;
  });

  return cssVars;
};

// Glass effect utility functions
export const getGlassStyles = (variant = 'primary') => {
  const glassConfig = THEME_CONFIG.glass[variant] || THEME_CONFIG.glass.primary;
  
  return {
    background: glassConfig.background,
    border: glassConfig.border,
    backdropFilter: glassConfig.backdropFilter,
    WebkitBackdropFilter: glassConfig.backdropFilter,
    boxShadow: glassConfig.boxShadow
  };
};

// Animation utility functions
export const getAnimationConfig = (type = 'default', duration = 'normal') => {
  return {
    transitionDuration: THEME_CONFIG.animations.duration[duration] || THEME_CONFIG.animations.duration.normal,
    transitionTimingFunction: THEME_CONFIG.animations.easing[type] || THEME_CONFIG.animations.easing.default
  };
};

// Responsive utility functions
export const getBreakpointValue = (breakpoint) => {
  return THEME_CONFIG.breakpoints[breakpoint];
};

// Bokeh particle generator
export const generateBokehParticle = (index) => {
  const sizeVariant = index % 3 === 0 ? 'large' : index % 2 === 0 ? 'medium' : 'small';
  const sizeConfig = THEME_CONFIG.bokeh.particles.sizes[sizeVariant];
  
  return {
    id: `bokeh-${index}`,
    size: Math.random() * (sizeConfig.max - sizeConfig.min) + sizeConfig.min,
    opacity: Math.random() * (THEME_CONFIG.bokeh.particles.opacity.max - THEME_CONFIG.bokeh.particles.opacity.min) + THEME_CONFIG.bokeh.particles.opacity.min,
    blur: Math.random() * (THEME_CONFIG.bokeh.particles.blur.max - THEME_CONFIG.bokeh.particles.blur.min) + THEME_CONFIG.bokeh.particles.blur.min,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speedX: Math.random() * (THEME_CONFIG.bokeh.movement.speed.x.max - THEME_CONFIG.bokeh.movement.speed.x.min) + THEME_CONFIG.bokeh.movement.speed.x.min,
    speedY: Math.random() * (THEME_CONFIG.bokeh.movement.speed.y.max - THEME_CONFIG.bokeh.movement.speed.y.min) + THEME_CONFIG.bokeh.movement.speed.y.min,
    delay: Math.random() * THEME_CONFIG.animations.bokeh.delay.max
  };
};

// Theme context helpers
export const LIQUID_GLASS_CLASSES = {
  container: 'min-h-screen bg-black text-white overflow-hidden relative',
  glassPanel: 'backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl shadow-2xl',
  glassPanelSecondary: 'backdrop-blur-lg bg-white/3 border border-white/8 rounded-lg shadow-xl',
  glassFloating: 'backdrop-blur-2xl bg-white/8 border border-white/15 rounded-2xl shadow-3xl',
  glassMetric: 'backdrop-blur-lg bg-white/6 border border-white/12 rounded-xl shadow-2xl',
  textPrimary: 'text-white',
  textSecondary: 'text-white/80',
  textMuted: 'text-white/60',
  textDisabled: 'text-white/40'
};

export default THEME_CONFIG;