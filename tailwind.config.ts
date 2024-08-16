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
        "background-default-subtle": "#fcfcfd",
        "components-main-nav-nav-button-bg-hover": "#1018280a",
        "components-main-nav-nav-button-bg-active": "#fcfcfd",
        "divider-subtle": "#1018280a",
        "state-accent-active": "#155aef14",
      },
      textColor: {
        "components-main-nav-nav-button-text": "#495464",
        "components-main-nav-nav-button-text-active": "#155aef",
        "components-menu-item-text": "#495464",
        "components-menu-item-text-hover": "#354052",
        "primary-600": "rgb(21 94 239)",
        "text-accent": "#155aef",
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, .05)",
      },
      borderColor: {
        "divider-burn": "#1018280a",
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
    "w-fit",
    "grow",
    "px-2.5",
    "py-4",
    "p-4",
    "bg-emerald-100",
  ],
};
export default config;
