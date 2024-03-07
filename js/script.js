document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const content = document.getElementById("header");
    burger.addEventListener("click", () => {
        content.classList.toggle("open");
    });
});