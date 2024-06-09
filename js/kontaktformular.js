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

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Verhindert das Standard-Absenden des Formulars

        const formData = new FormData(form);
        fetch("send_email.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            if (result.trim() === "success") {
                const successMessage = document.getElementById("successMessage");
                successMessage.style.display = "block";
                successMessage.innerText = "Vielen Dank! Dein Formular wurde erfolgreich abgesendet.";
                form.reset(); // Formular zurücksetzen
            } else {
                const errorMessage = document.createElement("div");
                errorMessage.className = "error-message";
                errorMessage.innerText = "Entschuldigung, es gab ein Problem beim Senden Ihrer Nachricht.";
                form.appendChild(errorMessage);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.className = "error-message";
            errorMessage.innerText = "Entschuldigung, es gab ein Problem beim Senden Ihrer Nachricht.";
            form.appendChild(errorMessage);
        });
    });
});
