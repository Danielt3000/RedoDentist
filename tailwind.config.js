/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      backgroundImage: {
        heroVideo: "url('./assets/videoBack.mp4')",
      },
      colors: {
        back: "rgba(0, 0, 0, 0.287)",
      },
      screens: {
        sd: "550px",
        xs: "450px",
        m3: "800px",
      },
    },
  },
};
