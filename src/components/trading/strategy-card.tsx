interface Props {
  title: string;
  timeframe: string;
  difficulty: string;
  risk: string;
}

export default function StrategyCard({
  title,
  timeframe,
  difficulty,
  risk,
}: Props) {
  return (
    <div className="rounded-xl border p-6 my-6">
      <h3 className="text-xl font-bold mb-4">
        {title}
      </h3>

      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <strong>Timeframe</strong>
          <p>{timeframe}</p>
        </div>

        <div>
          <strong>Difficulty</strong>
          <p>{difficulty}</p>
        </div>

        <div>
          <strong>Risk</strong>
          <p>{risk}</p>
        </div>
      </div>
    </div>
  );
}
