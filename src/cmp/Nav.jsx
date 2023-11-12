export function Nav({ onLinkClick }) {
    const pages = [
        { name: 'home', link: '/' },
        { name: 'about', link: '/about' },
    ]

    return (
        <nav>
            {pages.map((p) => (
                <a key={p.name} onClick={() => onLinkClick(p.link)}>
                    {p.name}
                </a>
            ))}
        </nav>
    )
}
