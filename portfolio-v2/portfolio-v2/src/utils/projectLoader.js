// REGION FUNCTION
export async function projectLoader() {

    try {
        console.log("Attempting to load Kyle's Project's /data/projects.json");
        const res = await fetch('/data/projects.json');
        if (!res.ok) {
            const errorText = await res.text();
            console.error("Error fetching Kyle's Projects:", errorText);
            throw new Error("Failed to fetch Kyle's Projects: ");


        }

        const data = await res.json();
        console.log("Successfully loaded Kyle's Projects:", data);

        return Array.isArray(data) ? data : [];
    } catch (error) {

        throw new Error(error.message, {status: 500});

    }
}
// END REGION FUNCTION