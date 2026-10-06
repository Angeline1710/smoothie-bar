// Interactive elements

document.addEventListener('DOMContentLoaded', () => {
    // Add interactive click effects to menu cards
    const cards = document.querySelectorAll('.menu-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Create a ripple effect
            const ripple = document.createElement('div');
            
            this.appendChild(ripple);
            
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 51, 102, 0.3)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left}px`;
            ripple.style.top = `${e.clientY - rect.top}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Animate badges on scroll or hover
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseover', () => {
            const randomRotation = Math.floor(Math.random() * 20) - 10;
            badge.style.transform = `scale(1.2) rotate(${randomRotation}deg)`;
        });
        
        badge.addEventListener('mouseout', () => {
            // Reset to original transforms (defined in CSS)
            if(badge.classList.contains('badge-1')) badge.style.transform = 'rotate(-10deg)';
            if(badge.classList.contains('badge-2')) badge.style.transform = 'rotate(10deg)';
            if(badge.classList.contains('badge-3')) badge.style.transform = 'rotate(-5deg)';
        });
    });
});

// Add ripple animation to document
const style = document.createElement('style');
style.innerHTML = `
@keyframes ripple {
    to {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);
