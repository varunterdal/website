// Update the copyright year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Close the mobile navigation menu after clicking a link
const navToggle = document.getElementById("navToggle");

document.querySelectorAll(".navbar__link").forEach(link => {
    link.addEventListener("click", () => {
        if (navToggle) {
            navToggle.checked = false;
        }
    });
});