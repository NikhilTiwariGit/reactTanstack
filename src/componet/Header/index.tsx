import { Link } from '@tanstack/react-router'

const activeClassName = '[&.active]:font-bold [&.active]:underline'

const Header = () => {
    return (
        <nav className="py-4 flex justify-end gap-4 px-4">
            <Link to="/" className={`${activeClassName} text-(--text-color)`}>Home</Link>
            <Link to="/product" className={`${activeClassName} text-(--text-color)`}>Product</Link>
        </nav>
    )
}

export default Header
