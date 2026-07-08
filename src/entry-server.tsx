import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App, { router } from './App'

export async function render() {
  await router.load()

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App routerInstance={router} />
    </React.StrictMode>
  )

  return { html }
}
