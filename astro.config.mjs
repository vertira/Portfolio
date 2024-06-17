import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import compressor from "astro-compressor";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://grala-portfolio.vercel.app",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [
    tailwind(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    react(),
  ],
  output: "static",
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
  adapter: vercelStatic(),
});
