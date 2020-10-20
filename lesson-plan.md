# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* Test out with the students the git flow for resetting their branch to the instructor's.

## 2- Instructor's Checklist of Things to Cover

* Project architecture: the script tag and the defer attribute.
* Event-driven programs: they wait for the user to do something.
* JS programs need the help of their environment.
* Events in the DOM and their types.
* Event listeners or handlers.
* The 3 ways of adding a `click` handler or listener to an element.
* The event object and the information it contains.
* Drawing or diagram to explain event propagation in the DOM.
* The capture, target and bubbling phases of an event of type `click`.
* The target of an event and the _current_ target of an event as it bubbles up the DOM.
* How to prevent the default behaviour of an element with `preventDefault`.
* How propagation can be stopped with `stopPropagation` and `stopImmediatePropagation`.
* How to set up a listener to fire during the capture phase.
* Debugging techniques: log statements and breakpoints.

## 3- Demo Part I (Building a Modal Window)

* Toggle the `off` classNames inside `index.html` so students can understand the finished product.
* Starting at `👉 TASK 1` inside `index.js` follow the instructions in the comments.
* Comment out the console.logs after you're done with them to preserve sanity.

## 4- Demo Part II (Event Propagation)

* Starting at `👉 TASK 7` inside `index.js` follow the instructions in the comments.
* Use the console heavily to see the event propagating.
* Comment out each console.log after you're done with it, to preserve sanity.

## 5- Links of Interest

* [Event Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)
* [Intro to Events on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [addEventListener on MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## 6- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
