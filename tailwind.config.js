/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        lg: "10px", // Customize the blur amount here
      },
    },
  },
  variants: {
    backdropBlur: ["responsive"],
  },
  plugins: [],
};
