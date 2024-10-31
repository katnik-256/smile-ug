document.getElementById('seeMoreButton').addEventListener('click', function() {
    // Load more content or navigate to another page
    window.location.href = 'gallery.html'; // Example of redirecting to another page
    // Alternatively, you could use JavaScript to load more content dynamically
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById('rotateButton');

    button.addEventListener('mouseenter', function() {
        button.style.transform = 'rotate(30deg)';
        button.style.transition = 'transform 0.3s ease';
    });

    button.addEventListener('mouseleave', function() {
        button.style.transform = 'rotate(0deg)';
        button.style.transition = 'transform 0.3s ease';
    });
});

// JavaScript function to center the button
function centerButton() {
    const button = document.getElementById('sendButton');
    const container = button.parentElement.parentElement;

    // Get the container's dimensions
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Get the button's dimensions
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Calculate the position to center the button
    const leftPosition = (containerWidth - buttonWidth) / 2;
    const topPosition = (containerHeight - buttonHeight) / 2;

    // Apply the calculated positions to the button
    button.style.left = leftPosition + 'px';
    button.style.top = topPosition + 'px';
}

// Run the function when the window loads and when it's resized
window.onload = centerButton;
window.onresize = centerButton;


//JavaScript to toggle payment details based on selection 
       
            document.addEventListener('DOMContentLoaded', function () {
                const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
                const airtelDetails = document.getElementById('airtelDetails');
                const mtnDetails = document.getElementById('mtnDetails');
                const bankDetails = document.getElementById('bankDetails');
        
                // Function to hide all payment details
                function hideAllPaymentDetails() {
                    airtelDetails.style.display = 'none';
                    mtnDetails.style.display = 'none';
                    bankDetails.style.display = 'none';
                }
        
                // Add event listener to each payment method
                paymentMethods.forEach(function (method) {
                    method.addEventListener('change', function () {
                        hideAllPaymentDetails();
                        if (this.value === 'airtel') {
                            airtelDetails.style.display = 'block';
                        } else if (this.value === 'mtn') {
                            mtnDetails.style.display = 'block';
                        } else if (this.value === 'bank') {
                            bankDetails.style.display = 'block';
                        }
                    });
                });
            });
        
           