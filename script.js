const main = document.querySelector(".main-container")
const ratingContainer = document.querySelector(".rating-final")
const submitButton = document.getElementById('submit')
const rated = document.getElementById('rated')
const ratingButton = document.querySelectorAll('.btn')

submitButton.addEventListener('click', () => {
    ratingContainer.classList.remove('hidden')
    main.style.display = "none"
})

ratingButton.forEach((rate) => {
    rate.addEventListener('click', () => {
        rated.innerHTML = rate.innerHTML
    })
})