"use client";

import { useMemo, useState } from "react";

export default function RRCalculator() {
  const [entry, setEntry] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [takeProfit, setTakeProfit] = useState("");

  const ratio = useMemo(() => {
    const e = Number(entry);
    const sl = Number(stopLoss);
    const tp = Number(takeProfit);

    if (!e || !sl || !tp) return null;

    const risk = Math.abs(e - sl);
    const reward = Math.abs(tp - e);

    if (risk === 0) return null;

    return (reward / risk).toFixed(2);
  }, [entry, stopLoss, takeProfit]);

  return (
    <div className="rounded-xl border p-6 my-8">
      <h3 className="text-xl font-semibold mb-6">
        Risk / Reward Calculator
      </h3>

      <div className="grid gap-4 md:grid-cols-3">
        <input
          type="number"
          placeholder="Entry"
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Stop Loss"
          value={stopLoss}
          onChange={(e) => setStopLoss(e.target.value)}
          className="border rounded-lg p-3"
        />

        <input
          type="number"
          placeholder="Take Profit"
          value={takeProfit}
          onChange={(e) => setTakeProfit(e.target.value)}
          className="border rounded-lg p-3"
        />
      </div>

      {ratio && (
        <div className="mt-6 text-lg font-bold">
          Risk : Reward = 1 : {ratio}
        </div>
      )}
    </div>
  );
}
