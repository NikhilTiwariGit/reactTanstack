import AboutSection from '@/componet/AboutSection'
import ContactSection from '@/componet/ContactSection'
import EducationSection from '@/componet/EducationSection'
import ProjectsSection from '@/componet/ProjectsSection'
import SkillsSection from '@/componet/SkillsSection'
import WorkSection from '@/componet/WorkSection'

const PortfolioSections = () => (
  <div className="bg-white">
    <AboutSection />
    <EducationSection />
    <WorkSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
  </div>
)

export default PortfolioSections
