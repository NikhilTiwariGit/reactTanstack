import { createRootRoute, Link, Outlet } from '@tanstack/react-router'


export const Route = createRootRoute({
  component: () => (
    <div className="p-6">
      {/* Navigation Links with 100% type safety */}
      <nav className="mb-4 flex gap-4 text-blue-600 underline">
        <Link to="/" className="[&.active]:font-bold text-gray-700">Home</Link>
        {/* <Link to="/product" className="[&.active]:font-bold text-gray-700">Product</Link> */}
      </nav>
      <hr className="my-4" />
      {/* Child routes render here */}
      <Outlet />
    </div>
  ),
})
