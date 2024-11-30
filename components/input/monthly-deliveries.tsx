'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDeliveryStore } from '@/lib/stores/delivery-store';

export function MonthlyDeliveries() {
  const { monthlyDeliveries, updateMonthlyDelivery } = useDeliveryStore();

  const handleUpdateDelivery = (month: string, value: string) => {
    const numValue = parseInt(value) || 0;
    updateMonthlyDelivery(month, numValue);
  };

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Monthly Deliveries</CardTitle>
        <CardDescription>
          Update the number of deliveries for each month
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Month</TableHead>
              <TableHead>Total Deliveries</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {monthlyDeliveries.map((delivery) => (
              <TableRow key={delivery.name}>
                <TableCell>{delivery.name}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    value={delivery.total}
                    onChange={(e) =>
                      handleUpdateDelivery(delivery.name, e.target.value)
                    }
                    className="w-32"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}