export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeInDown': 'fadeInDown 0.5s ease-out',
        'fadeInUp': 'fadeInUp 0.5s ease-out',
        'slideInFromLeft': 'slideInFromLeft 0.7s ease-out',
        'slideInFromRight': 'slideInFromRight 0.7s ease-out',
        'zoomIn': 'zoomIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'border': 'borderPulse 2s infinite',
        'flip': 'flip 1s ease-out',
        'bounce-slow': 'bounceSlow 3s infinite',
        'expand': 'expand 0.5s ease-out',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.4 },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeInDown: {
          from: {
            opacity: 0,
            transform: 'translateY(-20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        fadeInUp: {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        slideInFromLeft: {
          from: {
            opacity: 0,
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        slideInFromRight: {
          from: {
            opacity: 0,
            transform: 'translateX(30px)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        zoomIn: {
          from: {
            opacity: 0,
            transform: 'scale(0.95)',
          },
          to: {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        shine: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
        spin: {
          from: {
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(360deg)',
          },
        },
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-5deg)',
          },
          '50%': {
            transform: 'rotate(5deg)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            opacity: 0.6,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.05)',
          },
        },
        borderPulse: {
          '0%, 100%': {
            borderColor: 'rgba(99, 102, 241, 0.3)',
          },
          '50%': {
            borderColor: 'rgba(99, 102, 241, 0.8)',
          },
        },
        flip: {
          '0%': {
            transform: 'perspective(400px) rotateY(90deg)',
            opacity: 0,
          },
          '40%': {
            transform: 'perspective(400px) rotateY(-10deg)',
          },
          '70%': {
            transform: 'perspective(400px) rotateY(10deg)',
          },
          '100%': {
            transform: 'perspective(400px) rotateY(0deg)',
            opacity: 1,
          },
        },
        bounceSlow: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        expand: {
          from: {
            transform: 'scale(0.8)',
            opacity: 0,
          },
          to: {
            transform: 'scale(1)',
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
}