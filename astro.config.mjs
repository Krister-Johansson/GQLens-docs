// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://docs.gqlens.com",
  integrations: [
    starlight({
      title: "GQLens",
      sidebar: [
        { label: "Introduction", slug: "" },
        { label: "Getting Started", slug: "getting-started" },
        { label: "Connect Your Tools", slug: "connect" },
        { label: "CI / API", slug: "ci-api" },
      ],
    }),
  ],
});
