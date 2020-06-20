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

// блокировка скролла

const body = document.querySelector(`body`)


function existVerticalScroll() {
    return document.body.offsetHeight > window.innerHeight
}

function getBodyScrollTop() {
    // eslint-disable-next-line no-undef
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop)
}

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

    if (existVerticalScroll()) {
        body.classList.add(`body-lock`)
        body.style.top = `-${body.dataset.scrollY}px`
    }
}

function closePopup() {
    overlay.classList.add(`overlay--closed`)
    popup.classList.add(`popup--closed`)
    footer.classList.remove(`footer--modal-opened`)

    if (existVerticalScroll()) {
        body.classList.remove(`body-lock`)
        window.scrollTo(0, body.dataset.scrollY)
    }
}

openPopupButtons.forEach((el) => {
    el.addEventListener(`click`, (evt) => {
        evt.preventDefault()
        body.dataset.scrollY = getBodyScrollTop()
        openPopup()
    })
})
closePopupButton.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    closePopup()
})
overlay.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    closePopup()
})

document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 27 && !popup.classList.contains(`popup--closed`)) {
        closePopup()
    }
})

