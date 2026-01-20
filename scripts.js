document.addEventListener('DOMContentLoaded', () => {
    
    // --- Мобильное меню ---
    const nav = document.getElementById('nav');
    const burger = document.getElementById('burger');
    const closeBtn = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    function toggleMenu() {
        nav.classList.toggle('open');
    }

    burger.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);
    
    // Закрываем меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
        });
    });

    // --- FAQ Аккордеон ---
    const accordions = document.querySelectorAll('.accordion__header');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- Cookie Notice ---
    const cookieNotice = document.getElementById('cookie-notice');
    const cookieAccept = document.getElementById('cookie-accept');

    // Показываем через 2 секунды, если еще не приняли
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieNotice.classList.add('show');
        }, 2000);
    }

    cookieAccept.addEventListener('click', () => {
        cookieNotice.classList.remove('show');
        localStorage.setItem('cookiesAccepted', 'true');
    });

    // --- Плавный скролл для якорей (для старых браузеров) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target){
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
