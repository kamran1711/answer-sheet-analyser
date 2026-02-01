import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { exam: 'Exam 1', score: 72 },
  { exam: 'Exam 2', score: 78 },
  { exam: 'Exam 3', score: 75 },
  { exam: 'Exam 4', score: 82 },
  { exam: 'Exam 5', score: 88 },
  { exam: 'Exam 6', score: 85 },
];

export function TrendLineChart() {
  return (
    <div className="chart-container">
      <h3 className="text-lg font-semibold text-foreground mb-4">Performance Trend</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="exam" tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <YAxis domain={[0, 100]} tick={{ fill: 'hsl(var(--muted-foreground))' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="hsl(var(--accent))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, fill: 'hsl(var(--accent))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
