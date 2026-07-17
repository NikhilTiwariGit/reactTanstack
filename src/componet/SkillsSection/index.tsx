import SectionHeading from '@/componet/SectionHeading'

const SkillsSection = () => {
  const skillGroups = {
    Languages: ['JavaScript', 'TypeScript', 'HTML5', 'CSS'],
    Frontend: [
      'React JS',
      'Next JS',
      'React Native',
      'Redux',
      'React Query',
      'React Hook Form',
      'Formik',
    ],
    'Styling & UI': ['Tailwind CSS', 'Material UI', 'Bootstrap', 'CSS'],
    'Backend & APIs': ['Node JS', 'REST API', 'MongoDB'],
    'Tools & Platforms': ['Git', 'Webpack', 'Vite', 'Jest', 'Vercel', 'Netlify', 'Figma', 'Shopify'],
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Skills"
        // description="Technologies and tools I am comfortable working with on modern frontend and product projects."
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {Object.entries(skillGroups).map(([category, items]) => (
          <div
            key={category}
            className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-violet-200 bg-violet-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-violet-600 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
