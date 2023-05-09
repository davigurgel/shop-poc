import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'

import { GlobalProviderProps } from './GlobalProviderProps'
import { useGetProducts } from '../hooks/useGetProducts'
import { useGetCategories } from '../hooks/useGetCategories'
import { ProductProps } from '../@types/ProductsProps'

export const GlobalContext = createContext({} as GlobalProviderProps)

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [userCart, setUserCart] = useState<ProductProps[]>([])
  const [filterSlug, setFilterSlug] = useState<string | null>(null)
  const [orderBy, setOrderBy] = useState<string | null>(null)
  const products = useGetProducts(filterSlug)
  const categories = useGetCategories()

  const handleAddCart = useCallback((cartItem: ProductProps) => {
    setUserCart((prevState) => {
      if (prevState.find((product) => product.id === cartItem.id)) {
        return prevState.map((product) => {
          if (product.id === cartItem.id) {
            return {
              ...product,
              quantity: product.quantity! + cartItem.quantity!,
            }
          }

          return product
        })
      }

      return [...prevState, cartItem]
    })
  }, [])

  const valuesContext = useMemo(
    () => ({
      products,
      categories,
      setFilterSlug,
      setOrderBy,
      orderBy,
      handleAddCart,
      userCart,
    }),
    [products, categories, orderBy, handleAddCart, userCart],
  )

  return (
    <GlobalContext.Provider value={valuesContext}>
      {children}
    </GlobalContext.Provider>
  )
}
