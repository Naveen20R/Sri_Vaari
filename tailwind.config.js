// tailwind.config.js
module.exports = {
  content: [
    "./index.html",                // Include your HTML files
    "./src/**/*.{js,jsx,ts,tsx}",  // Adjust if using TypeScript or if paths are different
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#2897FF',    // Blue
        light_blue: '#EDF8FF',       // Light Blue
        dark: '#000000',             // Black
        blue_01: '#134595',
        blue_02: '#0A60EB',
        white_color: '#FBFBFB',      // Off-White
      },
      boxShadow: {
        shadow_01: '4px 4px 7px 0px #ACAEC0CC inset'
        
      },
    },
  },
  plugins: [],
};
