import { UseQueryResult } from '@tanstack/react-query'
import { ProductProps } from '../@types/ProductsProps'

export type GlobalProviderProps = {
  products: UseQueryResult<ProductProps[] | null>
  categories: UseQueryResult<string[]>
}
