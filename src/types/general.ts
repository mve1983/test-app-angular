export type Product = {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {rate: number, count: number},
  title: string
}

export interface CartProduct extends Product {
  quantity: number
}