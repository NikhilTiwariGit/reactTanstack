import { createFileRoute } from '@tanstack/react-router'
import { Ecommerce } from '../componet/Ecommerce'

export const Route = createFileRoute('/ecommerce')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Ecommerce /></div>
}
