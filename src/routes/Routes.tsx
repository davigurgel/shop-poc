import { Suspense, lazy } from 'react'
import { Route, Routes as RoutesApp } from 'react-router-dom'

import { ROUTES } from '../constants/routes'
import Loading from '../components/Loading'

const BaseLayout = lazy(() => import('../layout/BaseLayout'))
const Home = lazy(() => import('../pages/Home'))
const Cart = lazy(() => import('../pages/Cart'))
const Product = lazy(() => import('../pages/Product'))

const Routes = () => (
  <RoutesApp>
    <Route
      path={ROUTES.home}
      element={
        <Suspense fallback={<Loading />}>
          <BaseLayout />
        </Suspense>
      }
    >
      <Route
        path={ROUTES.home}
        element={
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.cart}
        element={
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.product}
        element={
          <Suspense fallback={<Loading />}>
            <Product />
          </Suspense>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  </RoutesApp>
)

export default Routes
