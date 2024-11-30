export const monthlyDeliveryData = [
  { name: 'Jan', total: 167 },
  { name: 'Feb', total: 145 },
  { name: 'Mar', total: 189 },
  { name: 'Apr', total: 201 },
  { name: 'May', total: 178 },
  { name: 'Jun', total: 239 },
  { name: 'Jul', total: 242 },
  { name: 'Aug', total: 301 },
  { name: 'Sep', total: 224 },
  { name: 'Oct', total: 189 },
  { name: 'Nov', total: 278 },
  { name: 'Dec', total: 459 },
];

export const deliveryStatusData = [
  { name: 'Delivered', value: 845 },
  { name: 'In Transit', value: 284 },
  { name: 'Pending', value: 119 },
];

export function calculateTotalDeliveries() {
  return monthlyDeliveryData.reduce((sum, month) => sum + month.total, 0);
}