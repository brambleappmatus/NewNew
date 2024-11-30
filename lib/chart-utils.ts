import { type ChartConfig } from '@/components/ui/chart';

export const chartConfig: ChartConfig = {
  delivered: {
    label: 'Delivered',
    theme: {
      light: 'hsl(var(--chart-1))',
      dark: 'hsl(var(--chart-1))',
    },
  },
  inTransit: {
    label: 'In Transit',
    theme: {
      light: 'hsl(var(--chart-2))',
      dark: 'hsl(var(--chart-2))',
    },
  },
  pending: {
    label: 'Pending',
    theme: {
      light: 'hsl(var(--chart-3))',
      dark: 'hsl(var(--chart-3))',
    },
  },
};

export const chartDefaults = {
  tooltip: {
    contentStyle: {
      backgroundColor: 'hsl(var(--background))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      padding: '12px',
    },
  },
  colors: {
    primary: 'hsl(var(--primary))',
    muted: 'hsl(var(--muted))',
    border: 'hsl(var(--border))',
  },
};

export const formatChartValue = (value: number): string => {
  return value.toLocaleString();
};

export const formatChartDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};