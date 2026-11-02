document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            alert(`Welcome back, ${email}! This is a demo. In a live site, this would connect to a database.`);
        });
    }

    // Smooth page transitions
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.href.includes('.html')) {
                console.log('Navigating to:', this.href);
            }
        });
    });
});