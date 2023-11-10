export function HomepageSection3() {
    const successStories = [
        {
            id: 1,
            name: 'Kady Baker',
            avatar: 'images/avatar-kady.jpg',
            text: 'The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.',
        },
        {
            id: 2,
            name: 'Aiysha Reese',
            avatar: 'images/avatar-aiysha.jpg',
            text: 'We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
        },
        {
            id: 3,
            name: 'Arthur Clarke',
            avatar: 'images/avatar-arthur.jpg',
            text: 'Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
        },
    ]

    return (
        <div className="homepage-section-3 bg-secondary-3">
            <img
                className="pattern-4"
                src="images/bg-pattern-home-4-about-3.svg"
            />
            <div className="title">
                Delivering real results for top companies. Some of our{' '}
                <mark className="secondary-1">success stories</mark>.
            </div>

            <ul>
                {successStories.map((story) => (
                    <li key={story.id}>
                        <SuccessStory
                            name={story.name}
                            avatar={story.avatar}
                            text={story.text}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

function SuccessStory({ name, avatar, text }) {
    return (
        <>
            <p className="text body-2">"{text}"</p>
            <heading className="name secondary-1">{name}</heading>
            <img className="avatar" src={avatar} />
        </>
    )
}
