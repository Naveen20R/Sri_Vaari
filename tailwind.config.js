module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#2897FF',    // Blue
        light_blue: '#EDF8FF',       // Light Blue
        dark_blue: '#0A60EB',
        dark: '#000000',             // Black
        blue_01: '#134595',
        blue_02: '#0A60EB',
        blue_03: '#88D2FF',
        blue_04: '#ABDFFE',
        white_color: '#FBFBFB',
        light_white: '#EFEFEF',
        pure_white: "#fff",
        'custom-green': '#00FF00',
        gray_color: '#AFAFAF',
        light_gray: '#ECECEC',
        red_01: '#DA534F',
        red_02: '#E26E6A33',
        red_03: '#EA0700',
        green_color: '#228B22',
        navy_blue: "#134595"
      },
      boxShadow: {
        shadow_01: '4px 4px 7px 0px #ACAEC0CC inset',
        shadow_02: '-7px -7px 12px 0px #ACAEC0CC',
        shadow_03: '0px 4px 4px 0px #00000040',
        shadow_04: "4px 4px 7px 0px #ACAEC0CC inset"
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'zoom-in': 'zoom-in 10s infinite',
      },
      borderWidth: {
        'dotted': '1px' // Custom width for dotted border
      },
      screens: {
        'custom_sm': '531px',
      },
    },
  },
  plugins: [],
};
