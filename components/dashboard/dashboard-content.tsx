'use client';

import { StatsCards } from '@/components/dashboard/stats-cards';
import { DeliveryCharts } from '@/components/dashboard/delivery-charts';
import { CourierPerformanceCard } from '@/components/dashboard/courier-performance-card';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';

export function DashboardContent() {
  return (
    <div className="flex flex-col gap-8">
      <DashboardHeader />
      <StatsCards />
      <DeliveryCharts />
      <CourierPerformanceCard />
    </div>
  );
}