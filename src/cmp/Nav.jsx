import { Link } from 'react-router-dom'

export function Nav() {
    const pages = [
        { name: 'home', link: '/' },
        { name: 'about', link: '/about' },
    ]

    return (
        <nav>
            {pages.map((p) => (
                <Link key={p.name} to={p.link}>
                    {p.name}
                </Link>
            ))}
        </nav>
    )
}
