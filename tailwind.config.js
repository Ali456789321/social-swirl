/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#03fc6b",
        btn:"#5e47f5",
        social_left: "rgba(82, 202, 250,0.9)",
        social_right: "rgba(64, 113, 247,0.9)"
      },
      width: {
        course_img:"200vh"
      }
    },
  },
  plugins: [],
}