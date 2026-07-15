import SectionHeading from '@/componet/SectionHeading'

const ContactSection = () => (
  <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 bg-slate-900 text-white">
    <SectionHeading
      id="contact"
      eyebrow="Contact"
      title="Contact Details"
      description="You can reach out for collaboration, opportunities, or frontend development discussions."
    />

    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Address</p>
        <p className="mt-2 text-lg">366/3 New Jagutpura, Hoshiarpur, Punjab, 146001</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Phone</p>
        <p className="mt-2 text-lg">+91 8437904258, +91 7009426785</p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Email</p>
        <p className="mt-2 text-lg">nikhiltiwari7123@gmail.com</p>
      </div>
    </div>
  </section>
)

export default ContactSection
