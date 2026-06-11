import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
<section className="py-32 text-center">
  <h1
    className="
      text-6xl
      font-extrabold
      mb-6
    "
  >
    Master Trading
    Like a Professional
  </h1>

  <p
    className="
      text-xl
      text-muted-foreground
      max-w-3xl
      mx-auto
      mb-8
    "
  >
    Learn market structure,
    technical analysis,
    risk management,
    psychology and
    professional strategies.
  </p>

  <Link
    href="/docs/welcome"
    className="
      bg-blue-600
      text-white
      px-8
      py-4
      rounded-lg
    "
  >
    Start Learning
  </Link>
</section>

    </main>
  );
}
