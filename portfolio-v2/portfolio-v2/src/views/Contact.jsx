// Author: Kyle Angeles
// File: ContactForm.jsx
// Date-Written: 4/29/26
// Description: This will house the contactForm Route.

// REGION IMPORT COMPONENTS
import {useNavigate} from "react-router-dom";
import ContactForm from "../components/ContactForm.jsx";
// END REGION COMPONENTS

// REGION FUNCTION
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
// END REGION FUNCTION

// REGION EXPORT
export default Contact;
// END REGION EXPORT