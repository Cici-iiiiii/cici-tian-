// Keyboard navigation
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        slides[index].scrollIntoView({ behavior: 'smooth' });
        currentSlide = index;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToSlide(currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goToSlide(currentSlide - 1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(slides.length - 1);
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            currentSlide = Array.from(slides).indexOf(entry.target);
        }
    });
}, { threshold: 0.5 });

slides.forEach(slide => observer.observe(slide));

// Image toggle
function toggleImage(toggle) {
    const content = toggle.nextElementSibling;
    const isActive = content.classList.contains('active');
    
    // Close all others
    document.querySelectorAll('.collapsible-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.collapsible-toggle').forEach(t => t.classList.remove('active'));
    
    // Toggle current
    if (!isActive) {
        content.classList.add('active');
        toggle.classList.add('active');
    }
}
