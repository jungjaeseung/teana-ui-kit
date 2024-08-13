import type { Preview } from "@storybook/react";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "main-background-color",
      values: [
        {
          name: "main-background-color",
          value: "#f2f4f7",
        },
      ],
    },
  },
};

export default preview;
