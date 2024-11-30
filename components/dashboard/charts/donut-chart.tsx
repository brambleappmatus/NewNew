'use client';

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { chartConfig } from '@/lib/chart-config';
import { DeliveryStatus } from '@/lib/types';

interface DonutChartProps {
  data: DeliveryStatus[];
}

const defaultProps = {
  margin: chartConfig.margins,
  pie: {
    cx: "50%",
    cy: "50%",
    innerRadius: 60,
    outerRadius: 80,
    paddingAngle: 5,
    dataKey: "value",
    startAngle: 90,
    endAngle: -270,
    minAngle: 15
  }
};

export function DeliveryDonutChart({ data }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart margin={defaultProps.margin}>
        <Pie
          data={data}
          {...defaultProps.pie}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${entry.name}`} 
              fill={chartConfig.colors[index % chartConfig.colors.length]}
              stroke="none"
            />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={chartConfig.tooltip.contentStyle}
          formatter={(value: number, name: string) => [value.toLocaleString(), name]}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}