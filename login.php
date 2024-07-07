<?php
$servername = "localhost";
$username = "root";  // Update with your database username
$password = "";  // Update with your database password
$dbname = "my_notes";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    
    $sql = "SELECT * FROM user_data WHERE email='$email' AND password='$password'";
    $result = $conn->query($sql);
    
    if ($result->num_rows > 0) {
        echo "<script>alert('Login successful!'); window.location.href = 'notes.html';</script>";
    } else {
        echo "<script>alert('Login failed! Please check your email and password.'); window.location.href = 'login.html';</script>";
    }
}

$conn->close();
?>
