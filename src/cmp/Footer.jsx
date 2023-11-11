import { Nav } from './Nav'

export function Footer() {
    const address = `987  Hillcrest Lane
    Irvine, CA
    California 92714
    Call Us : 949-833-7432`

    const social = ['facebook', 'pinterest', 'twitter']

    return (
        <footer className="bg-secondary-5">
            <img className="logo" src="images/logo.svg" alt="myteam" />
            <Nav />
            <address>{address}</address>
            <ul>
                {social.map((s) => (
                    <a key={s} className={s} />
                ))}
            </ul>

            <article className="copyright">
                Copyright 2020. All Rights Reserved
            </article>
        </footer>
    )
}
