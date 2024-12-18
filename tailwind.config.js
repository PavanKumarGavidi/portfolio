/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // Bright blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#10B981", // Emerald green
          foreground: "#FFFFFF",
        },
        background: "#0F172A", // Dark blue-gray
        foreground: "#E2E8F0",
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        accent: {
          DEFAULT: "#8B5CF6", // Purple
          foreground: "#FFFFFF",
        },
        border: "#2D3748",
      },
      borderColor: {
        DEFAULT: "#2D3748", // Add this line to define the default border color
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
      },
    },
  },
  plugins: [],
}