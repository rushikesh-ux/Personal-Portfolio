// Simple fade-in effect on scroll
window.addEventListener("scroll", () => {
    document.querySelectorAll(".stat").forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.transform = "translateY(0)";
            el.style.opacity = "1";
        }
    });
});
