import SectionHeading from '@/componet/SectionHeading'

const EducationSection = () => (
  <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 bg-slate-50">
    <SectionHeading
      id="resume"
      eyebrow="Education"
      title="Education"
      description="Academic foundation that shaped my software engineering journey."
    />

    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-xl font-semibold text-slate-900">
        Rayat Bahra Institute Of Engineering and Nanotechnology (IKJPTU)
      </h4>
      <p className="mt-2 text-slate-600">Bachelor of Computer Science • June 2020</p>
    </div>
  </section>
)

export default EducationSection
