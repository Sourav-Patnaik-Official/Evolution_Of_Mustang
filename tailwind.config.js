/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        lg: "10px", // Customize the blur amount here
      },
      screens: {
        '1md': '992px',
      },
    },
  },
  variants: {
    backdropBlur: ["responsive"],
  },
  plugins: [],
};
