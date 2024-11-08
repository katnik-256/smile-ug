<?php
// Database connection
$servername = "sql301.infinityfree.com"; // Replace with your InfinityFree MySQL Hostname
$username = "if0_37635710"; // Replace with your InfinityFree MySQL Username
$password = "Mi3Bq7f6XGSdj"; // Replace with your InfinityFree MySQL Password
$dbname = "if0_37635710_XXX"; // Replace with your InfinityFree Database Name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $phoneNumber = htmlspecialchars($_POST['phoneNumber']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Validate that phone number is in the expected format
    if (!preg_match("/^\+256[0-9]{9}$/", $phoneNumber)) {
        echo "Phone number format is incorrect.";
        exit();
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO form_submissions (name, phoneNumber, email, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $phoneNumber, $email, $message);

    // Execute and check for success
    if ($stmt->execute()) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement and connection
    $stmt->close();
    $conn->close();
}
?>
