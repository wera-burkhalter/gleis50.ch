/* document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Absenden des Formulars

    // Formulardaten erfassen
    const name = document.getElementById('name').value;
    const selectedOption = document.querySelector('input[name="option"]:checked')?.value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Überprüfung der Formulardaten
    if (!name || !selectedOption || !email || !message) {
        alert('Bitte füllen Sie alle Felder aus.');
        return;
    }

    // Hier können Sie die Daten an Ihren Server senden
    console.log('Formulardaten:', { name, selectedOption, email, message });
    alert('Formular erfolgreich gesendet!');

    // Formular zurücksetzen
    document.getElementById('contactForm').reset();
}); */