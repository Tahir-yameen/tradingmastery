// import Navbar from "@/components/docs/navbar";
// import SidebarRight from "@/components/docs/sidebarright";
// import ReadingProgress from "@/components/docs/reading-progress";
// import SidebarLeft from "@/components/docs/sidebarleft";

// export default function DocsLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <ReadingProgress />

//       <Navbar />

//       <div className="flex">
//         <SidebarLeft />

//         <main className="flex-1">
//           <article
//             className="
//               prose
//               dark:prose-invert
//               max-w-4xl
//               mx-auto
//               py-10
//               px-6
//             "
//           >
//             {children}
//           </article>
//         </main>
//         <SidebarRight />
//       </div>
//     </>
//   );
// }

import SidebarRight from "@/components/docs/sidebarright";
import ReadingProgress from "@/components/docs/reading-progress";
import SidebarLeft from "@/components/docs/sidebarleft";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadingProgress />

      {/* MAIN LAYOUT */}
      <div className="flex min-h-screen">
        
        {/* LEFT SIDEBAR */}
        <SidebarLeft />

        {/* MAIN CONTENT */}
        <main className="flex-1 min-w-0">
          <article
            className="
              prose
              dark:prose-invert
              max-w-4xl
              mx-auto
              py-10
              px-6
            "
          >
            {children}
          </article>
        </main>

        {/* RIGHT SIDEBAR */}
        <SidebarRight />
      </div>

    </>
  );
}