document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded");
    var burgerMenu = document.getElementById("burger-menu");
    var dropdownMenu = document.getElementById("dropdown-menu");
    var overlay = document.getElementById("overlay");
    var closeButton = document.getElementById("close-button");

    function closeDropdown() {
        dropdownMenu.classList.add("hidden");
        dropdownMenu.style.display = "none";
        overlay.classList.add("hidden");
    }

    burgerMenu.addEventListener("click", function() {
        console.log("Burger menu clicked");
        if (dropdownMenu.classList.contains("hidden")) {
            dropdownMenu.classList.remove("hidden");
            dropdownMenu.style.display = "flex"; // Ensure the dropdown is displayed
            overlay.classList.remove("hidden");
        } else {
            closeDropdown();
        }
    });

    overlay.addEventListener("click", closeDropdown);
    closeButton.addEventListener("click", closeDropdown);
});