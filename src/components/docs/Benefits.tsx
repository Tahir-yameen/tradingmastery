const benefits = [
 "Price Action Mastery",
 "Trading Psychology",
 "Risk Management",
 "Market Structure",
 "Trading Journal",
 "Professional Strategies"
];

export default function Benefits() {
 return (
  <section className="py-32 bg-black">

   <div className="container mx-auto">

    <h2 className="text-center text-white text-5xl font-bold">
      Why This Book Is Different
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {benefits.map(item => (
        <div
          key={item}
          className="border border-zinc-800 p-8 rounded-2xl"
        >
          <h3 className="text-green-400 text-xl font-bold">
            {item}
          </h3>
        </div>
      ))}

    </div>

   </div>

  </section>
 );
}
