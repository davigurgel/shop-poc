import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS } from '../constants/keys'

export const getRelatedProducts = async (slug: string | null) => {
  const response = await api.get(`${API_ROUTES.productsByCategory}/${slug}`)

  return response.data
}

export const useGetRelatedProducts = (slug: string | null = null) => {
  return useQuery({
    queryKey: [KEYS.products, slug],
    queryFn: () => slug !== null && getRelatedProducts(slug),
  })
}
