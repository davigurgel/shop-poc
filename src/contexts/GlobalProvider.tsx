import { createContext, ReactNode, useMemo, useState } from 'react'

import { GlobalProviderProps } from './GlobalProviderProps'
import { useGetProducts } from '../hooks/useGetProducts'
import { useGetCategories } from '../hooks/useGetCategories'

export const GlobalContext = createContext({} as GlobalProviderProps)

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const [filterSlug, setFilterSlug] = useState<string | null>(null)
  const [orderBy, setOrderBy] = useState<string | null>(null)
  const products = useGetProducts(filterSlug)
  const categories = useGetCategories()

  const valuesContext = useMemo(
    () => ({
      products,
      categories,
      setFilterSlug,
      setOrderBy,
      orderBy,
    }),
    [products, categories, orderBy],
  )

  return (
    <GlobalContext.Provider value={valuesContext}>
      {children}
    </GlobalContext.Provider>
  )
}
