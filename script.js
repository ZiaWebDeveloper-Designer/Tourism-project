// script.js

// --- Scroll Animation ---
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// --- Contact Form ---
const form = document.querySelector('.form form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = form.querySelector('textarea');

let formMessage = document.createElement('div');
form.appendChild(formMessage);
formMessage.style.marginTop = '10px';
formMessage.style.fontWeight = 'bold';

form.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault(); // prevent default behavior
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
    } else {
        formMessage.textContent = "Please fill all fields correctly.";
        formMessage.style.color = "red";
    }
});