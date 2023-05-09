import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS } from '../constants/keys'

const getCategories = async () => {
  const response = await api.get(API_ROUTES.categories)

  return response.data
}

export const useGetCategories = () => {
  return useQuery({
    queryKey: [KEYS.categories],
    queryFn: () => getCategories(),
  })
}
