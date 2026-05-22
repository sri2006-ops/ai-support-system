document
    .getElementById("supportForm")
    .addEventListener("submit", async (e) => {

        e.preventDefault();

        const btn = document.getElementById("submitBtn");
        const btnText = btn.querySelector("span");
        const btnIcon = btn.querySelector("i");
        const responseContainer = document.getElementById("responseContainer");
        const responseText = document.getElementById("response");

        // Loading state
        btn.classList.add("loading");
        btnText.innerText = "Sending...";
        btnIcon.className = "bx bx-loader-alt";

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {
            const response = await fetch(
                "http://localhost:5001/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            const result = await response.json();

            // Success state
            responseContainer.className = "success";
            responseText.innerText = result.message || "Complaint submitted successfully!";
            
            // Clear form
            document.getElementById("supportForm").reset();

        } catch (error) {
            responseContainer.className = "success";
            responseContainer.style.background = "rgba(231, 76, 60, 0.1)";
            responseContainer.style.color = "#e74c3c";
            responseContainer.style.borderColor = "rgba(231, 76, 60, 0.3)";
            responseContainer.querySelector("i").className = "bx bx-error-circle";
            responseText.innerText = "Oops! Something went wrong.";
        }

        // Reset button
        btn.classList.remove("loading");
        btnText.innerText = "Submit Complaint";
        btnIcon.className = "bx bx-send";
    });