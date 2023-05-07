import { Suspense, lazy } from 'react'
import { Route, Routes as RoutesApp } from 'react-router-dom'

import { ROUTES } from '../constants/routes'

const BaseLayout = lazy(() => import('../layout/BaseLayout'))
const Home = lazy(() => import('../pages/Home'))
const Cart = lazy(() => import('../pages/Cart'))
const Product = lazy(() => import('../pages/Product'))

const Routes = () => (
  <RoutesApp>
    <Route
      path={ROUTES.home}
      element={
        <Suspense fallback={<div />}>
          <BaseLayout />
        </Suspense>
      }
    >
      <Route
        path={ROUTES.home}
        element={
          <Suspense fallback={<div />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.cart}
        element={
          <Suspense fallback={<div />}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.product}
        element={
          <Suspense fallback={<div />}>
            <Product />
          </Suspense>
        }
      />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  </RoutesApp>
)

export default Routes
