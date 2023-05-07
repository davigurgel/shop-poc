import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function BaseLayout() {
  return (
    <div className="pt-[128px] md:pt-16 bg-[#f3f3f3]">
      <Header />
      <Outlet />
    </div>
  )
}
