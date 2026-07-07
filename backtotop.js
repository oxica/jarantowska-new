document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.querySelector(".back-to-top");

    // Функція перевірки прокрутки сторінки
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Клік по кнопці — плавний скрол до самого верху
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Ефект плавності
        });
    });
});