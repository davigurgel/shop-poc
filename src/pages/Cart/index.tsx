import Button from '../../components/Button'
import CartItem from '../../components/CartItem'

const data = [1, 2, 3]

const Cart = () => (
  <div className="h-screen bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        {data.map((item) => (
          <CartItem key={item} />
        ))}
      </div>
      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
          </div>
        </div>

        <div className="w-full mt-4 flex justify-end">
          <Button text="Check out" />
        </div>
      </div>
    </div>
  </div>
)

export default Cart
