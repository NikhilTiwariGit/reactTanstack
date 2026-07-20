import { Link } from '@tanstack/react-router'

const activeClassName = '[&.active]:font-bold [&.active]:underline'

const Header = () => {
  return (
    <nav className="sticky top-0 z-20 border-b border-slate-200 bg-slate-950/95 px-4 py-4 backdrop-blur-sm sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-3 text-sm sm:gap-4">
        <a href="#about" className="text-white/90 transition hover:text-white">About</a>
        <a href="#resume" className="text-white/90 transition hover:text-white">Resume</a>
        <a href="#works" className="text-white/90 transition hover:text-white">Works</a>
        <a href="#portfolio" className="text-white/90 transition hover:text-white">Portfolio</a>
        <a href="#contact" className="text-white/90 transition hover:text-white">Contact</a>
        <Link to="/ecommerce" className={`${activeClassName} text-white/90 transition hover:text-white`}>
          Ecommerce
        </Link>
      </div>
    </nav>
  )
}

export default Header
