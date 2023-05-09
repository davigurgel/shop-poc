import { ProductProps } from './ProductsProps'

export type CartProps = {
  id: number
  userid: number
  date: string
  products: ProductProps[]
}
