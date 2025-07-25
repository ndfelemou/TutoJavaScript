// function canDrive(age, pays) {
//     if ((age >= 16 && pays === "US") || (age >= 18 && pays === "FR")) {
//         return true
//     }
//     return false
// }
// noinspection LanguageDetectionInspection

// const canDrive = function (age, pays) {
//     if ((age >= 16 && pays === "US") || (age >= 18 && pays === "FR")) {
//         return true
//     }
//     return false
// }

// console.log(canDrive(13, "FR"))


// function greeting(name) {
//     console.log(`Bonjour ${name} !`)
// }

// console.log(greeting("Daniel"))

// let notes = [12, 13, 14]

// function upNotes(notes){
//     notes[0]++
// }

// upNotes(notes)
// console.log(notes)

// function maFonction() {
//     console.log(this)
// }

// maFonction.call(3)

// const person = {
//     firstname: "Daniel",
//     lastname: "FELEMOU",
//     fullname: function () {
//         console.log(`${this.firstname} ${this.lastname}`)
//     }
// }

// person.fullname()

// ======================================
// ========= Fonctions flechees =========
// ======================================
// const maFonction = (params1, params2) => {
//     console.log(params1, params2);
// }

// maFonction("Daniel", 25)

// const somme = (a, b) => a + b
// console.log(somme(1, 2))

// const isPaire = function (a, cb) {
//     if (a % 2 === 0) {
//         cb(a)
//     }
// }

// isPaire(8, function (n) {
//     console.log(`Mon nombre ${n} est pair`)
// })

/**
 * Exercices 1
 * On creer un nombre aleatoire entre 0 & 10
 * 3 essaie pour deviner le nombre
 * isRight(nombre) => Pour retourne vrai ou faux si l'utilisateur a deviner le nombre
 * guess() => Qui demande a l'utilisateur de deviner le nombre, ensuite utiliser les boucles pour continuer
 */

// Solution 1 : Moi-meme
// guessNumber = Math.floor(Math.random() * 10)
// console.log(guessNumber)

// function isRight(n) {
//     return n === guessNumber
// }

// function guess() {
//     let userNombre
//     while (!isRight(userNombre)) {
//         userNombre = prompt("Deviner un nombre entre 0 et 10 : ") * 1
//         if (isRight(userNombre)) {
//             console.log("Felicitations !! Vous avez deviner le nombre")
//         } else {
//             console.log("Dommange !!")
//         }
//     }
// }

// guess()

// Solution 2
// function getRandomInt(max) {
//     return Math.floor(Math.random() * (max + 1))
// }
//
// const solution = getRandomInt(10)
// console.log(solution)
//
// function isRight(n){
//     return n === solution
// }
//
// function guess() {
//     const number = prompt("Entrer un chiffre entre 0 et 10 : ") * 1
//     return isRight(number)
// }
//
//
// for(let i = 0; i < 3; i++){
//     if(guess()){
//         console.log("Bravo !!!")
//         break
//     }else if(i === 2){
//         console.log("Vous avez perdu !")
//     }
// }

/**
 * Demander a l'utilisateur de donner un nombre
 * Verifier si le nombre est premier ou pas
 */

function isPair(n) {
    return n % 2 === 0
}

// console.log(isPair(2));

function isPremiere(n) {
    if (n < 2) {
        return false
    }
    for (let i = n - 1; i > 1; i--) {
        if (i % 2 === 0) {
            return false;
        }
    }
    return true;
}

console.log("0 est premier ? : ", isPremiere(0))
console.log("1 est premier ? : ", isPremiere(1))
console.log("2 est premier ? : ", isPremiere(2))
console.log("3 est premier ? : ", isPremiere(3))
console.log("4 est premier ? : ", isPremiere(4))
console.log("5 est premier ? : ", isPremiere(5))
console.log("6 est premier ? : ", isPremiere(6))
console.log("7 est premier ? : ", isPremiere(7))