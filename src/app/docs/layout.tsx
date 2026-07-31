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

      <div className="min-h-screen">
        <div className="flex pt-0">
          <div className="fixed left-0 top-16 hidden h-[calc(100vh-4rem)] w-64 border-r border-white/10 lg:block">
            <SidebarLeft />
          </div>

          <main className="flex-1 min-w-0 overflow-y-auto lg:ml-64 xl:mr-64">
            <article
              className="
                prose
                dark:prose-invert
                mx-auto
                w-full
                max-w-4xl
                py-6
                px-4
                sm:px-6
                lg:px-8
                lg:py-10
              "
            >
              {children}
            </article>
          </main>

          <div className="fixed right-0 top-16 hidden h-[calc(100vh-4rem)] w-64 border-l border-white/10 xl:block">
            <SidebarRight />
          </div>
        </div>
      </div>
    </>
  );
}