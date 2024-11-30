'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CourierPerformance } from '@/components/dashboard/courier-performance';

export function CourierPerformanceCard() {
  return (
    <Card className="shadow-md">
      <CardHeader className="space-y-10 space-x-10">
        <CardTitle>Courier Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <CourierPerformance />
      </CardContent>
    </Card>
  );
}