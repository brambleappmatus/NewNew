import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Courier, Delivery } from './types';

interface DeliveryStore {
  couriers: Courier[];
  deliveries: Delivery[];
  addCourier: (courier: Omit<Courier, 'id'>) => void;
  updateCourier: (id: string, courier: Partial<Courier>) => void;
  deleteCourier: (id: string) => void;
  addDelivery: (delivery: Omit<Delivery, 'id'>) => void;
}

export const useDeliveryStore = create<DeliveryStore>()(
  persist(
    (set) => ({
      couriers: [
        {
          id: 'C001',
          name: 'John Smith',
          deliveries: 156,
          rating: 4.8,
          onTimeRate: 97.4,
        },
        {
          id: 'C002',
          name: 'Sarah Johnson',
          deliveries: 142,
          rating: 4.9,
          onTimeRate: 98.2,
        },
      ],
      deliveries: [
        {
          id: 'D001',
          courierId: 'C001',
          date: new Date().toISOString(),
          status: 'delivered',
          rating: 4.8,
          onTime: true,
        },
        {
          id: 'D002',
          courierId: 'C002',
          date: new Date().toISOString(),
          status: 'delivered',
          rating: 4.9,
          onTime: true,
        },
      ],
      addCourier: (courier) =>
        set((state) => ({
          couriers: [
            ...state.couriers,
            {
              ...courier,
              id: `C${String(state.couriers.length + 1).padStart(3, '0')}`,
            },
          ],
        })),
      updateCourier: (id, updatedCourier) =>
        set((state) => ({
          couriers: state.couriers.map((courier) =>
            courier.id === id ? { ...courier, ...updatedCourier } : courier
          ),
        })),
      deleteCourier: (id) =>
        set((state) => ({
          couriers: state.couriers.filter((courier) => courier.id !== id),
        })),
      addDelivery: (delivery) =>
        set((state) => ({
          deliveries: [
            ...state.deliveries,
            {
              ...delivery,
              id: `D${String(state.deliveries.length + 1).padStart(3, '0')}`,
            },
          ],
        })),
    }),
    {
      name: 'delivery-store',
    }
  )
);