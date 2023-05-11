import { useContext } from 'react'
import ListItem from '../ListItem'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { ProductProps } from '../../@types/ProductsProps'
import ListBar from '../ListBar'

const ProductList = ({ showListBar = true }: { showListBar?: boolean }) => {
  const {
    products: { data },
    orderBy,
  } = useContext(GlobalContext)

  const orderProducts = (type: string | null): ProductProps[] => {
    const cloneData: ProductProps[] = JSON.parse(JSON.stringify(data || []))

    if (type === 'price' && data) {
      return cloneData.sort((a, b) => a.price - b.price)
    }

    if (type === 'popularity' && data) {
      return cloneData?.sort((a, b) => a.rating.rate - b.rating.rate)
    }

    return data || []
  }

  return (
    <section>
      <div className="container px-6 mx-auto">
        {showListBar && <ListBar />}

        <div className="grid grid-cols-1 gap-8 mt-2 md:mt-4 md:grid-cols-2">
          {orderProducts(orderBy).map((item) => (
            <ListItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
