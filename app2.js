// Active links in nav
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Welcome message in Home
document.getElementById('welcome-btn').addEventListener('click', function() {
    const msgDiv = document.getElementById('welcome-message');
    if (msgDiv.style.display === 'none' || msgDiv.style.display === '') {
        msgDiv.textContent = 'Welcome to Bluecrest International School!';
        msgDiv.style.display = 'block';
    } else {
        msgDiv.style.display = 'none';
    }
});

// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let hasError = false;
    // Clear error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('message-error').textContent = '';

    // Get inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '') {
        document.getElementById('name-error').textContent = 'Please enter your name.';
        hasError = true;
    }
    if (email === '') {
        document.getElementById('email-error').textContent = 'Please enter your email.';
        hasError = true;
    } else if (!validateEmail(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        hasError = true;
    }
    if (message === '') {
        document.getElementById('message-error').textContent = 'Please enter your message.';
        hasError = true;
    }

    if (!hasError) {
        alert('Thank you for contacting Bluecrest International School! We received your message.');
        this.reset();
    }
});
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^@\s]+\.)+[^@\s]{2,})$/i;
    return re.test(email.toLowerCase());
}

// Smooth scroll for navigation
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        const sectionId = this.getAttribute('href');
        if (sectionId.startsWith('#')) {
            e.preventDefault();
            document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
        }
    });
});