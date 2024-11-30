'use client';

import { DeliveryDonutChart } from './charts/donut-chart';
import { deliveryStatusData } from '@/lib/chart-data';

export function DeliveryStatus() {
  return <DeliveryDonutChart data={deliveryStatusData} />;
}