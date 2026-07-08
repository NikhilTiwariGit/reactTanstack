import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = process.cwd()
const isProd = process.env.NODE_ENV === 'production'

async function createServer() {
  const app = express()
  let vite
  if (!isProd) {
    // Create Vite server in middleware mode for local development
    const { createServer: createViteServer } = await import('vite')
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'custom'
    })
    
    app.use(vite.middlewares)
  } else {
    // Serve production assets staticly
    app.use((await import('compression')).default())
    app.use((await import('serve-static')).default(path.resolve(__dirname, 'dist/client'), {
      index: false
    }))
  }
  console.log('Request URL: ',isProd)
  console.log('Development Mode', __dirname)
  app.use('/{*splat}', async (req, res) => {
    const url = req.originalUrl

    try {
      let template, render
      
      if (!isProd) {
        // Read index.html and apply Vite transforms in development
        template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
        template = await vite.transformIndexHtml(url, template)
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
      } else {
        // Read production assets
        template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
        render = (await import('/dist/server/entry-server.js')).render
      }

      // Render the app HTML components
      const { html: appHtml } = render()

      // Inject the app HTML into your layout template
      const html = template.replace(`<!--ssr-outlet-->`, appHtml)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      vite?.ssrFixStacktrace(e)
      console.log(e.stack, e.message)
      res.status(500).end(e.message)
    }
  })

  app.listen(5173, () => {
    console.log('Server running at http://localhost:5173')
  })
}

createServer()
