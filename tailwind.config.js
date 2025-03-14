export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#495E57",
        secondary: "#F4CE14",
      },
      keyframes: {
        scaleIn: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
      animation: {
        scaleIn: "scaleIn 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
