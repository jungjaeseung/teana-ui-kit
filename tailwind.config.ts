import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "background-body": "#f2f4f7",
        "components-main-nav-nav-button-bg-hover": "#1018280a",
        "components-main-nav-nav-button-bg-active": "#fcfcfd",
      },
      textColor: {
        "components-main-nav-nav-button-text": "#495464",
        "components-main-nav-nav-button-text-active": "#155aef",
        "primary-600": "rgb(21 94 239)",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, .05)",
      },
    },
  },
  plugins: [],
  safelist: [
    "w-[200px]",
    "w-[250px]",
    "w-[300px]",
    "text-sm",
    "text-[13px]",
    "text-[14px]",
  ],
};
export default config;
