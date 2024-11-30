export interface Courier {
  id: string;
  name: string;
  deliveries: number;
  rating: number;
  onTimeRate: number;
}

export interface Delivery {
  id: string;
  courierId: string;
  date: string;
  status: 'pending' | 'in-transit' | 'delivered';
  rating?: number;
  onTime: boolean;
}

export interface MonthlyDelivery {
  name: string;
  total: number;
}

export interface DeliveryStatus {
  name: string;
  value: number;
}