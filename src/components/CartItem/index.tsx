import { Minus, Plus } from 'react-feather'
import MyImage from '../MyImage'
import { ProductProps } from '../../@types/ProductsProps'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { i18n } from '../../i18n'

const CartItem = ({ product }: { product: ProductProps }) => {
  const { handleUpdateCartItemQuantity, handleDeleteCartItem } =
    useContext(GlobalContext)

  const handleDeductQuantity = () => {
    if (product.quantity! > 1) {
      handleUpdateCartItemQuantity(product.id, product.quantity! - 1)
    }
  }

  return (
    <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <MyImage
        src={product.image}
        alt={product.title}
        className="max-w-[80px] rounded-lg"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
          <p className="mt-1 text-xs text-gray-700">{product.category}</p>
          <button
            type="button"
            onClick={() => handleDeleteCartItem(product.id)}
            className="pointer mt-2 text-xs px-2 py-1 text-red-700 border border-red-700 rounded-[4px] hover:border-white hover:text-white hover:bg-red-500 transition"
          >
            {i18n.t('cart.remove')}
          </button>
        </div>
        <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              onClick={handleDeductQuantity}
              className={`flex items-center justify-center h-8 w-8 rounded-l ${
                product.quantity === 1
                  ? 'cursor-not-allowed bg-neutral-200 hover:bg-neutral-200'
                  : 'cursor-pointer duration-100 hover:bg-gray-700 hover:text-white bg-gray-100'
              }`}
            >
              <Minus size={10} />
            </span>
            <input
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
              type="text"
              value={product.quantity}
              min="1"
              readOnly
            />
            <span
              onClick={() =>
                handleUpdateCartItemQuantity(product.id, product.quantity! + 1)
              }
              className="flex items-center justify-center h-8 w-8 cursor-pointer rounded-r bg-gray-100 duration-100 hover:bg-gray-700 hover:text-white"
            >
              <Plus size={10} />
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">
              {i18n.l('currency', product.price.toFixed(2))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
