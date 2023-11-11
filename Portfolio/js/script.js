window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".section");

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const textElements = section.querySelectorAll(".resize-text");

        if (rect.top <= 400 && rect.bottom >= 400) {
            textElements.forEach((textElement) => {
                textElement.style.fontSize = "2rem"; // Adjust the font size as needed
            });
        } else {
            textElements.forEach((textElement) => {
                textElement.style.fontSize = "1rem"; // Adjust the font size as needed
            });
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
            behavior: 'smooth'
        });
    }
});
