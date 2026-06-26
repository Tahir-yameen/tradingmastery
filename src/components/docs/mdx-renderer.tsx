// "use client";

// import { MDXRemote } from "next-mdx-remote";
// import rehypeSlug from "rehype-slug";
// import { useMDXComponents } from "./mdx-components";

// export default function MDXRenderer({ content }: any) {
//   return (
//     <MDXRemote
//       source={content}
//       components={useMDXComponents({})}
//       options={{
//         mdxOptions: {
//           rehypePlugins: [rehypeSlug], // ✅ AUTO IDs
//         },
//       }}
//     />
//   );
// }

// "use client";

// import { MDXRemote } from "next-mdx-remote";
// import rehypeSlug from "rehype-slug";
// import { useMDXComponents } from "./mdx-components";

// export default function MDXRenderer({ content }: { content: string }) {
//   return (
//     <MDXRemote
//       source={content}
//       components={useMDXComponents({})}
//       options={{
//         mdxOptions: {
//           rehypePlugins: [rehypeSlug],
//         },
//       }}
//     />
//   );
// }

import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { useMDXComponents } from "./mdx-components";

export default function MDXRenderer({ content }: { content: string }) {
  if (!content) return null;

  return (
    <MDXRemote
      source={content}
      components={useMDXComponents({})}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeSlug],
        },
      }}
    />
  );
}