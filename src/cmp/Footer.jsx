export function Footer() {
    const address = `987  Hillcrest Lane
    Irvine, CA
    California 92714
    Call Us : 949-833-7432`

    const social = ['facebook', 'pinterest', 'twitter']

    return (
        <footer className="bg-secondary-5">
            <img className="logo" src="images/logo.svg" alt="myteam" />
            <nav>nav</nav>
            <address>{address}</address>
            <ul>
                {social.map((s) => (
                    <a key={s} className={s} />
                ))}
            </ul>
        </footer>
    )
}
