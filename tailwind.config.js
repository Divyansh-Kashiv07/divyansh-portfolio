/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/index.html",
    "./client/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00d9ff',
        'neon-purple': '#d946ef',
        'dark-bg': '#0a0e27',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 217, 255, 0.3), inset 0 0 20px rgba(0, 217, 255, 0.1)',
        'neon-purple': '0 0 20px rgba(217, 70, 239, 0.3), inset 0 0 20px rgba(217, 70, 239, 0.1)',
      },
    },
  },
  plugins: [],
};
