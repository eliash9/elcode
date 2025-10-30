import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

/** @type {import('astro').AstroUserConfig} */
export default {
  output: "static",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    mdx(),
  ],
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
};

