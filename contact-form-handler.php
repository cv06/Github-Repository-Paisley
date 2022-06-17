<?php
$name = $_POST['contact-name'];
$visitor_email = $_POST['contact-email'];
$message = $_POST['contact-message'];

$email_from = 'info@yourwebsite.com';
$email_subject = 'New Form Submission';
$email_body = "User Name: $name.\n".
		"User Email: $visitor_email.\n".
		"User Message: $message.\n";

$to = "vosscason@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";
mail($to,$email_body,$headers);
header("Location: index.html")
?>
