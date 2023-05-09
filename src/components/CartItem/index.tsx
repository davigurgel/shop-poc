import { Minus, Plus } from 'react-feather'
import MyImage from '../MyImage'

const CartItem = () => (
  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <MyImage
      src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80"
      alt="product-image"
      className="w-full rounded-lg sm:w-40"
    />
    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div className="mt-5 sm:mt-0">
        <h2 className="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
        <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
        <button
          type="button"
          className="pointer mt-2 text-xs px-2 py-1 text-red-700 border border-red-700 rounded-[4px] hover:border-white hover:text-white hover:bg-red-500 transition"
        >
          Remove
        </button>
      </div>
      <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        <div className="flex items-center border-gray-100">
          <span className="flex items-center justify-center h-8 w-8 cursor-pointer rounded-l bg-gray-100 duration-100 hover:bg-gray-700 hover:text-white">
            <Minus size={10} />
          </span>
          <input
            className="h-8 w-8 border bg-white text-center text-xs outline-none"
            type="text"
            value="2"
            min="1"
            readOnly
          />
          <span className="flex items-center justify-center h-8 w-8 cursor-pointer rounded-r bg-gray-100 duration-100 hover:bg-gray-700 hover:text-white">
            <Plus size={10} />
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-sm">259.000 ₭</p>
        </div>
      </div>
    </div>
  </div>
)

export default CartItem
