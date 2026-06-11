import Navbar from "@/components/docs/navbar";
import Sidebar from "@/components/docs/sidebar";
import ReadingProgress from "@/components/docs/reading-progress";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ReadingProgress />

      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1">
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
      </div>
    </>
  );
}