/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-dark": "#0B0F19",
        "panel": "#141A26",
        "primary": "#00F5A0",
        "secondary": "#00C2FF",
        "danger": "#FF5C93",
        "gain": "#14FFB9",
        "pending": "#FFD166",
        "text-primary": "#E8EDF2",
        "text-muted": "#8B93A7",
        "divider": "#1C2333",
        "bias-right": "#FF5C93",
        "bias-left": "#00C2FF",
        "bias-center": "#8B93A7",
        "bias-niche": "#A855F7",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      boxShadow: {
        'glow-primary': '0 0 15px 0 rgba(0, 245, 160, 0.3)',
        'glow-green': '0 0 15px -3px rgba(20, 255, 185, 0.3)',
        'glow-red': '0 0 15px -3px rgba(255, 92, 147, 0.3)',
        'glow-secondary': '0 0 15px 0 rgba(0, 194, 255, 0.3)',
        'glow-danger': '0 0 15px 0 rgba(255, 92, 147, 0.3)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
