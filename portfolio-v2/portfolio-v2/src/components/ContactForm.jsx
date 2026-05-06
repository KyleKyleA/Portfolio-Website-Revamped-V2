import {useState} from "react";
import validator from "validator";

function ContactForm({onSuccess}) {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        message:""
    })

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");
    const [message, setStatusMessage] = useState("");

    const validateForm = () => {
        const newErrors = {};

        // Validate name
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";


        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name can only contain letters";
        }


        // Validate email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";

        } else if (!validator.isEmail(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!formData.message.trim() || formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            
        }

        // if empty no errors, otherwise return the errors to the user.
        return newErrors;
    }

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));

        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    } 


    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validateForm);
            return;
        }

        setStatus("submitting");
        setStatusMessage("Submitting your message...");


        try {


        setFormData({
            name: "",
            email: "",
            message: ""
        })

        } catch (error) {

            setStatus('error');
            setStatusMessage("An error occurred during your submission please try again.");
        }
    }


    return (
        <div className="contact-form-container">
           <form className="flex flex-col items-center text-sm">
            <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">Connect with Kyle Angeles</h1>
            
            
            <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Name</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="text" required />
                </div>
                <div className="w-full">
                    <label className="text-black/70" htmlFor="name">Your Email</label>
                    <input className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-indigo-300" type="email" required />
                </div>
            </div>
        
            <div className="mt-6 w-[350px] md:w-[700px]">
                <label className="text-black/70" htmlFor="name">Message</label>
                <textarea className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-indigo-300" required></textarea>
            </div>
        
            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition">Send Message</button>
        </form>
        </div>
    )

    
};




export default ContactForm;