type SectionHeadingProps = {
    id: string
    eyebrow: string
    title: string
    description: string
}

const SectionHeading = ({ id, eyebrow, title, description }: SectionHeadingProps) => (
    <div id={id} className="mb-8 scroll-mt-24">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">
            {eyebrow}
        </p>
        <h3 className="text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h3>
        <div className="flex justify-center">
            <p className="block mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        </div>
    </div>
)

export default SectionHeading
