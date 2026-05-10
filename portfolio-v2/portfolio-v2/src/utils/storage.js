// Author: Kyle
// File: storage.js
// Description: Helper to send to localstorage 

// REGION HELPERS
export function saveFormDraft() {
    const storage = useSession ? sessionStorage : localStorage;

    storage.setItem('formDraft', JSON.stringify(formData));

}

export function loadFormDraft() {

    const storage = useSession ? sessionStorage : localStorage;
    const saved = storage.getItem('formDraft');
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (error) {
            console.error("Error parsing saved form data: ", error);
            return {};
        }
    }
    return {};

}

export function clearFormDraft() {
    const storage = useSession ? sessionStorage : localStorage;
    storage.removeItem('formDraft');
}
// REGION HELPERS
