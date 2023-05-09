import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS, USER_ID } from '../constants/keys'
import { ProductProps } from '../@types/ProductsProps'

const addCart = async (cart: ProductProps) => {
  const date = new Date()
  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date)
  const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(date)
  const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date)

  const body = JSON.stringify({
    userId: USER_ID,
    date: `${year}-${month}-${day}`,
    products: [cart],
  })

  const response = await api.post(`${API_ROUTES.cart}`, body)

  return response.data
}

export const useAddCart = () => {
  const queryClient = useQueryClient()

  return useMutation((cart: ProductProps) => addCart(cart), {
    onSuccess: async () => {
      await queryClient.invalidateQueries([KEYS.cart], {
        refetchType: 'active',
      })
    },
  })
}
