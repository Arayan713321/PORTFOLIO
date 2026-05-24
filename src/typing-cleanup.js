// Remove typing cursor after animation completes
setTimeout(() => {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typingElement.style.borderRight = 'none';
    }
}, 3500); // 500ms delay + 2500ms typing + 500ms buffer
