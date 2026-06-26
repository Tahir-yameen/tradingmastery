// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";

const withMDX = createMDX({
  options: {
    rehypePlugins: [
      "rehype-slug",
      ["rehype-autolink-headings", { behavior: "wrap" }],
    ],
  },
});

const nextConfig: NextConfig = {
    experimental: {
    mdxRs: true,
  },
  pageExtensions: ["ts", "tsx", "mdx"],
};

export default withMDX(nextConfig);