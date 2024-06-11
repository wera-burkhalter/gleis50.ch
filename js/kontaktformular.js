// Einfache Validierung beim Absenden des Formulars
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Überprüfen, ob das Formular validiert ist//
    if (!event.target.checkValidity()) {
        event.preventDefault();
        alert('Bitte füllen Sie alle Felder korrekt aus.');
        }
    });

