/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bodyBlue: '#0A1828',
        bodyTurquoise: '#178582',
        bodyGold: '#BFA181',
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
  ],
}

