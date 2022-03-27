let rateButtons = document.querySelectorAll('.rating__start__rate button')
let submitButton = document.querySelector('.rating__start__submit button')
let choice = ''
let resultText = document.querySelector('.rating__end__text__choice span')
let ratingStart = document.querySelector('.rating__start')
let ratingEnd = document.querySelector('.rating__end')

const onlyOneActive = () => {
   rateButtons.forEach(btn => {
      if (btn.classList.contains('--active')) {
         btn.classList.remove('--active')
         choice = ''
         return
      }
   })
}

const removeRatingStart = () => {
   ratingStart.style.animation = 'fadeOut 1s ease-in-out forwards'
   setTimeout(() => {
      ratingStart.style.display = 'none'
   }, 1000)
}

rateButtons.forEach(button => {
   button.addEventListener('click', event => {
      onlyOneActive()
      event.target.classList.add('--active')
      choice = event.target.value
   })
})

submitButton.addEventListener('click', () => {
   if (choice == '') return
   console.log(choice)
   resultText.textContent = choice
   removeRatingStart()
   setTimeout(() => {
      ratingEnd.style.display = 'block'
   }, 1000)
})

