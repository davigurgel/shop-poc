import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS, USER_ID } from '../constants/keys'

const getCart = async () => {
  const response = await api.get(`${API_ROUTES.cart}/user/${USER_ID}`)

  return response.data
}

export const useGetCart = () => {
  return useQuery({
    queryKey: [KEYS.cart],
    queryFn: () => getCart(),
  })
}
