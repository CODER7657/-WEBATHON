/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0D0D2B',
        'deep-purple': '#1A1A3D',
        'neon-cyan': '#00F6FF',
        'neon-magenta': '#FF00E5',
        'light-gray': '#D1D5DB',
        'dark-gray': '#374151',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #00F6FF, 0 0 10px #00F6FF, 0 0 15px #00F6FF' },
          '50%': { textShadow: '0 0 10px #00F6FF, 0 0 20px #00F6FF, 0 0 30px #00F6FF' },
        }
      },
      animation: {
        glow: 'glow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
