import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { parameter: 'Accuracy', score: 85, maxScore: 100 },
  { parameter: 'Grammar', score: 78, maxScore: 100 },
  { parameter: 'Relevance', score: 92, maxScore: 100 },
  { parameter: 'Clarity', score: 88, maxScore: 100 },
  { parameter: 'Structure', score: 75, maxScore: 100 },
];

export function PerformanceBarChart() {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-foreground mb-4">Parameter-wise Evaluation</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis dataKey="parameter" type="category" tick={{ fill: 'hsl(var(--muted-foreground))' }} width={80} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="score" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
