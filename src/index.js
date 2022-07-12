console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('h1.success')
const failureMessage = document.querySelector('h1.failure')

// C- MODAL
const modal = document.querySelector('div.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html

//  B- The DOM's element.onclick attribute
launchButton.onclick = function (event) {
  console.log('only one of these click handlers fit per element')
}

//  C- element.addEventListener('click', callback)
// Start simple and build towards this, explaining the event object:
launchButton.addEventListener('click', function (event) {
  console.log('we can add as many as we want to the same element')
  console.log(`
    event type:   ${event.type}
    event target: ${event.target.nodeName}
    timestamp:    ${Math.floor(event.timeStamp / 1000)}
  `)
})

// If doing well with time, make the point we can add big listeners
// to the document to handle clicks on a specific element
document.addEventListener('click', function (event) {
  if (event.target === launchButton) {
    console.log('clicking on the launch button')
  } else {
    console.log('clicking somewhere else in the document')
  }
})

// Demo looping over an array of elements adding listeners as you go,
// throwing in the use of preventDefault
Array.from(document.links).forEach(lk => {
  lk.addEventListener('click', function (event) {
    event.preventDefault()
    console.log(`The "${event.target.textContent}" link is not taking you anywhere`)
  })
})


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch(event) {
  modal.classList.remove('off')
  successMessage.classList.add('off') // DO NOT ADD THIS until later when the bug is apparent
  failureMessage.classList.add('off') // DO NOT ADD THIS until later when the bug is apparent
}
launchButton.addEventListener('click', launch)


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
// Explain with pseudo code and allow students 2' or 3' to attempt.
function confirm(event) {
  modal.classList.add('off')
  successMessage.classList.remove('off')
}
confirmButton.addEventListener('click', confirm)


// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
// Explain with pseudo code and allow students 2' or 3' to attempt.
function cancel(event) {
  modal.classList.add('off')
  failureMessage.classList.remove('off')
}
cancelButton.addEventListener('click', cancel)


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
// Use a breakpoint to study the event object looking for useful info.
// Then explain with pseudo code and allow students 2' or 3' to attempt.
function escKey(event) {
  if (event.key === 'Escape') {
    modal.classList.add('off')
  }
}
document.addEventListener('keydown', escKey)


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
document.querySelectorAll('*').forEach(elem => elem.addEventListener('click', event => {
  console.log('🎯 target:        ', event.target)
  console.log('🧭 current target:', event.currentTarget)
  console.log('\n')
}))

modal.addEventListener('click', event => {
  console.log('stopping propagation in its tracks!')
  event.stopPropagation()
})


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
document.addEventListener("mousemove", evt => {
  console.log(`x: ${evt.clientX}...y: ${evt.clientY}`);
})
