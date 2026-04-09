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
    if (e.key === 'Escape') {
        closeImageModal();
        return;
    }
    
    if (document.querySelector('.image-modal-overlay.active')) {
        return;
    }
    
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

let modalOverlay = null;

function openImageModal(images, isMulti = false) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'image-modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'image-modal-content';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'image-modal-close';
    closeBtn.innerHTML = '✕';
    closeBtn.onclick = closeImageModal;
    
    if (isMulti && Array.isArray(images)) {
        const multiContainer = document.createElement('div');
        multiContainer.className = 'image-modal-multi';
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = '图片';
            multiContainer.appendChild(img);
        });
        modalContent.appendChild(multiContainer);
    } else {
        const img = document.createElement('img');
        img.src = images;
        img.alt = '图片';
        modalContent.appendChild(img);
    }
    
    modalContent.appendChild(closeBtn);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeImageModal();
        }
    });
    
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            if (modalOverlay && modalOverlay.parentNode) {
                modalOverlay.parentNode.removeChild(modalOverlay);
            }
            modalOverlay = null;
        }, 300);
    }
    document.body.style.overflow = '';
}

function toggleImage(toggle) {
    const content = toggle.nextElementSibling;
    if (!content) return;
    
    const images = content.querySelectorAll('img');
    const placeholders = content.querySelectorAll('.image-placeholder');
    
    // If there are image placeholders but no images, show placeholder content
    if (images.length === 0 && placeholders.length > 0) {
        openPlaceholderModal(placeholders);
        return;
    }
    
    if (images.length === 0) return;
    
    if (images.length === 1) {
        openImageModal(images[0].src);
    } else {
        const imageSources = Array.from(images).map(img => img.src);
        openImageModal(imageSources, true);
    }
}

function openPlaceholderModal(placeholders) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'image-modal-overlay';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'image-modal-content';
    modalContent.style.maxWidth = '800px';
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'image-modal-close';
    closeBtn.innerHTML = '✕';
    closeBtn.onclick = closeImageModal;
    
    const placeholderContainer = document.createElement('div');
    placeholderContainer.style.display = 'flex';
    placeholderContainer.style.flexWrap = 'wrap';
    placeholderContainer.style.gap = '20px';
    placeholderContainer.style.justifyContent = 'center';
    placeholderContainer.style.padding = '20px';
    
    placeholders.forEach(placeholder => {
        const clone = placeholder.cloneNode(true);
        clone.style.minWidth = '300px';
        clone.style.flex = '1';
        placeholderContainer.appendChild(clone);
    });
    
    modalContent.appendChild(placeholderContainer);
    modalContent.appendChild(closeBtn);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeImageModal();
        }
    });
    
    setTimeout(() => {
        modalOverlay.classList.add('active');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}
