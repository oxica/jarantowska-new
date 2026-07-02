// Ефект 3D нахилу для карток (Parallax Effect)
const cards = document.querySelectorAll('.glass-panel');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // координата X мишки всередині картки
        const y = e.clientY - rect.top; // координата Y мишки всередині картки
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Обчислюємо кут нахилу (макс 7 градусів)
        const rotateX = ((centerY - y) / centerY) * 7;
        const rotateY = ((x - centerX) / centerX) * 7;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    // Скидання стилів, коли мишка йде з картки
    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    });
});

// Підсвічування активних посилань у меню
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(lnk => lnk.classList.remove('active'));
        this.classList.add('active');
    });
});

