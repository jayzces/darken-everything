const cards = document.querySelectorAll('.card')
const button = document.querySelector('button')
const mainContainer = document.querySelector('.page')
const popupContainer = document.querySelector('.popup')

const generateFocus = (parentClass, targetClass) => {
    if (targetClass) {
        let currentFocused = document.querySelector('.focus')

        if (currentFocused != null) {
            currentFocused.classList.remove('focus')
            mainContainer.classList.remove('focusing')
            popupContainer.classList.remove('open')
        }

        let children = document.querySelectorAll(`.${parentClass} .${targetClass}`)
        let focusIndex = Math.floor(Math.random() * children.length)
        children[focusIndex].classList.add('focus')
        mainContainer.classList.add('focusing')
        popupContainer.classList.add('open')
    }
}


// initialize
generateFocus('page', 'card')

button.addEventListener('click', () => {
    generateFocus('page', 'card')
})

window.addEventListener('keydown', e => {
    if (e.keyCode == 32) generateFocus('page', 'card')
})


cards.forEach(card => card.addEventListener('click', e => {
    if (card.classList.contains('focus')) {
        card.classList.remove('focus')
        mainContainer.classList.remove('focusing')
        popupContainer.classList.remove('open')
    }

    if (e.target === e.currentTarget) card.classList.toggle('click')
}))
