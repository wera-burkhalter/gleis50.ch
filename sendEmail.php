<?php
// Überprüfen, ob das Formular gesendet wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formularwerte abrufen und bereinigen
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    /*$reason = htmlspecialchars($_POST['reason']);*/
    $message = htmlspecialchars($_POST['message']);

    // E-Mail-Adresse, an die die Nachricht gesendet wird
    $to = 'gleis50.ch@gmail.com';
    // Betreff der E-Mail
    $subject = "Neue Kontaktanfrage von $name";
    // Inhalt der E-Mail
    $emailContent = "Name: $name\n";
    $emailContent .= "E-Mail: $email\n";
    /*$emailContent .= "Kontaktgrund: $reason\n";*/
    $emailContent .= "Nachricht:\n$message\n";

    // E-Mail-Header
    $headers = "From: $name <$email>";

    // Senden der E-Mail
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Vielen Dank für Ihre Nachricht!";
    } else {
        echo "Es gab ein Problem beim Senden der Nachricht.";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method Not Allowed";
}
?>