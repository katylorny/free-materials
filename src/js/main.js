// слайдер

import Swiper from "swiper"

// const isActive = false

// eslint-disable-next-line no-unused-vars
const mySwiper = new Swiper(`.swiper-container`, {
    slidesPerView: 1,
    // If we need pagination
    pagination: {
        el: `.swiper-pagination`,
    },

    // Navigation arrows
    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },

    // And if we need scrollbar
    scrollbar: {
        el: `.swiper-scrollbar`,
    },

    // Responsive breakpoints
    breakpoints: {
    // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        // when window width is >= 640px
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    }
})

// попап

const openPopupButtons = document.querySelectorAll(`.trackers__button`)
const closePopupButton = document.querySelector(`.popup__close-button`)
const overlay = document.querySelector(`.overlay`)
const popup = document.querySelector(`.popup`)
const footer = document.querySelector(`.footer`)


function openPopup() {
    overlay.classList.remove(`overlay--closed`)
    popup.classList.remove(`popup--closed`)
    footer.classList.add(`footer--modal-opened`)
}

function closePopup() {
    overlay.classList.add(`overlay--closed`)
    popup.classList.add(`popup--closed`)
    footer.classList.remove(`footer--modal-opened`)
}

openPopupButtons.forEach((el) => {
    el.addEventListener(`click`, (evt) => {
        evt.preventDefault()
        openPopup()

    })
})
closePopupButton.addEventListener(`click`, () => {
    closePopup()
})
overlay.addEventListener(`click`, () => {
    closePopup()
})

document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 27 && !popup.classList.contains(`popup--closed`)) {
        closePopup()
    }
})

