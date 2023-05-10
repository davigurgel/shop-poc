import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

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
        const newState = prevState.map((product) => {
          if (product.id === cartItem.id) {
            return {
              ...product,
              quantity: product.quantity! + cartItem.quantity!,
            }
          }

          return product
        })

        localStorage.setItem('shopPocCart', JSON.stringify(newState))

        return newState
      }

      localStorage.setItem(
        'shopPocCart',
        JSON.stringify([...prevState, cartItem]),
      )

      return [...prevState, cartItem]
    })
  }, [])

  const handleUpdateCartItemQuantity = useCallback(
    (productId: number, value: number) => {
      setUserCart((prevState) => {
        const newState = prevState.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: value }
          }

          return item
        })

        localStorage.setItem('shopPocCart', JSON.stringify(newState))

        return newState
      })
    },
    [],
  )

  const handleDeleteCartItem = useCallback((productId: number) => {
    setUserCart((prevState) => {
      const newState = prevState.filter((item) => item.id !== productId)

      localStorage.setItem('shopPocCart', JSON.stringify(newState))

      return newState
    })
  }, [])

  useEffect(() => {
    const storage = localStorage.getItem('shopPocCart')

    if (storage) {
      setUserCart(JSON.parse(storage))
    } else {
      setUserCart([])
    }
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
      handleUpdateCartItemQuantity,
      handleDeleteCartItem,
    }),
    [
      products,
      categories,
      orderBy,
      handleAddCart,
      userCart,
      handleUpdateCartItemQuantity,
      handleDeleteCartItem,
    ],
  )

  return (
    <GlobalContext.Provider value={valuesContext}>
      {children}
    </GlobalContext.Provider>
  )
}
