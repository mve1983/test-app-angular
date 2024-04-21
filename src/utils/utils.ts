export function formatPrice(price: string | number): string {
  return Number(price).toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR',
  });
}
