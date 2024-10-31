function showMobileInput(paymentMethod) {
    // Hide all sections first
    document.getElementById('airtelSection').style.display = 'none';
    document.getElementById('mtnSection').style.display = 'none';
    document.getElementById('bankSection').style.display = 'none';

    // Show the relevant section based on the selected payment method
    if (paymentMethod === 'airtel') {
        document.getElementById('airtelSection').style.display = 'block';
    } else if (paymentMethod === 'mtn') {
        document.getElementById('mtnSection').style.display = 'block';
    } else if (paymentMethod === 'bank') {
        document.getElementById('bankSection').style.display = 'block';
    }
}


// JavaScript function to redirect the user to the payment page
function redirectToPaymentPage(paymentMethod) {
    if (paymentMethod === 'airtel') {
        // Redirect to Airtel Money payment page
        window.location.href = 'airtelForm.html'; // Change to your actual Airtel payment page
    } else if (paymentMethod === 'mtn') {
        // Redirect to MTN Mobile Money payment page
        window.location.href = 'mtnForm.html'; // Change to your actual MTN payment page
    } else if (paymentMethod === 'bank') {
        // Redirect to Bank Payment page
        window.location.href = 'bankForm.html'; // Change to your actual Bank payment page
    }
}
