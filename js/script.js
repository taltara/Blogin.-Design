'use strict';

$(".contact-footer-scroller").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".main-footer").offset().top
    }, 1000);
});


var journalDb = [

    {img: 'assets/001.png', title: 'Duis aute irure dolor in henderit in voluptate.', text: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.']},
    {img: 'assets/002.png', title: 'Duis aute irure dolor in henderit in voluptate.', text: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.']},
    {img: 'assets/003.png', title: 'Duis aute irure dolor in henderit in voluptate.', text: ['Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.']},

];


function goToPage(selectedIdx) {
    
    var elMainNav = document.querySelectorAll('.main-nav li');
    
    elMainNav.forEach((nav, i) => {

        if(i === selectedIdx) {
            nav.setAttribute("id", "active-nav");
        } else {

            nav.setAttribute("id", "");
        }
    });

    if(selectedIdx === 3 && document.body.classList.contains('menu-open')) {

            
            toggleMenu();
    }

    
}

function focusButton(elButton) {

    elButton.textContent = 'Continue Reading  →';
    elButton.style.color = '#58c93a';
    elButton.style.borderColor = '#58c93a';
}

function unfocusButton(elButton) {
    
    elButton.textContent = 'Continue Reading';
    elButton.style.color = '#c2c2c2';
    elButton.style.borderColor = '#c2c2c2';
}

function toggleMenu() {

    document.body.classList.toggle('menu-open');
    // var elNav = document.querySelector('.main-nav');

    document.querySelector('.btn-menu').classList.toggle('active-btn-menu');
}

function openModal(idx) {

    var showcaseJournal = journalDb[idx - 1];
    document.querySelector('.modal-body img').src = showcaseJournal.img;
    document.querySelector('.modal-title').textContent = showcaseJournal.title;
    document.querySelector('.modal-body-text1').textContent = showcaseJournal.text[0];
    document.querySelector('.modal-body-text2').textContent = showcaseJournal.text[1];
    document.querySelector('.modal-body-text3').textContent = showcaseJournal.text[2];

    $('.modal').modal('toggle');
}

