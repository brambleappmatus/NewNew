'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Overview } from '@/components/dashboard/overview';
import { DeliveryStatus } from '@/components/dashboard/delivery-status';

export function DeliveryCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-4 shadow-md">
        <CardHeader className="space-y-2">
          <CardTitle>Delivery Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
      <Card className="col-span-3 shadow-md">
        <CardHeader className="space-y-2">
          <CardTitle>Delivery Status</CardTitle>
        </CardHeader>
        <CardContent>
          <DeliveryStatus />
        </CardContent>
      </Card>
    </div>
  );
}