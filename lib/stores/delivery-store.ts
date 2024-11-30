import { create } from 'zustand';
import { monthlyDeliveryData } from '../chart-data';
import { MonthlyDelivery } from '../types';

interface DeliveryStore {
  monthlyDeliveries: MonthlyDelivery[];
  updateMonthlyDelivery: (month: string, total: number) => void;
}

export const useDeliveryStore = create<DeliveryStore>((set) => ({
  monthlyDeliveries: monthlyDeliveryData,
  updateMonthlyDelivery: (month, total) =>
    set((state) => ({
      monthlyDeliveries: state.monthlyDeliveries.map((delivery) =>
        delivery.name === month ? { ...delivery, total } : delivery
      ),
    })),
}));