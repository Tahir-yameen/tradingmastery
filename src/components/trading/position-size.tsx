"use client";

import { useMemo, useState } from "react";

export default function PositionSizeCalculator() {
  const [balance, setBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [stopLossPips, setStopLossPips] = useState("");

  const positionSize = useMemo(() => {
    const b = Number(balance);
    const r = Number(riskPercent);
    const sl = Number(stopLossPips);

    if (!b || !r || !sl) return null;

    const riskAmount = (b * r) / 100;

    return (riskAmount / sl).toFixed(2);
  }, [balance, riskPercent, stopLossPips]);

  return (
    <div className="rounded-xl border p-6 my-8">
      <h3 className="text-xl font-semibold mb-6">
        Position Size Calculator
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="number"
          placeholder="Account Balance"
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Risk %"
          value={riskPercent}
          onChange={(e) => setRiskPercent(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Stop Loss Pips"
          value={stopLossPips}
          onChange={(e) => setStopLossPips(e.target.value)}
          className="border rounded-lg p-3"
        />
      </div>

      {positionSize && (
        <div className="mt-6 text-lg font-bold">
          Position Size: {positionSize}
        </div>
      )}
    </div>
  );
}
