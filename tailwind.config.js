module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "main-pattern": "url('~/assets/bg-12.jpeg')",
        "sekilas-pattern": "url('~/assets/sample-3.jpeg')",
        "banner-1": "url('~/assets/banner1.png')",
        "banner-2": "url('~/assets/banner2.jpeg')",
      }),
    },
    fontFamily: {
      thavi: ["Taviraj", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
