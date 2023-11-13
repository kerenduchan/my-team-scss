import { useState } from 'react'

export function ContactForm() {
    const [draft, setDraft] = useState({
        name: '',
        email: '',
        companyName: '',
        title: '',
        message: '',
    })

    return (
        <form>
            <div className="form-field">
                <input type="text" id="name"></input>
                <label for="name">Name</label>
            </div>

            <div className="form-field">
                <input type="email" id="email"></input>
                <label for="email">Email Address</label>
            </div>

            <div className="form-field">
                <input type="text" id="company-name"></input>
                <label for="company-name">Company Name</label>
            </div>

            <div className="form-field">
                <input type="text" id="title"></input>
                <label for="title">Title</label>
            </div>
        </form>
    )
}
