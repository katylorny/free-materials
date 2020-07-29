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

const openPopupButtonWater = document.querySelector(`.trackers__button--water`)
const openPopupButtonHabit = document.querySelector(`.trackers__button--habit`)


const closePopupButtonWater = document.querySelector(`.popup__close-button--water`)
const closePopupButtonHabit = document.querySelector(`.popup__close-button--habit`)
const overlay = document.querySelector(`.overlay`)
const popupWater = document.querySelector(`.popup--water`)
const popupHabit = document.querySelector(`.popup--habit`)
const footer = document.querySelector(`.footer`)


function openPopup(popupName) {
    if (existVerticalScroll()) {
        body.classList.add(`body-lock`)
        body.style.top = `-${body.dataset.scrollY}px`
    }

    overlay.classList.remove(`overlay--closed`)
    popupName.classList.remove(`popup--closed`)
    footer.classList.add(`footer--modal-opened`)
}

function closePopup() {
    overlay.classList.add(`overlay--closed`)
    footer.classList.remove(`footer--modal-opened`)

    const popups = document.querySelectorAll(`.popup`)
    popups.forEach((item) => {
        item.classList.add(`popup--closed`)
    })

    body.style.top = `0`
    if (existVerticalScroll()) {
        body.classList.remove(`body-lock`)
        window.scrollTo(0, body.dataset.scrollY)
    }
}

// openPopupButtons.forEach((el) => {
//     el.addEventListener(`click`, (evt) => {
//         evt.preventDefault()
//         body.dataset.scrollY = getBodyScrollTop()
//         openPopup()
//     })
// })
openPopupButtonWater.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    body.dataset.scrollY = getBodyScrollTop()
    openPopup(popupWater)
})

openPopupButtonHabit.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    body.dataset.scrollY = getBodyScrollTop()
    openPopup(popupHabit)
})


closePopupButtonWater.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    closePopup(popupWater)
})

closePopupButtonHabit.addEventListener(`click`, (evt) => {
    evt.preventDefault()
    closePopup(popupHabit)
})

overlay.addEventListener(`click`, (evt) => {
    evt.preventDefault()

    closePopup()
})

document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 27) {
        closePopup()
    }
})

