// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
