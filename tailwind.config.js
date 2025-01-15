/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chrome: {
          light: '#EF4444',
          main: '#DC2626',
          dark: '#B91C1C',
        },
        dark: {
          900: '#0f0f0f',
          800: '#1a1a1a',
          700: '#2a2a2a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'chrome': '0 8px 32px rgba(239, 68, 68, 0.15)',
      },
    },
  },
  plugins: [],
};