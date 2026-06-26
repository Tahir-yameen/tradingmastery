export default function Transformation() {
 return (
  <section className="py-32 bg-zinc-950 text-white">

   <div className="container mx-auto">

    <h2 className="text-center text-5xl font-bold">
      Losing Trader vs Professional Trader
    </h2>

    <div className="grid md:grid-cols-2 gap-12 mt-20">

      <div className="border border-red-500 p-8 rounded-xl">

        <h3 className="text-3xl font-bold text-red-400">
          Losing Trader
        </h3>

        <ul className="space-y-3 mt-8">
          <li>Overtrading</li>
          <li>No Journal</li>
          <li>Emotional Decisions</li>
          <li>No Risk Plan</li>
        </ul>

      </div>

      <div className="border border-green-500 p-8 rounded-xl">

        <h3 className="text-3xl font-bold text-green-400">
          Professional Trader
        </h3>

        <ul className="space-y-3 mt-8">
          <li>Systematic Entries</li>
          <li>Defined Risk</li>
          <li>Trading Journal</li>
          <li>Consistent Process</li>
        </ul>

      </div>

    </div>

   </div>

  </section>
 );
}
