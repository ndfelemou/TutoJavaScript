// function wait(duration) {
//     const t = Date.now();
//     while (Date.now() -t < duration) {
//
//     }
// }
//
// console.log("Bonjour...")
// wait(1000)
// console.log("Les gens !")

// console.log("Bonsoir ")
// setTimeout(() => {
//     console.log("les gens !")
// }, 1000)
//
// console.log("Au revoir...")

// console.log("Bonjour")
// const t = setInterval(() => {
//     console.log(" les gens........")
// }, 2000)
//
// console.log(t)

// console.log("Bonjour")
// setInterval(() => {
//     console.log(" les gens........")
// }, 2000)
//
// const p = prompt('nom')

/**
 * Exercice 1:
 * Ecrire un programme qui affiche un message 5 fois de suite
 * A travers un fonction decompte(n)
 */

// function decompte(n){
//     setInterval(() => {
//         for (let i = 0; i <= n; i++) {
//             console.log(n--)
//             break
//         }
//     }, 1000)
// }
//
// decompte(5)

// let i = 0
// const t = setInterval(() => {
//     i++
//     console.log('Bonjour')
//     if(i >= 5){
//         clearInterval(t)
//     }
// }, 1000)

// function decompte(n) {
//     console.log(n)
//     const t = setInterval(() => {
//         n--
//         console.log(n)
//         if (n === 0) {
//             clearInterval(t)
//         }
//     }, 1000)
// }
//
// decompte(5)

// function decompte(n) {
//     console.log(n)
//     if(n === 0) return
//     setTimeout(() => {
//         decompte(n - 1)
//     }, 1000)
// }
//
// decompte(5)