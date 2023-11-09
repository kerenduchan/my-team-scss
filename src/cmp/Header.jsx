export function Header() {
    return (
        <header className="bg-primary-3">
            <div className="header-content">
                <img className="logo" src="images/logo.svg" alt="myteam" />
                <nav>
                    <a>home</a>
                    <a>about</a>
                </nav>
                <button className="contact-us">contact us</button>
            </div>
        </header>
    )
}
