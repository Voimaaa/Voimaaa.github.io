"use strict";

document.getElementById('success-message').classList.add('hidden');
document.getElementById('success-message-newsletter').classList.add('hidden');


function showPopup() {
    window.scrollTo(0, 0);
    document.getElementById('success-message').classList.remove('hidden');
    document.body.classList.add("stop-scrolling"); 
}

function closePopup() {
    document.getElementById('success-message').classList.add('hidden');
    document.body.classList.remove("stop-scrolling"); 
}

function showPopupNewsletter() {
    window.scrollTo(0, 0);
    document.getElementById('success-message-newsletter').classList.remove('hidden');
    document.body.classList.add("stop-scrolling"); 
}

function closePopupNewsletter() {
    document.getElementById('success-message-newsletter').classList.add('hidden');
    document.body.classList.remove("stop-scrolling"); 
}