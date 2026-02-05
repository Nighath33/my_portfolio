document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if the user has a saved theme preference
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.textContent = "Dark Mode";
    } else {
        themeToggle.textContent = "Light Mode";
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Save user preference
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "Dark Mode";
        } else {
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "Light Mode";
        }
    });
});
