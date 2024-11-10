// Add your code here
function submitData(name, email) {
    // Destination URL
    const url = "http://localhost:3000/users";

    // Data to be sent
    const formData = {
        name: name, 
        email: email
    };

    // configuratoin object
    const configurationObject = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        }, 
        body: JSON.stringify(formData)
    };

    // sending the POST request
    return fetch(url, configurationObject)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok "  + response.statusText);

            }
            return response.json();
        })
        .then(data => {
            // Appending the new id to the DOM
            const newId = document.createElement("p");
            newId.textContent = `New ID: ${data.id}`;
            document.body.appendChild(newId);
        })
        .catch(error => {
            // handling error and appending the error message to DOM
            const errorMessage = document.createElement("p");
            errorMessage.textContent = `Error: ${error.message}`;
            document.body.appendChild(errorMessage);
        })
}

submitData("John Doe", "john.doe@example.com");