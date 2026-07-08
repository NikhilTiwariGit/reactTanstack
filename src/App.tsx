import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

type AppProps = {
  routerInstance?: typeof router
}

function App({ routerInstance = router }: AppProps) {
  return <RouterProvider router={routerInstance} />
}

export default App
