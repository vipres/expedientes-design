/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "dark-purple": "#171F28",
        "light-white": "#adb5bd",
        "sidebar-bg": "#222E3C",
      }
    },
  },
  plugins: [],
}

