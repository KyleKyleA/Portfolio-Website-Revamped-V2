// Author: Kyle Angeles
// File: ContactForm.jsx
// Date-Written: 4/29/26
// Description: This component will handle the contact form for the contact page, this will be a static form for now but I will be implementing the backend functionality for this form in the future.
// Used most of old code and updating the styling for the form and adding the backend part in the coming days
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

        // Validate message to be optional but if it is provided it must have at least 10 characters
        if (!formData.message.trim() || formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
            
        }

        // if empty no errors, otherwise return the errors to the user.
        return newErrors;
    }

    // Submission Validation
    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));

        if (errors[name]) {
            setErrors(prev => ({...prev, [name]: null}));
        }
    } 

    // Simulates form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validateForm);
            return;
        }

        setStatus("submitting");
        setStatusMessage("Submitting your message...");

        // Simulate form submission using an api call or email service 
        // this is where I will implement the backend functionality just for the contact form page 
        // using something like nodemailer or an email service provider
        // in the coming days 
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

    // Form Template used by shaders and 21st dev community for the styling part of the form, I will be implementing the backend functionality for this form in the future but for now this is just a static form that will display on the contact page.
    return (
        
        <div className="contact-form-container">
           <form className="flex flex-col items-center text-sm">
            <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>

            {/* Contact Form */}
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
        
            <button type="submit" className="mt-5 bg-indigo-600 text-white h-12 w-32 px-4 rounded active:scale-95 transition">Send Message</button>
        </form>
          
          {/* Social links */}
        </div>

      


        
    )

    
};





export default ContactForm;