/**
 * VRAI ET VRAI = VRAI
 * VRAI ET FAUX = FAUX
 * FAUT ET FAUX = FAUX
 * --------------------
 * VRAI OU FAUX = VRAI
 * FAUX OU FAUX =  FAUX
 * VRAI OU VRAI = VRAI
 */

/**
 * L'ordre des inversion d'une ou des condition (s)
 * ==================================================
 * Si (a || b) <== son inverse donne ==> (!a && !b)
 * Si (a && b) <== son inverse donne ==> (!a || !b)
 */
// const age = 16
// const pays = 'US'
// const peutConduireFrance = pays === "FR" && age >= 18
// const peutConduireUS = pays === "US" && age >= 16

// if (peutConduireFrance) {
//     console.log("Vous avez le droit de conduire en France")
// } else if (peutConduireUS) {
//     console.log("Vous avez le droit de conduire aux Etats Unis")
// } else {
//     console.log("Vous n'avez pas le droit de conduire")
// }

// if (
//     (pays !== "FR" || age < 18) &&
//     (pays !== "US" || age < 16)
// ) {
//     console.log("Vous avez le droit de conduire")
// } else {
//     console.log("Vous n'avez pas le droit de conduire")
// }


// switch (pays) {
//     case "FR":
//         console.log("Je suis en France")
//         break
//     case "US":
//         console.log("Je suis aux Etats Unis")
//         break
//     default:
//         console.log("Je suis dans une pays inconnue")
// }

// Exercices 1:
/**
 * ageUser <= 13 => Lilo & Stich
 * 13 <= ageUser <= 18 => Matrix
 * ageUser >= 18 => Evil Dead
 */
// const year = 2022
// const birthyear = prompt("Quel est votre année de naissance : ") * 1
// const ageUser = year - birthyear

// if (ageUser <= 13) {
//     console.log("Lilo & Stich")
// } else if (ageUser < 18) {
//     console.log("Matrix")
// } else {
//     console.log("Evil Dead")
// }

// Exercices 2:
const nombre1 = prompt("Entrer le premier nombre : ") * 1
const nombre2 = prompt("Entrer le deuxieme nombre : ") * 1
const resultat = nombre1 * nombre2
const message = `(${nombre1}) x (${nombre2}) = ${nombre1 * nombre2} est`
let signe

// if (resultat > 0) {
//     console.log(`(${nombre1}) x (${nombre2}) = ${resultat} est positif`)
// } else {
//     console.log(`(${nombre1}) x (${nombre2}) = ${resultat} est négatif`)
// }

// if (nombre1 * nombre2 > 0) {
//     console.log(`${message} positif`)
// } else {
//     console.log(`${message} négatif`)
// }
if (isNaN(resultat)) {
    console.log(`Opération impossible (${nombre1}) x (${nombre2})`)
} else {
    if (resultat > 0) {
        signe = 'positif'
    } else {
        signe = 'négatif'
    }
    console.log(`${message} ${signe}`)
}
