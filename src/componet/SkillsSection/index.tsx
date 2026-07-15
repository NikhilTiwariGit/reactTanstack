import SectionHeading from '@/componet/SectionHeading'

const SkillsSection = () => {
  const skills = ['GIT', 'REACT NATIVE', 'REACT JS', 'CSS', 'HTML5', 'SHOPIFY', 'NODE JS', 'TAILWIND CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'NEXT JS', 'REDUX', 'MATERIAL UI', 'BOOTSTRAP', 'WEBPACK', 'VITE', 'REST API','MONGODB', 'JEST', "React Query", "React Hook Form", "Formik", "Vercel", "Netlify", "Figma", "Adobe XD"]

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 bg-slate-50">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Skills"
        description="Technologies and tools I am comfortable working with on modern frontend and product projects."
      />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
