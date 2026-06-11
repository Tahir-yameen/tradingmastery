import Link from "next/link";

export default function Pagination({
  previous,
  next,
}: any) {
  return (
    <div className="flex justify-between mt-20">
      {previous ? (
        <Link
          href={`/docs/${previous.slug}`}
        >
          ← {previous.title}
        </Link>
      ) : (
        <div />
      )}

      {next && (
        <Link
          href={`/docs/${next.slug}`}
        >
          {next.title} →
        </Link>
      )}
    </div>
  );
}
