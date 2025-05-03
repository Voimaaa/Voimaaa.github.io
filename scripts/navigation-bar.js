"use strict";

let phoneNavigation = document.getElementById("phone-navigation");
phoneNavigation.style.visibility = 'hidden'

function toggleNavigationbar() {
    if (phoneNavigation.style.visibility == 'hidden') {
        document.getElementById('bar-icon').classList.remove('fa-bars');
        document.getElementById('bar-icon').classList.add('fa-xmark');
        phoneNavigation.style.visibility = 'visible'
    } else if (phoneNavigation.style.visibility == 'visible') {
        document.getElementById('bar-icon').classList.remove('fa-xmark');
        document.getElementById('bar-icon').classList.add('fa-bars');
        phoneNavigation.style.visibility = 'hidden'
    }
};

function closeNavBar() {
    phoneNavigation.style.visibility = 'hidden';
    document.getElementById('bar-icon').classList.remove('fa-xmark');
    document.getElementById('bar-icon').classList.add('fa-bars');
};