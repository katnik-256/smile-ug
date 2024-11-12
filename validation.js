
// Real-time validation function
document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");

    // Validate name (only letters and spaces, minimum 2 characters)
    nameInput.addEventListener("input", function() {
        const namePattern = /^[A-Za-z\s]{2,}$/;
        validateField(nameInput, namePattern);
    });

    // Validate phone number (international format, e.g., +256774567890)
    phoneInput.addEventListener("input", function() {
        const phonePattern = /^\+256\d{9}$/;
        validateField(phoneInput, phonePattern);
    });

    // Validate email address
    emailInput.addEventListener("input", function() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        validateField(emailInput, emailPattern);
    });

    function validateField(input, pattern) {
        if (pattern.test(input.value)) {
            input.style.borderColor = "green";
        } else {
            input.style.borderColor = "red";
        }
    }
});

