/**
 * 
 * @param {HTMLElement} element 
 */
export function resetElement(element){
  while (element.firstElementChild) {
    element.removeChild(element.firstElementChild)
  }
}
