'use client';

import { useDeliveryStore as useCourierStore } from '@/lib/data';
import { useDeliveryStore } from '@/lib/stores/delivery-store';
import { calculateCourierStats } from '@/lib/stats-utils';
import { StatsCard } from './stats-card';

export function StatsCards() {
  const { couriers } = useCourierStore();
  const { monthlyDeliveries } = useDeliveryStore();
  const stats = calculateCourierStats(couriers);
  const totalDeliveries = monthlyDeliveries.reduce((sum, month) => sum + month.total, 0);

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <StatsCard
        title="Total Deliveries"
        value={totalDeliveries}
        change="+12% from last month"
      />
      <StatsCard
        title="Average Rating"
        value={stats.averageRating.toFixed(1)}
        change="+0.3 from last month"
      />
      <StatsCard
        title="On-Time Rate"
        value={`${stats.onTimeRate.toFixed(1)}%`}
        change="+2.1% from last month"
      />
    </div>
  );
}