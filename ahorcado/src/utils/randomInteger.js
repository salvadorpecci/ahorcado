/**
 * @param {number} min
 * @param {number} max
 */
export function randomInteger (min, max) {
    return Math.floor(Math.random() * max) + min
}
