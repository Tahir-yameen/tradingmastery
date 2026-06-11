"use client";

import { useMemo, useState } from "react";

export default function CompoundGrowthCalculator() {
  const [capital, setCapital] = useState("");
  const [monthly, setMonthly] = useState("");
  const [months, setMonths] = useState("");

  const result = useMemo(() => {
    const c = Number(capital);
    const m = Number(monthly);
    const mo = Number(months);

    if (!c || !m || !mo) return null;

    return (
      c *
      Math.pow(1 + m / 100, mo)
    ).toFixed(2);
  }, [capital, monthly, months]);

  return (
    <div className="rounded-xl border p-6 my-8">
      <h3 className="text-xl font-semibold mb-6">
        Compound Growth Calculator
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="number"
          placeholder="Starting Capital"
          value={capital}
          onChange={(e) => setCapital(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Monthly Return %"
          value={monthly}
          onChange={(e) => setMonthly(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Months"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="border rounded-lg p-3"
        />
      </div>

      {result && (
        <div className="mt-6 text-lg font-bold">
          Future Value: ${result}
        </div>
      )}
    </div>
  );
}
