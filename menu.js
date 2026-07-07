document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileOverlay = document.querySelector(".mobile-overlay");
    const mobileLinks = document.querySelectorAll(".nav-mobile a");

    // Функція перемикання меню
    const toggleMenu = () => {
        menuToggle.classList.toggle("active");
        mobileOverlay.classList.toggle("active");
        
        // Блокуємо скрол сайту під меню, коли воно відкрите
        document.body.style.overflow = mobileOverlay.classList.contains("active") ? "hidden" : "";
    };

    // Клік по гамбургеру
    menuToggle.addEventListener("click", toggleMenu);

    // Закриваємо меню при кліку на посилання (плавний скрол до секції)
    mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (mobileOverlay.classList.contains("active")) {
                toggleMenu();
            }
        });
    });
});

