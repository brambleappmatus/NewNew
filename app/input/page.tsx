'use client';

import { useState } from 'react';
import { useDeliveryStore } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { MonthlyDeliveries } from '@/components/input/monthly-deliveries';

export default function InputPage() {
  const { couriers, addCourier, updateCourier, deleteCourier } = useDeliveryStore();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newCourier, setNewCourier] = useState({
    name: '',
    deliveries: 0,
    rating: 0,
    onTimeRate: 0,
  });

  const handleAddCourier = () => {
    if (!newCourier.name) {
      toast.error('Please enter a courier name');
      return;
    }
    addCourier(newCourier);
    setNewCourier({
      name: '',
      deliveries: 0,
      rating: 0,
      onTimeRate: 0,
    });
    setIsAddDialogOpen(false);
    toast.success('Courier added successfully');
  };

  const handleUpdateCourier = (id: string, field: string, value: string) => {
    const numValue = field !== 'name' ? Number(value) : value;
    updateCourier(id, { [field]: numValue });
  };

  const handleDeleteCourier = (id: string) => {
    deleteCourier(id);
    toast.success('Courier deleted successfully');
  };

  return (
    <main className="flex-1 transition-all duration-300">
      <div className="mx-auto max-w-[2000px] space-y-8 p-8 lg:pl-[calc(64px+2rem)]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Input Data</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>Add Courier</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Courier</DialogTitle>
                <DialogDescription>
                  Enter the details for the new courier.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={newCourier.name}
                    onChange={(e) =>
                      setNewCourier({ ...newCourier, name: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deliveries">Deliveries</Label>
                  <Input
                    id="deliveries"
                    type="number"
                    value={newCourier.deliveries}
                    onChange={(e) =>
                      setNewCourier({
                        ...newCourier,
                        deliveries: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="rating">Rating</Label>
                  <Input
                    id="rating"
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={newCourier.rating}
                    onChange={(e) =>
                      setNewCourier({
                        ...newCourier,
                        rating: Number(e.target.value),
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="onTimeRate">On-Time Rate (%)</Label>
                  <Input
                    id="onTimeRate"
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={newCourier.onTimeRate}
                    onChange={(e) =>
                      setNewCourier({
                        ...newCourier,
                        onTimeRate: Number(e.target.value),
                      })
                    }
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddCourier}>Add Courier</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Courier Data</CardTitle>
            <CardDescription>
              Manage courier information and performance metrics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Courier ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Deliveries</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>On-Time Rate (%)</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {couriers.map((courier) => (
                  <TableRow key={courier.id}>
                    <TableCell>{courier.id}</TableCell>
                    <TableCell>
                      <Input
                        value={courier.name}
                        onChange={(e) =>
                          handleUpdateCourier(courier.id, 'name', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={courier.deliveries}
                        onChange={(e) =>
                          handleUpdateCourier(
                            courier.id,
                            'deliveries',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={courier.rating}
                        onChange={(e) =>
                          handleUpdateCourier(courier.id, 'rating', e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        value={courier.onTimeRate}
                        onChange={(e) =>
                          handleUpdateCourier(
                            courier.id,
                            'onTimeRate',
                            e.target.value
                          )
                        }
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDeleteCourier(courier.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <MonthlyDeliveries />
      </div>
    </main>
  );
}