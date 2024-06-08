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
    const iconOptions = document.querySelectorAll(".icon-option input");

    iconOptions.forEach(option => {
        option.addEventListener("change", function() {
            // Alle Bilder zurücksetzen
            iconOptions.forEach(opt => {
                const img = opt.nextElementSibling.querySelector("img");
                img.src = img.getAttribute("src");
            });

            // Ausgewähltes Bild ändern
            const selectedImg = this.nextElementSibling.querySelector("img");
            selectedImg.src = selectedImg.getAttribute("data-selected");
        });

        // Hover-Effekte hinzufügen
        const label = option.nextElementSibling;
        const img = label.querySelector("img");
        label.addEventListener("mouseover", function() {
            img.src = img.getAttribute("data-hover");
        });
        label.addEventListener("mouseout", function() {
            if (!option.checked) {
                img.src = img.getAttribute("src");
            } else {
                img.src = img.getAttribute("data-selected");
            }
        });
    });
});
