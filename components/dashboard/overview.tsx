'use client';

import { DeliveryLineChart } from './charts/line-chart';
import { useDeliveryStore } from '@/lib/stores/delivery-store';

export function Overview() {
  const { monthlyDeliveries } = useDeliveryStore();
  return <DeliveryLineChart data={monthlyDeliveries} />;
}