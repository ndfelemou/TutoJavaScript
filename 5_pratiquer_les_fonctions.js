/**
 * Exercice 1 :
 * L'objectif de cet exercice est de créer une fonction
 * isPalindrome() qui renverra vrai si un mot est un palindrome et false sinon.
 * La fonction ne sera pas sensible à la casse.
 */

// function isPalindrome(word){
//     const letters = word.split('').reverse().join('')
//     return word.toUpperCase() === letters.toUpperCase()
// }
//
//
// console.log(isPalindrome("Kayak"))
// console.log(isPalindrome("Sos"))
// console.log(isPalindrome("Bonjour"))
// console.log(isPalindrome("Osiso"))
// console.log(isPalindrome("Oko"))
// console.log(isPalindrome("Non"))

/**
 * Exercice 2 :
 * Dans cet exercice on souhaite modifier l'objet suivant pour ajouter une
 * propriété moyenne qui contiendra la moyenne de chaque élève.
 */
/**
 const students = [
 {
 name: 'John',
 notes: [1, 20, 18, 19, 12]
 },
 {
 name: 'Jane',
 notes: [17, 18, 20, 13, 15]
 },
 {
 name: 'Sophie',
 notes: [17, 12, 14, 15, 13]
 },
 {
 name: 'Marc',
 notes: [2, 3, 5, 8, 9]
 },
 {
 name: 'Manon',
 notes: [18, 17, 18, 19, 12]
 },
 {
 name: "Félémou",
 notes: [18, 17, 18, 19, 20]
 }
 ]

 const moyenne = (notes) => {
 let sum = 0
 for (let note of notes) {
 sum += note
 }
 return sum / notes.length
 }

 const compareStudent = (a, b) => {
 return b.moyenne - a.moyenne
 }

 for (let student of students) {
 student.moyenne = moyenne(student.notes)
 student.worst = Math.min(...student.notes)
 student.best = Math.max(...student.notes)
 }

 const formatStudent = (student) => {
 return `${student.name} avec une moyenne de (${student.moyenne}), meilleur note (${student.best}), mauvaise note (${student.worst})`
 }

 students.sort(compareStudent)
 console.log(`Top 3 des étudiants
 1 : ${formatStudent(students[0])}
 2 : ${formatStudent(students[1])}
 3 : ${formatStudent(students[2])}
 `)
 // console.log(students)
 // moyenne([18, 17, 18, 19, 20])

 **/


/**
 * Exercice 3:
 * Nous allons créer un système capable de calculer la fréquence des mots dans une chaine de caractère. L'objectif sera dans un premier temps d'obtenir un objet qui contiendra en propriété le mot, et en valeur le nombre d'occurence ({bonjour: 3, maison: 2})
 */
// const phrase = `L’informatique n’est pas plus la science des ordinateurs que l’astronomie n’est celle des télescopes. L’essence même de cette discipline réside dans la manière dont nous structurons la logique, modélisons les données, concevons des algorithmes pour résoudre des problèmes, et construisons des systèmes capables d’interagir avec le monde réel tout en restant robustes, sécurisés, évolutifs et performants. Le véritable défi en informatique n’est pas seulement technique : il est aussi humain, organisationnel et éthique. Comprendre cela, c’est comprendre que derrière chaque ligne de code, il y a une intention, une responsabilité et un impact.`

const phrase = `Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation. Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres.`
const frequencies = {}
const ignored = [',', '.', '?', '!', '<<', '>>', ':', ';', '...']
let cleanedPhrase = phrase.toLowerCase()

for (let character of ignored) {
    cleanedPhrase = cleanedPhrase.replaceAll(character, '')
}

const words = cleanedPhrase.split(' ')

for (let word of words) {
    if (word !== "" && word.length >= 3) {
        if (frequencies[word]) {
            frequencies[word]++
        } else {
            frequencies[word] = 1
        }
    }
}

const frequenciesArray = []
for (let k in frequencies) {
    frequenciesArray.push({
        word: k, count: frequencies[k]
    })
}

frequenciesArray.sort((a, b) => b.count - a.count)
console.log(`Les mots les plus frequents sont 
1: "${frequenciesArray[0].word}" (${frequenciesArray[0].count} fois)
2: "${frequenciesArray[1].word}" (${frequenciesArray[1].count} fois)
3: "${frequenciesArray[2].word}" (${frequenciesArray[2].count} fois)`)

// console.log(words)
// console.log(frequencies)
// console.log(frequenciesArray)
