import { useState } from 'react'

export function ContactForm() {
    const [draft, setDraft] = useState({
        name: '',
        email: '',
        companyName: '',
        title: '',
        message: '',
    })

    function onChange(ev, field) {
        setDraft((prev) => ({ ...prev, [field]: ev.target.value }))
    }

    return (
        <form>
            {/* name */}
            <FormInputField
                field="name"
                label="Name"
                value={draft.name}
                onChange={onChange}
            />

            {/* email */}
            <FormInputField
                field="email"
                label="Email Address"
                value={draft.email}
                onChange={onChange}
                type="email"
            />

            {/* company name */}
            <FormInputField
                field="companyName"
                label="Company Name"
                value={draft.companyName}
                onChange={onChange}
            />

            {/* title */}
            <FormInputField
                field="title"
                label="Title"
                value={draft.title}
                onChange={onChange}
            />
        </form>
    )
}

function FormInputField({ field, label, value, onChange, type = 'text' }) {
    return (
        <div className="form-field">
            <label htmlFor={field} className={value == '' ? '' : 'hide'}>
                {label}
            </label>
            <input
                type={type}
                id={field}
                value={value}
                onChange={(e) => onChange(e, field)}
            />
        </div>
    )
}
