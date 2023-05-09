import { Link } from 'react-router-dom'
import Button from '../Button'
import { ProductProps } from '../../@types/ProductsProps'
import { Star } from 'react-feather'
import MyImage from '../MyImage'

const ListItem = ({ product }: { product: ProductProps }) => {
  const formatPrice = (price: number) => price.toFixed(2)

  return (
    <div className="lg:flex rounded-lg bg-white p-6 shadow-md">
      <MyImage
        alt={product.title}
        src={product.image}
        className="m-auto sm:m-0 object-contain max-w-[150px] h-[200px] rounded-lg"
      />

      <div className="flex flex-col justify-between py-6 lg:mx-6 gap-2">
        <Link
          to={`/product/${product.id}`}
          className="text-xl font-semibold text-gray-800 hover:underline"
        >
          <span className="text-[10px] leading-4 block text-gray-500 uppercase">
            {product.category}
          </span>
          {product.title}
        </Link>

        <div className="flex text-center gap-1">
          <Star className="text-yellow-400" size={16} fill="#facc15" />
          <span className="text-[12px] text-gray-500">
            {product.rating.rate}
          </span>
        </div>

        <span className="text-[16px] text-gray-500">
          $ {formatPrice(product.price)}
        </span>
        <Button text="Add to Cart" />
      </div>
    </div>
  )
}

export default ListItem
