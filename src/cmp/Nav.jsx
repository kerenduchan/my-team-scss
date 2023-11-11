export function Nav() {
    const pages = [
        { name: 'home', link: '/' },
        { name: 'about', link: '/about' },
    ]

    return (
        <nav>
            {pages.map((p) => (
                <a key={p.name} href={p.link}>
                    {p.name}
                </a>
            ))}
        </nav>
    )
}
