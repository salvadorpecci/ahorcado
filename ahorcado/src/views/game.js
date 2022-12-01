import { result } from "./result.js"
import { resetElement } from "../utils/resetElement.js"
import { welcome } from "./welcome.js"

export function game () {
  const root = document.getElementById('root')
  
  const div = createKeyboard()
  const length = window.chosenWord.length
  
  // Variables globales de la partida
  window.dashes = createDashesArray(length)
  window.life = 6
  
  const p = document.createElement('p')
  p.id = 'word-to-guess'
  p.textContent = dashes.join(' ')
  
  const img = createImage()
  const resetButton = createResetButton()
  
  root.appendChild(div)
  root.appendChild(p)
  root.appendChild(img)
  root.appendChild(resetButton)
}

/**
 * @returns {HTMLElement}
 */
function createKeyboard () {
  const div = document.createElement('div')
  div.id = 'keyboard' 
  
  for (let i = 65; i < 91; i++) {
    const btn = createButtonKeyboard(i)
    div.appendChild(btn)
  }

  return div
}

/**
 * @returns {HTMLButtonElement}
 */
function createButtonKeyboard (int) {
  const btn = document.createElement('button')
  
  btn.addEventListener('click', handleClick)
  const char = String.fromCharCode(int)  
  btn.textContent = char

  return btn
}

/**
 * @returns {string[]}
 */
function createDashesArray (length) {
  let array = []

  for(let i = 0; i < length; i++) {
    array.push('_')
  }

  return array
}
/**
 * @returns {HTMLImageElement}
 */
function createImage (){
  const img = document.createElement('img')
  img.id = 'hangman'
  img.src = `./assets/images/${window.life}.png`
  
  return img
}
/**
 * @param {PointerEvent} e
 */
function handleClick(e) {
  const letter = e.target.textContent
  e.target.disabled = true 
  
  if(letterInChosenWord(letter)) {
    updateDashes(letter)
  } else {
    window.life--
    const img = document.getElementById('hangman')
    img.src = `./assets/images/${window.life}.png`
  }
  checkGame()
}

/**
 * @returns {boolean}
 */
function letterInChosenWord(letter) {
  return window.chosenWord.includes(letter)
}

/**
 * @param {string} letter
 */
function updateDashes (letter) {
  const length = window.chosenWord.length
    
  for (let i = 0; i < length; i++) {
    if(window.chosenWord[i] === letter) {
      window.dashes[i] = letter
    }
  }
  const p = document.getElementById('word-to-guess')
  p.textContent = dashes.join(' ')
}

function checkGame() {
  if (window.life === 0) {
    result(false)
    return // asi nos salios de la función con el return y no estamos devolviendo nada
  }

  if (!window.dashes.includes('_')) {
    result(true)
    return
  }
}
/**
 * @returns {HTMLElement}
 */
function createResetButton () {
  const btn = document.createElement('button')
  btn.textContent = "Jugar de nuevo"
  btn.addEventListener('click', resetGame)
  return btn
}

function resetGame () {
  const root = document.getElementById('root')
  resetElement(root)
  welcome()
}
