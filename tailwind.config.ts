import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center:true,
      padding:{
        default:"1rem",
        sm:"0"
      }
    },
    extend: {
      colors: {
        teal: "#38CABC",
        black: "#3A3333",
        gray: "#F4F2F3",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
