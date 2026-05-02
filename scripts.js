// JavaScript functionality for Denzora website

// Form Validation
function validateForm() {
    const form = document.forms['contactForm'];
    const name = form['name'].value;
    const email = form['email'].value;
    const message = form['message'].value;

    if (name === '' || email === '' || message === '') {
        alert('All fields must be filled out!');
        return false;
    }
    // Additional validation logic can go here.
    return true;
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animations
const elements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('fade-in');
        }
    });
});

// Interactivity
const button = document.getElementById('interactiveBtn');
button.addEventListener('click', () => {
    alert('Button was clicked!');
    // Additional interactivity logic can go here.
});
