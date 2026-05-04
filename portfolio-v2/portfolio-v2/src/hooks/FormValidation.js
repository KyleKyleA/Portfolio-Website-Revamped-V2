//Responsibilities:
// - store field-level errors
// - validate a single field
// - validate the full form
// - support real-time validation while typing
//
// Reuse validation helper functions from utils/validation.js
import {useState} from "react";
import validator from "validator";
import {validateEmail, validateRequired} from "../utils/validation.js";

function useContactValidation() {

    const [errors, setErrors] = useState({});

    // Helper function that validates a SINGLE field based on its name
    // This is the core validation logic used by both our real-time  and full validation form
    const validateField = (name, value) => {
        switch(name) {
            case 'name':
                return validateRequired('name', value);

            case 'email': {
                // Email has multiple checks:
                // 1. First check if it's required
                // 2. Then check of it's a properly formatted email address
                const requiredError = validateRequired('email', value);
                if(requiredError) return requiredError;

                if(!validator.isEmail(value)) return 'Please enter a valid email address';

                //Additional custom validation
                return validateEmail(value);
            }

            case 'message':
                return validateRequired('message', value);

            default:
                //If we were to get an unknown field name, return no error
                return '';

        }
    };


    // Validate the ENTIRE form at once (usually called when the user click 'submit')
    // Steps:
    // 1. Checks every field using validateField()
    // 2. Updates the error state with all error messages
    //3. Returns true if the form is valid (no errors), false otherwise
    const validateForm = (formData) => {

        const newErrors = {};

        // Loop through every field in the formData
        Object.entries(formData).forEach(([field, value]) => {
            newErrors[field] = validateField(field, value);
        });

        // Update the error state so the form can display the error messages
        setErrors(newErrors);

        // return whether the form is valid or not
        // returns true only if ALL error message strings are empty
        return Object.values(newErrors).every(error => !error);

    };


    // Validates ONE field in real-time (as the user types)
    // This is what give the instant feedback while the user is typing in the form fields
    //
    // How it works:
    // - validate the field
    // - Updates only that fields error in the state (should not lose other fields errors)
    // - Return the error message so the component can use it immediately
    const validateSingleField = (name, value) =>{

        const errorMessage = validateField(name, value);

        setErrors((prev) => ({
            ...prev,    //keep all previous errors
            [name]: errorMessage
        }));

        return errorMessage;
    };

    // Clears all errors from state
    // Useful to call after a successful from submission so old errors do not stay visible
    const clearErrors = () => {
        setErrors({});
    };

    return {
        errors,               //Current error messages for all fields
        validateForm,         //Function to validate the whole form on submit
        validateSingleField,  //Function for real-time validation as user types
        clearErrors,          //Function to reset errors after successful submission
    };
}
export default useContactValidation;