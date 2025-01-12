/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'faint-triangles': "url('/faint-triangles-bg.png')",
        'mob-faint-triangles': "url('/mobile-faint-triangles-bg.png')",
        'main-triangles': "url('/main-triangles.png')",
      },
      colors: {
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
