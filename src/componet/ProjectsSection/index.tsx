import SectionHeading from '@/componet/SectionHeading'

const ProjectsSection = () => (
  <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 bg-white">
    <SectionHeading
      id="portfolio"
      eyebrow="Work"
      title="Check out some of my works"
      description="A few portfolio-style project cards inspired by the reference layout and designed for a clean showcase experience."
    />

    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h4 className="text-xl font-semibold text-slate-900">ToDo List</h4>
        <p className="mt-2 text-slate-600">A simple productivity-focused UI with task management flow.</p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <h4 className="text-xl font-semibold text-slate-900">Coming Soon</h4>
        <p className="mt-2 text-slate-600">More portfolio work and product experiments are currently being prepared.</p>
      </div>
    </div>
  </section>
)

export default ProjectsSection
