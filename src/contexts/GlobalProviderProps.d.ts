import { UseQueryResult } from '@tanstack/react-query'
import { ProductProps } from '../@types/ProductsProps'

export type GlobalProviderProps = {
  products: UseQueryResult<ProductProps[] | null>
  categories: UseQueryResult<string[]>
  setFilterSlug: (value: string | null) => void
  setOrderBy: (value: string | null) => void
  handleAddCart: (value: ProductProps) => void
  orderBy: string | null
  userCart: ProductProps[]
  handleUpdateCartItemQuantity: (productId: number, value: number) => void
  handleDeleteCartItem: (productId: number) => void
}
