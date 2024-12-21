/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure React files are scanned
    "./public/index.html",        // Optional, for static HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
