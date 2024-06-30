<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = 'pssoni9217@gmail.com';
    $subject = 'New Contact Form Submission';
    $body = "First Name: $first_name\nLast Name: $last_name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo '<script>alert("Welcome to Geeks for Geeks")</script>';
    } else {
        echo '<p>There was an error sending your message. Please try again later.</p>';
    }
} else {
    echo '<p>Direct access to this script is not allowed.</p>';
}
header("Location: /contact.html");
    exit();
?>
