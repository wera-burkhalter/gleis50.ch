<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formularwerte abrufen und validieren
    $kontaktgrund = htmlspecialchars($_POST['kontaktgrund']);
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-Mail-Adresse, an die die Nachricht gesendet wird
    $to = "gleis50.ch@gmail.com";
    $subject = "Neue Nachricht vom Kontaktformular";

    // Nachricht zusammenstellen
    $email_content = "Kontaktgrund: $kontaktgrund\n";
    $email_content .= "Name: $name\n";
    $email_content .= "E-Mail: $email\n\n";
    $email_content .= "Nachricht:\n$message\n";

    // E-Mail-Header
    $headers = "From: $name <$email>";

    // E-Mail senden
    if (mail($to, $subject, $email_content, $headers)) {
        echo "success"; // Erfolgsnachricht zurückgeben
    } else {
        echo "error"; // Fehlermeldung zurückgeben
    }
} else {
    echo "Ungültige Anforderung.";
}
?>