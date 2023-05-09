import { useContext } from 'react'
import { ShoppingBag, ShoppingCart } from 'react-feather'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../contexts/GlobalProvider'

const Header = () => {
  const { userCart } = useContext(GlobalContext)

  return (
    <header className="fixed top-0 shadow-md w-full text-gray-700 bg-white border-t border-gray-100 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <nav className="flex flex-wrap items-center text-base lg:w-2/5 md:ml-auto">
          <Link to="/" className="mr-5 font-medium hover:text-gray-900">
            Home
          </Link>
        </nav>
        <a className="flex gap-2 items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0">
          <ShoppingBag />
          <span>SHOP | POC</span>
        </a>
        <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
          <Link
            to="/cart"
            className="flex gap-4 items-center mr-5 font-medium hover:text-gray-900"
          >
            <div className="relative">
              {userCart.length > 0 && (
                <div className="-top-2 absolute left-4">
                  <p className="flex h-1 w-1 items-center justify-center rounded-full bg-red-500 p-2 text-[10px] text-white">
                    {userCart.length >= 10 ? '9+' : userCart.length}
                  </p>
                </div>
              )}
              <ShoppingCart />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
