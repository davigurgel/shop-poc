import { createContext, ReactNode, useMemo } from 'react'

import { GlobalProviderProps } from './GlobalProviderProps'
import { useGetProducts } from '../hooks/useGetProducts'
import { useGetCategories } from '../hooks/useGetCategories'

export const GlobalContext = createContext({} as GlobalProviderProps)

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const products = useGetProducts(null)
  const categories = useGetCategories()

  const valuesContext = useMemo(
    () => ({
      products,
      categories,
    }),
    [products, categories],
  )

  return (
    <GlobalContext.Provider value={valuesContext}>
      {children}
    </GlobalContext.Provider>
  )
}
