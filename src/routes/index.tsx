import { createFileRoute } from '@tanstack/react-router'
import HeroImage from '@/componet/HeroImage'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div>
      <HeroImage />
      <h1 className="text-2xl font-bold">Welcome Home!</h1>
    </div>
  )
}
