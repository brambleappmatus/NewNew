'use client';

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { chartConfig } from '@/lib/chart-config';
import { MonthlyDelivery } from '@/lib/types';

interface LineChartProps {
  data: MonthlyDelivery[];
}

const defaultProps = {
  margin: chartConfig.margins,
  xAxis: {
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    stroke: 'hsl(var(--muted-foreground))',
    padding: { left: 10, right: 10 }
  },
  yAxis: {
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    stroke: 'hsl(var(--muted-foreground))',
    width: 40
  },
  line: {
    type: "monotone" as const,
    strokeWidth: 2,
    stroke: 'hsl(var(--primary))',
    dot: { strokeWidth: 2, r: 4 },
    activeDot: { r: 6 }
  }
};

export function DeliveryLineChart({ data }: LineChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data} margin={defaultProps.margin}>
        <XAxis 
          dataKey="name"
          {...defaultProps.xAxis}
          tickFormatter={String}
        />
        <YAxis 
          {...defaultProps.yAxis}
          tickFormatter={String}
        />
        <Tooltip 
          contentStyle={chartConfig.tooltip.contentStyle}
          formatter={(value: number) => [value.toLocaleString(), 'Deliveries']}
        />
        <Line 
          dataKey="total"
          {...defaultProps.line}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}