// Author: Kyle Angeles
// File: ContactForm.jsx
// Date-Written: 4/29/26
// Description: This will house the contactForm Route.

import {useNavigate} from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";

function Contact() {
    const navigate = useNavigate();


    // Implement success to somewhere else either email or localstorage
    const handleSuccess = () => {
        navigate("/contact")
    };


    return (

        <>


           <ContactForm onSuccess={handleSuccess} />
           

          
        
        </>
    );

}

export default Contact;