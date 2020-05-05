console.log('project is up')

// 1- Create a function called 'get'
// that takes a CSS selector as its argument
// and executes document.querySelector with the argument.
const get = selector => {
  return document.querySelector(selector)
}


// 2- Using 'get', select the following elements from the DOM:

// BUTTONS
const launchButton = get('#launchButton')
const confirmButton = get('#confirmButton')
const cancelButton = get('#cancelButton')
// MESSAGES
const successMessage = get('h1.success')
const failureMessage = get('h1.failure')
// MODAL
const modal = get('div.modal')
const modalOpacity = get('div.modal-opacity')


// 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(event) {
  modal.classList.remove('off')
  successMessage.classList.add('off')
  failureMessage.classList.add('off')
}
launchButton.addEventListener('click', launch)


// 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm(event) {
  modal.classList.add('off')
  successMessage.classList.remove('off')
}
confirmButton.addEventListener('click', confirm)

// 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel(event) {
  modal.classList.add('off')
  failureMessage.classList.remove('off')
}
cancelButton.addEventListener('click', cancel)


// 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(event) {
  if (event.key === 'Escape') {
    modal.classList.add('off')
  }
}
document.addEventListener('keydown', escKey)


// 7- Add to document an event listener for click events.
// It should console.dir the target of the event.
// Play with stopPropagation and stopImmediatePropagation
Array.from(document.all).forEach(elem => elem.addEventListener('click', event => {
  console.log('🎯 target:        ', event.target)
  console.log('🧭 current target:', event.currentTarget)
  console.log('\n')
}))

modal.addEventListener('click', event => {
  console.log('stopping propagation on its tracks!')
  event.stopPropagation()
})


// 8- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 9- Using the mouseOver event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.

// 10- Create a link and prevent its default behavior
