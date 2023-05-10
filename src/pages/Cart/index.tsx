import { useContext } from 'react'
import Button from '../../components/Button'
import CartItem from '../../components/CartItem'
import { GlobalContext } from '../../contexts/GlobalProvider'
import { useNavigate } from 'react-router-dom'
import { i18n } from '../../i18n'

const Cart = () => {
  const navigate = useNavigate()
  const { userCart } = useContext(GlobalContext)

  const handleCalculation = () => {
    let cartValue = 0

    userCart.forEach((item) => {
      cartValue = cartValue + item.price * item.quantity!
    })

    return cartValue.toFixed(2)
  }

  return userCart.length > 0 ? (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">
        {i18n.t('cart.title')}
      </h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {userCart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">{i18n.t('cart.subtotal')}</p>
            <p className="text-gray-700">
              {i18n.l('currency', handleCalculation())}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">{i18n.t('cart.total')}</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                {i18n.l('currency', handleCalculation())}
              </p>
            </div>
          </div>

          <div className="w-full mt-4 flex justify-end">
            <Button onClick={() => {}} text={i18n.t('cart.checkout')} />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="mt-24 h-screen justify-center">
      <h1 className="mb-10 text-center text-2xl font-bold">
        {i18n.t('cart.empty')}
      </h1>
      <div className="w-full mt-4 flex justify-center">
        <Button onClick={() => navigate('/')} text={i18n.t('cart.back')} />
      </div>
    </div>
  )
}
export default Cart
