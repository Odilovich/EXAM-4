"use strict"

let body = $('body');
let selectBtn = $('#select-nav-btn')
let popupSection = $('#popup')
let bgPopup = $('#bg-body');
let backBtn = $('#back');
let cardPopup = $('#card-popup');
let formPopup = $('#form-popup');
let cardAcces = $('#card-acces');
let accesCloseBtn = $('#close-btn');

bgPopup.addEventListener('click', () => {
    toggle()
})



function toggle() {

    popupSection.classList.toggle('none')

    body.classList.toggle('hidden')

}

selectBtn.addEventListener('click', () => {

    toggle()

})

backBtn.addEventListener('click', () => {

    toggle()
    
});

// popupForm.addEventListener('submit', () => {
//     cardPopup.classList.add('none')
//     cardAcces.classList.add('flex')
// })

// cardPopup.addEventListener('click', (e) => {
//     if (e.target.classList.contains('acces__wrapper-btn')) {
//         togglePopup()
//     }
// })


