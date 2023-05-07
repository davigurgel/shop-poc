import { useContext } from 'react'
import ListItem from '../ListItem'
import { GlobalContext } from '../../contexts/GlobalProvider'

const ProductList = () => {
  const {
    products: { data },
  } = useContext(GlobalContext)
  return (
    <section>
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-2 md:mt-4 md:grid-cols-2">
          {data?.map((item) => (
            <ListItem key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductList
