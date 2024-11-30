'use client';

import { useDeliveryStore } from '@/lib/data';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function CourierPerformance() {
  const { couriers } = useDeliveryStore();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Courier ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead className="text-right">Total Deliveries</TableHead>
          <TableHead className="text-right">Average Rating</TableHead>
          <TableHead className="text-right">On-Time Rate (%)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {couriers.map((courier) => (
          <TableRow key={courier.id}>
            <TableCell>{courier.id}</TableCell>
            <TableCell>{courier.name}</TableCell>
            <TableCell className="text-right">{courier.deliveries}</TableCell>
            <TableCell className="text-right">{courier.rating}</TableCell>
            <TableCell className="text-right">{courier.onTimeRate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}