/**
 * @param {boolean} haveWon 
 */
export function result (haveWon) {
  const root = document.getElementById('root')
  const h1 = document.createElement('h1')
  
  const keyboard = document.getElementById('keyboard') 
  root.removeChild(keyboard)// asi podemos borrar el div que usamos para el keyboard

  if (haveWon) {
    h1.textContent = `Has ganado, la palabra era: "${window.chosenWord}"`
  } else {
    h1.textContent = `Has perdido, la palabra era: "${window.chosenWord}". Inténtalo de nuevo`
  }
  
  root.appendChild(h1)
}
