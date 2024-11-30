import { Courier } from './types';

export function calculateCourierStats(couriers: Courier[]) {
  if (couriers.length === 0) return { averageRating: 0, onTimeRate: 0 };

  const totalRating = couriers.reduce((sum, courier) => sum + courier.rating, 0);
  const averageRating = totalRating / couriers.length;

  const totalOnTimeRate = couriers.reduce((sum, courier) => sum + courier.onTimeRate, 0);
  const averageOnTimeRate = totalOnTimeRate / couriers.length;

  return {
    averageRating,
    onTimeRate: averageOnTimeRate
  };
}