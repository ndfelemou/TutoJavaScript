// let i = 0
// while (i < 10) {
//     console.log(`Bonjour ${i}`)
//     i++
// }

// const notes = [12, 13, 16, 8]
// const person = {
//     firstname: 'Daniel',
//     lastname: 'Geek FELEMOU'
// }
// const citation = "Le seul bug, c'est entre la chaise et le clavier."

// for (let i = 0; i < notes.length; i++) {
//     console.log(`Note ${i+1} : ${notes[i]}`)
// }

// for(let i in notes){
//     console.log(notes[i])
// }

// for (let note of notes){
//     console.log(note)
// }

// for (let letter in citation) {
//     console.log(letter)
// }

/**
 * Exercies 1 :
 * Un programme qui demande a l'utilisateur un chiffre entre [0 et 10]. Verifier que le chiffre est bien entre 0 et 10
 * Si ce n'est pas le cas afficher quelque chose a la console pour lui dire qu'il y a une erreur
 * Si le chiffre de l'user est bien entre 0 et 10, Afficher tout les chiffres qui sont en dessouce de ce chiffre
 */

// let userNombre = prompt("Entrer un nombre entre 0 et 10 : ") * 1
// if (userNombre < 0 || userNombre > 10) {
//     console.log(">> Erreur : Vous dévriez entré un nombre entre 0 et 10")
// } else {
//     console.log(`Le nombre que vous avez saisi est : ${userNombre}`)
//     for (let i = userNombre; i >= 0; i--) {
//         console.log(i)
//     }

//     console.log("========================================")
//     while (userNombre >= 0) {
//         console.log(userNombre)
//         userNombre--
//     }
// }

let guess = 8
let chiffre

while (chiffre !== guess) {
    chiffre = prompt("Veuillez saisir un autre nombre : ") * 1
    if (chiffre < guess) {
        console.log("Trop petit !!!")
    } else if (chiffre > guess) {
        console.log("Trop grand !!!")
    }
}
console.log(`Felicitations !!! vous avez deviné !`)
