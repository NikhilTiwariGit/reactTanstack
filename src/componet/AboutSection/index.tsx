import SectionHeading from '@/componet/SectionHeading'

const AboutSection = () => (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12 bg-white">
        <SectionHeading
            id="about"
            eyebrow="About"
            title="About Me"
            description="I'm a React.js developer with 6+ years of experience building clean, scalable, and user-focused web applications. I thrive on challenging myself to grow technically, constantly learning new tools and approaches to write better, more efficient code."
        />

        <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-slate-900">Professional Mindset</h4>
                <p className="text-slate-600">
                    I enjoy working in fast-paced environments and adapt quickly to new processes, technologies, and workflows. Whether it's refining an existing codebase or building something from scratch, I stay focused on delivering results that genuinely serve the end user.
                </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold text-slate-900">What I Bring</h4>
                <p className="text-slate-600">
                    Strong frontend instincts, clean and maintainable UI implementation, and a problem-solving mindset backed by real-world debugging and development experience. I'm driven by continuous growth — always pushing to write better code and deliver better products.
                </p>
            </div>
        </div>
    </section>
)

export default AboutSection
