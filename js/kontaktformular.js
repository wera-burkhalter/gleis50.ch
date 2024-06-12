// Einfache Validierung beim Absenden des Formulars
//document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Überprüfen, ob das Formular validiert ist//
    //if (!event.target.checkValidity()) {
        //event.preventDefault();
        //alert('Bitte füllen Sie alle Felder korrekt aus.');
        //}
    //});


    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Verhindert das Standardverhalten des Formulars
    
        // Überprüfen, ob das Formular validiert ist
        if (!event.target.checkValidity()) {
            alert('Bitte füllen Sie alle Felder korrekt aus.');
            return;
        }
    
        const formData = new FormData(this);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'sendEmail.php'); 
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                const responseMessage = document.getElementById('responseMessage');
                if (xhr.status === 200) {
                    responseMessage.textContent = 'Merci viu mau für dini Nachricht!';
                    responseMessage.style.display = 'block';
                    document.getElementById('contactForm').reset();
                } else {
                    responseMessage.textContent = 'Es het es Problem gäh bim sände vo dire Nachricht. Bitte probbiers später nomau.';
                    responseMessage.style.display = 'block';
                }
            }
        };
        xhr.send(formData);
    });
    

