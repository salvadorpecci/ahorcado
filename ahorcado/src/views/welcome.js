import { options } from "../options.js"
import { randomInteger } from "../utils/randomInteger.js"
import { game } from "./game.js"

export function welcome () {
  const root = document.getElementById('root')
  
  const fragment = createButtons()
  root.appendChild(fragment)
}

/**
 * @returns {HTMLElement}
 */
function createButtons () {
  const div = document.createElement('div')

  for (const option in options) {
    const btn = document.createElement('button')
    
    btn.textContent = option
    btn.classList.add('option-btn')
    btn.addEventListener('click', handleClick)

    div.appendChild(btn)
  }

  return div
}

/**
 * @param {PointerEvent} e
 */
function handleClick (e) {
  const key = e.target.textContent
  const randomPosition = randomInteger(0, options[key].length)
  window.chosenWord = options[key][randomPosition] //es un objeto que tiene un array dentro y le estamos pasando una posición concreta

  // Deshabilita los botones
  const buttons = document.querySelectorAll('.option-btn')

  for (const btn of buttons) {
    btn.disabled = true
  }

  game()
}
