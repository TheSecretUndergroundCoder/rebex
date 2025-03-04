document.addEventListener("DOMContentLoaded", function() {
    // Sidebar Toggle
    window.toggleSidebar = function() {
        document.querySelector(".nav-links").classList.toggle("show");
    };

    // Dark Mode Toggle
    window.toggleDarkMode = function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    };

    // Load Dark Mode Preference
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    // Dynamic Text Messages
    const messages = [
        "Welcome to Rebex!",
        "Rebex is here to help!",
        "Upgrade your Discord server!",
        "Meet your new server assistant!",
    ];

    let index = 0;
    setInterval(() => {
        document.getElementById("dynamic-text").textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 3000);
});
