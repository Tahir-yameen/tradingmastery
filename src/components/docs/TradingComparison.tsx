export default function TraderComparison() {
  return (
    <section className="py-20 bg-zinc-950 text-white">

      <div className="container mx-auto">

        <h2 className="text-center text-5xl font-bold">
          Amateur vs Professional Trader
        </h2>

        <div className="text-left overflow-auto mt-12">

          <table className="w-full">

            <thead>
              <tr className="border-b border-zinc-700 text-zinc-400">
                <th>Feature</th>
                <th>Amateur</th>
                <th>Professional</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Risk Management</td>
                <td>Random</td>
                <td>Systematic</td>
              </tr>

              <tr>
                <td>Psychology</td>
                <td>Emotional</td>
                <td>Disciplined</td>
              </tr>

              <tr>
                <td>Trading Plan</td>
                <td>No</td>
                <td>Yes</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}
