/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],

  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig; // ✅ Named export
