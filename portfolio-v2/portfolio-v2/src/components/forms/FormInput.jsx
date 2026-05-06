// Author: Kyle Angeles
// File: FormInput.jsx
// Date-written: 5/6/26
// Description: This component will handle the styling for the form input in the contact form
function FormInput({label, name, type = "text", value, onChange, error}) {

    return (
        <input type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        style={{


        }}

        />
    )
}
