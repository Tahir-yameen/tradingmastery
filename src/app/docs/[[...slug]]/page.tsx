// // import { notFound } from "next/navigation";
// // import { getDocBySlug } from "@/lib/mdx";

// // export default async function DocPage({
// //   params,
// // }: {
// //   params: Promise<{
// //     slug?: string[];
// //   }>;
// // }) {
// //   const { slug } = await params;

// //   const current =
// //     slug?.[0] || "welcome";

// //   const doc =
// //     getDocBySlug(current);

// //   if (!doc) {
// //     notFound();
// //   }

// //   return (
// //     <article className="max-w-4xl mx-auto py-12 px-8">
// //       <h1 className="text-5xl font-bold mb-8">
// //         {doc.frontmatter.title}
// //       </h1>

// //       <div>
// //         MDX CONTENT HERE
// //       </div>
// //     </article>
// //   );
// // }

// // import { notFound } from "next/navigation";
// // import { MDXRemote } from "next-mdx-remote/rsc";
// // import { getDocBySlug } from "@/lib/mdx";
// // import { createMetadata } from "@/lib/seo";
// // import { useMDXComponents } from "@/components/docs/mdx-components";

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: Promise<{
// //     slug?: string[];
// //   }>;
// // }) {
// //   const { slug } = await params;

// //   const current = slug?.[0] || "welcome";

// //   const doc = getDocBySlug(current);

// //   if (!doc) {
// //     return {
// //       title: "Not Found",
// //       description: "Document not found",
// //     };
// //   }

// //   return createMetadata({
// //     title: doc.frontmatter.title,
// //     description: doc.frontmatter.description,
// //   });
// // }

// // export default async function DocPage({
// //   params,
// // }: {
// //   params: Promise<{
// //     slug?: string[];
// //   }>;
// // }) {
// //   const { slug } = await params;

// //   const current = slug?.[0] || "welcome";

// //   const doc = getDocBySlug(current);

// //   if (!doc) {
// //     notFound();
// //   }

// //   const components = useMDXComponents({});

// //   return (
// //     <article className="max-w-4xl mx-auto py-12 px-8">
// //       <h1 className="text-5xl font-bold mb-8">
// //         {doc.frontmatter.title}
// //       </h1>

// //       <MDXRemote source={doc.content} components={components} />
// //     </article>
// //   );
// // }

// import { notFound } from "next/navigation";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import { getDocBySlug } from "@/lib/mdx";
// import { createMetadata } from "@/lib/seo";
// import { useMDXComponents } from "@/components/docs/mdx-components";
// import { extractHeadings } from "@/lib/toc";
// import { TocProvider } from "@/context/toc-context";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{
//     slug?: string[];
//   }>;
// }) {
//   const { slug } = await params;

//   const current = slug?.[0] || "welcome";

//   const doc = getDocBySlug(current);

//   if (!doc) {
//     return {
//       title: "Not Found",
//       description: "Document not found",
//     };
//   }

//   return createMetadata({
//     title: doc.frontmatter.title,
//     description: doc.frontmatter.description,
//   });
// }

// export default async function DocPage({
//   params,
// }: {
//   params: Promise<{
//     slug?: string[];
//   }>;
// }) {
//   const { slug } = await params;

//   const current = slug?.[0] || "welcome";

//   const doc = getDocBySlug(current);

//   if (!doc) {
//     notFound();
//   }

//   const components = useMDXComponents({});

//   // ✅ EXTRACT HEADINGS FROM MDX CONTENT
//   const headings = extractHeadings(doc.content);

//   return (
//     <TocProvider headings={headings}>
//       <article className="max-w-4xl mx-auto py-12 px-8">
        
//         <h1 className="text-5xl font-bold mb-8">
//           {doc.frontmatter.title}
//         </h1>

//         <MDXRemote source={doc.content} components={components} />

//       </article>
//     </TocProvider>
//   );
// }

// import { notFound } from "next/navigation";
// import { MDXRemote } from "next-mdx-remote/rsc";
// import { getDocBySlug } from "@/lib/mdx";
// import { createMetadata } from "@/lib/seo";
// import { useMDXComponents } from "@/components/docs/mdx-components";
// import { extractHeadings } from "@/lib/toc";
// import { TocProvider } from "@/context/toc-context";

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{
//     slug?: string[];
//   }>;
// }) {
//   const { slug } = await params;

//   const current = slug?.[0] || "welcome";

//   const doc = getDocBySlug(current);

//   if (!doc) {
//     return {
//       title: "Not Found",
//       description: "Document not found",
//     };
//   }

//   return createMetadata({
//     title: doc.frontmatter.title,
//     description: doc.frontmatter.description,
//   });
// }

// export default async function DocPage({
//   params,
// }: {
//   params: Promise<{
//     slug?: string[];
//   }>;
// }) {
//   const { slug } = await params;

//   const current = slug?.[0] || "welcome";

//   const doc = getDocBySlug(current);

//   if (!doc) {
//     notFound();
//   }

//   const components = useMDXComponents({});

//   // ✅ EXTRACT HEADINGS FROM MDX CONTENT
//   const headings = extractHeadings(doc.content);

//   return (
//     <TocProvider headings={headings}>
//       <article className="max-w-4xl mx-auto py-12 px-8">
        
//         <h1 className="text-5xl font-bold mb-8">
//           {doc.frontmatter.title}
//         </h1>

//         <MDXRemote source={doc.content} components={components} />

//       </article>
//     </TocProvider>
//   );
// }

import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getDocBySlug } from "@/lib/mdx";
import { createMetadata } from "@/lib/seo";
import { useMDXComponents } from "@/components/docs/mdx-components";
import { extractHeadings } from "@/lib/toc";
import { TocProvider } from "@/context/toc-context";

// ✅ METADATA
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug?: string[];
  }>;
}) {
  const { slug } = await params;

  const current = slug?.[0] || "welcome";

  const doc = getDocBySlug(current);

  if (!doc) {
    return {
      title: "Not Found",
      description: "Document not found",
    };
  }

  return createMetadata({
    title: doc.frontmatter.title,
    description: doc.frontmatter.description,
  });
}

// ✅ PAGE
export default async function DocPage({
  params,
}: {
  params: Promise<{
    slug?: string[];
  }>;
}) {
  const { slug } = await params;

  const current = slug?.[0] || "welcome";

  const doc = getDocBySlug(current);

  if (!doc) {
    notFound();
  }

  const components = useMDXComponents({});

  // ✅ Extract headings for TOC
  const headings = extractHeadings(doc.content);

  return (
    <TocProvider headings={headings}>
      <article className="max-w-4xl mx-auto py-12 px-8">
        
        <h1 className="text-5xl font-bold mb-8">
          {doc.frontmatter.title}
        </h1>

        <MDXRemote source={doc.content} components={components} />

      </article>
    </TocProvider>
  );
}