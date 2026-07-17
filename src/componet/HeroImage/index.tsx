import heroBackground from '@/assets/header-background.jpg'
import profileImage from '@/assets/nikhilImage.jpg'
import { getYearsDifference } from '@/helpers/date.helpes'

const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikhil-tiwari-56422718b' },
    { label: 'Facebook', href: 'https://www.facebook.com/nikhil.tiwari.9803150' },
    { label: 'Twitter', href: 'https://twitter.com/NikhilT94103233?s=09' },
    { label: 'Instagram', href: 'https://www.instagram.com/invites/contact/?i=1m3llzshfi8i7&utm_content=1kl3lnc' },
    { label: 'GitHub', href: 'https://github.com/NikhilTiwariGit' },
]

const HeroImage = () => {
    return (
        <section className="relative isolate overflow-hidden bg-slate-950 text-white">
            <img
                src={heroBackground}
                alt="hero background"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

            <div className="relative mx-auto flex min-h-[560px] max-w-6xl items-center px-6 py-16 sm:px-8 lg:px-12">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                    <div className="text-left">

                        <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Nikhil Tiwari
                        </h1>

                        <h2 className="max-w-3xl text-lg leading-8 text-white/85 sm:text-xl">
                            Turning ideas into reality, one line of code at a time.{' '}
                            {getYearsDifference('2020-01-01', new Date())}+ years crafting fast, scalable React.js applications — built on hard work, dedication, and a passion for solving problems.
                        </h2>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 transition hover:border-white/40 hover:bg-white/20"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="rounded-full border-4 border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
                            <img
                                src={profileImage}
                                alt="Nikhil Tiwari"
                                className="h-72 w-72 rounded-full object-cover object-center sm:h-80 sm:w-80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroImage;
