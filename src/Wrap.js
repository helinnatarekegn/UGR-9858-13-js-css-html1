document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Smooth scroll to the target
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close the mobile menu if open
            const mobileMenuCheckbox = document.getElementById('check');
            mobileMenuCheckbox.checked = false;
        });
    });

    // Mobile Menu
    const mobileMenuCheckbox = document.getElementById('check');
    const navUl = document.querySelector('.homen ul');

    mobileMenuCheckbox.addEventListener('change', () => {
        if (mobileMenuCheckbox.checked) {
            navUl.style.left = '0';
        } else {
            navUl.style.left = '-100%';
        }
    });
});
