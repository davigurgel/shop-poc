import { useQuery } from '@tanstack/react-query'
import { api } from '../services/api'
import { API_ROUTES } from '../constants/api-routes'
import { KEYS } from '../constants/keys'

export const getProducts = async (slug: string | null) => {
  const checkedSlug = slug === 'all' ? null : slug
  const response = await api.get(
    checkedSlug
      ? `${API_ROUTES.productsByCategory}/${checkedSlug}`
      : API_ROUTES.products,
  )

  return response.data
}

export const useGetProducts = (slug: string | null = null) => {
  // const { handleError } = useError()

  return useQuery({
    queryKey: [KEYS.products, slug],
    queryFn: () => getProducts(slug),
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
    // onError: (error: any) => handleError(error),
  })
}
