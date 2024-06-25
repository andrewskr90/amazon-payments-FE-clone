export type ShopConfig = {
  id: number;
  name: string;
  formattedName: string;
  currency: Currency;
}
export type Currency = 'USD' | 'GBP'
export type Item = {
    id: number;
    name: string;
    storeId: number;
    retail: number;
    quantity: number;
    img: { src: string, alt: string };
}