function validateForm() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate required fields
    if (!name || !phoneNumber || !email || !message) {
        alert("All fields are required.");
        return false;
    }
    
    // Validate phone number format
    const phonePattern = /^\+256\d{9}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Phone number format is invalid. Use format +256774567890.");
        return false;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Save data to Local Storage
    const formData = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        message: message
    };
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Form data saved successfully!");

    // Optionally, simulate sending an email
    sendEmailNotification(formData);

    // Clear form after submission
    document.getElementById('phoneForm').reset();
    return false; // Prevent actual form submission
}

function sendEmailNotification(data) {
    // Ideally, here you would send a request to a backend to handle the email sending.
    // This is a placeholder to simulate sending an email.
    console.log("Email notification simulated:", data);
    alert("An email notification would be sent to the admin.");
}



// Counter animation script
$(document).ready(function() {
    $('.counter').each(function() {
        const $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
});
