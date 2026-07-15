import { createFileRoute } from '@tanstack/react-router'
import HeroImage from '@/componet/HeroImage'
import PortfolioSections from '@/componet/PortfolioSections'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  return (
    <div className="relative">
      <HeroImage />
      <PortfolioSections />
    </div>
  )
}
