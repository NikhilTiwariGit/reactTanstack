import { createRootRoute, Outlet } from '@tanstack/react-router'
import Header from '@/componet/Header'


export const Route = createRootRoute({
  component: () => (
    <div className="">
      {/* Navigation Links with 100% type safety */}
      <Header />
      <hr/>
      {/* Child routes render here */}
      <Outlet />
    </div>
  ),
})
