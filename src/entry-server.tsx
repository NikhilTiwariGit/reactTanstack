// src/entry-server.tsx
import ReactDOMServer from 'react-dom/server'
import { createMemoryHistory, RouterProvider } from '@tanstack/react-router'
import { createMyRouter } from '@/App'

export async function render(url: string) {
  // 1. Create a isolated, fresh router instance for this specific request
  const router = createMyRouter()

  // 2. Point the history tracker to the exact incoming Express URL string
  const memoryHistory = createMemoryHistory({
    initialEntries: [url],
  })
  router.update({ history: memoryHistory })

  // 3. CRITICAL STEP: Initialize and resolve all internal router stores before mounting
  await router.load()

  // 4. Render the app tree safely to a static string
  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router} />
  )

  return { html }
}
