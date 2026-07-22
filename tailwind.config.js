/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode semantic colors
        primary: {
          light: '#FFFFFF',
          dark: '#0E1012',
        },
        // Graphite colors
        graphite: {
          DEFAULT: '#121314',
          card: '#1A1C1E',
          border: '#2A2D30',
        },
        brand: {
          black: '#121314', // Graphite Black
          emerald: '#10B981', // Emerald Green Accent
          steel: '#4682B4', // Steel Blue Highlight
          bgDark: '#0E1012', // Dark Mode background
          cardDark: '#1A1C1E', // Dark Mode card bg
        }
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      clipPath: {
        'notch': 'polygon(0% 0%, calc(100% - 12px) 0%, 100% 12px, 100% 100%, 12px 100%, 0% calc(100% - 12px))',
        'notch-sm': 'polygon(0% 0%, calc(100% - 6px) 0%, 100% 6px, 100% 100%, 6px 100%, 0% calc(100% - 6px))',
      },
      boxShadow: {
        'premium': '0 4px 30px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 10px 40px rgba(0, 0, 0, 0.06)',
        'premium-dark': '0 4px 30px rgba(0, 0, 0, 0.4)',
        'premium-dark-hover': '0 10px 40px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
