const steps = [
  {
    title:"Learn",
    text:"Understand market structure and price action."
  },
  {
    title:"Analyze",
    text:"Find high probability trading opportunities."
  },
  {
    title:"Profit",
    text:"Execute with disciplined risk management."
  }
];

export default function LearnProcess() {
  return (
    <section className="py-32 bg-black text-white">

      <div className="container mx-auto">

        <h2 className="text-5xl font-bold text-center">
          The Trading Framework
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          {steps.map(step => (
            <div
              key={step.title}
              className="border border-zinc-800 p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold text-green-400">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
