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
        primary: '#0a192f',
        secondary: '#64ffda',
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0',
        accent: '#f97316',
        dark: {
          100: '#ccd6f6',
          200: '#8892b0',
          300: '#233554',
          400: '#112240',
          500: '#0a192f',
        },
        light: {
          100: '#ffffff',
          200: '#f8fafc',
          300: '#e2e8f0',
          400: '#94a3b8',
          500: '#64748b',
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
