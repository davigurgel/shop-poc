import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS } from '../constants/keys'

export const getProduct = async (id: number) => {
  const response = await api.get(`${API_ROUTES.product}/${id}`)

  return response.data
}

export const useGetSingleProduct = (id: number) => {
  return useQuery({
    queryKey: [KEYS.products, id],
    queryFn: () => getProduct(id),
  })
}
