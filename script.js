// Funkce pro přepnutí tmavého a světlého režimu
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeIcon = document.querySelector('.mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.textContent = "🌕"; // Ikona pro světlý režim
    } else {
        modeIcon.textContent = "🌙"; // Ikona pro tmavý režim
    }
}

// Funkce pro zobrazení a skrytí responzivního menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
}

// Funkce pro validaci hesel
function validatePasswords(event) {
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const errorElement = document.getElementById('password-error');

    if (password1 !== password2) {
        event.preventDefault();  // Zabrání odeslání formuláře
        errorElement.textContent = 'Hesla se neshodují!';
    } else {
        errorElement.textContent = '';
    }
}

// Funkce pro zobrazení ikony "Zpět nahoru"
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Přidání event listenerů
document.addEventListener('DOMContentLoaded', function() {
    // Přepnutí tmavého režimu
    const modeToggle = document.querySelector('.mode-toggle');
    modeToggle.addEventListener('click', toggleMode);

    // Přepnutí menu
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', toggleMenu);

    // Validace formuláře
    const passwordForm = document.getElementById('password-form');
    passwordForm.addEventListener('submit', validatePasswords);

    // Ikona "Zpět nahoru"
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    backToTopButton.addEventListener('click', scrollToTop);
});

