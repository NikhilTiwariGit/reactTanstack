import SectionHeading from '@/componet/SectionHeading'

const WorkSection = () => (
  <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 bg-white">
    <SectionHeading
      id="works"
      eyebrow="Experience"
      title="Work Experience"
      description="A short timeline of the roles that helped me expand my frontend and product-building skills."
    />

    <div className="space-y-5">
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-xl font-semibold text-slate-900">Fareportal</h4>
          <span>
            <p className="mt-2 text-slate-700">Senior Software Engineer</p>
            <p className="mt-2 text-slate-600">Working as React developer.</p>
          </span>
          <span className="text-sm font-medium text-violet-700">Jun 2023 - Present</span>
        </div>
      </article>
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-xl font-semibold text-slate-900">Chicmin</h4>
          <span>
            <p className="mt-2 text-slate-700">Software Engineer</p>
            <p className="mt-2 text-slate-600">Working as React developer.</p>
          </span>
          <span className="text-sm font-medium text-violet-700">Nov 2021 - Jun 2023</span>
        </div>
      </article>
      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-xl font-semibold text-slate-900">Recraft Ralic</h4>
          <span>
            <p className="mt-2 text-slate-700">Jr. Software Engineer</p>
            <p className="mt-2 text-slate-600">Working as React developer.</p>
          </span>
          <span className="text-sm font-medium text-violet-700">Nov 2020 - Present</span>
        </div>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-xl font-semibold text-slate-900">Alliance Ecommerce</h4>
          <span>
            <p className="mt- 2 text-slate-700">Jr. Frontend Developer</p>
            <p className="mt-2 text-slate-600">Working as Frontend developer.</p>
          </span>
          <span className="text-sm font-medium text-violet-700">Jan 2020 - Apr 2020</span>
        </div>
      </article>
    </div>
  </section>
)

export default WorkSection
