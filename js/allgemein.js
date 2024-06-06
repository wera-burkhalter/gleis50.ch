document.getElementById('MenuIcon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Optional: Klick außerhalb des Menüs, um es zu schließen
document.addEventListener('click', function(event) {
    var menu = document.getElementById('menu');
    var menuIcon = document.getElementById('MenuIcon');
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.style.display = 'none';
    }
});