// Author: Kyle Angeles
// File: ContactForm.jsx
// Date-Written: 4/29/26
// Description: This will house the contactForm Route.

import {useNavigate} from "react-router-dom";

function ContactForm () {
    const navigate = useNavigate();

    const handleSuccess = () => {
        navigate("/contactForm")
    };


    return (

        <>
           <h2 className="mb-4 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-6x">
                Contact me
           </h2>
        
        </>
    );

}

export default ContactForm;