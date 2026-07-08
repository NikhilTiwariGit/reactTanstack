import { RouterProvider, createRouter, createMemoryHistory } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

const isServer = typeof window === 'undefined'

export function createMyRouter() {
  return createRouter({
    routeTree,
    defaultNotFoundComponent: () => (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
        <p className="text-gray-600 mt-2">The route you are looking for does not exist.</p>
      </div>
    ),
  })
}


declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createMyRouter>
  }
}

const router = createMyRouter()

function App() {
  return <RouterProvider router={router} />
}

export default App
