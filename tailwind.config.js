/** @type {import('tailwindcss').Config} */

// import plugin from 'tailwindcss'
// const plugin = require(tailwind/plugin);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {  // Test override blue default color 
    //   'blue': '#1fb6ff',
    // },
    extend: {},
  },
  plugins: [
    // plugin(function ({addUtilities}) { 
    //   const myUtilities = {
    //     "bg-aqua": { background: "aqua" }
    //   };
    //   addUtilities(myUtilities);
    //  }),
  ],
}

