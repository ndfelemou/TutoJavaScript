// const notes = [12, 17, 18]
// console.log(notes.at(-1))
//
// const notes2 = [19, 10, 14]
// console.log(notes2.concat(notes))

// const notes3 = [12, 17, 18, 9, 7]
// const goodNotes = notes3.filter((note) => note >= 10)
// console.log(goodNotes)

// const languages = ["JavaScript", "Python", "Java", "C", "C++", "C#", "PHP", "TypeScript", "Ruby", "Go", "Swift", "Kotlin", "Rust", "R", "Dart", "Scala", "Perl", "Haskell", "Lua", "Objective-C", "SQL", "Bash", "Assembly", "MATLAB", "Groovy", "Elixir", "Clojure", "F#", "Fortran", "COBOL"];
//
// function searchByName(lang){
//     const index = languages.indexOf(lang);
//     if(index === -1){
//         return `${lang} not found in the list.`;
//     }
//     return `Searching for ${lang}.\nElement: "${lang}" found at index: ${index}.`;
// }
//
// console.log(searchByName("PHP"))

// const persons = [
//     {firstname: "Daniel", lastname: "FELEMOU"},
//     {firstname: "Marie", lastname: "DUPONT"},
//     {firstname: "Jean", lastname: "MARTIN"},
//     {firstname: "Sophie", lastname: "BERNARD"},
//     {firstname: "Pierre", lastname: "PETIT"},
//     {firstname: "Lucie", lastname: "LEROY"},
//     {firstname: "Thomas", lastname: "MOREAU"},
//     {firstname: "Camille", lastname: "FOURNIER"},
//     {firstname: "Nicolas", lastname: "GIRARD"},
//     {firstname: "Isabelle", lastname: "ROUSSEAU"}
// ];

// console.log(persons.map((p) => 'Fullname : ' + p.firstname + ' ' + p.lastname).join('\n'))

// function deletePerson(name) {
//     return persons.filter(p => p.firstname !== name)
// }
//
// let updatePerson = deletePerson("Isabelle")
//
// console.log(updatePerson.map((p) => 'Fullname : ' + p.firstname + ' ' + p.lastname).join('\n'))
//
//
// console.log("============================================================================")
// let userToDelete = prompt("Entrer le nom de l'user dont vous souhaiter supprimer ? ");
// updatePerson = deletePerson(userToDelete)
//
// console.log(updatePerson.map((p) => 'Fullname : ' + p.firstname + ' ' + p.lastname).join('\n'))

// console.log(persons.map((p) => 'Fullname : ' + p.firstname + ' ' + p.lastname).join('\n'))

// const notes = [12, 18, 19]
// console.log(notes.reduce((acc, note) => acc + note, 0))

// class A {
//
//     constructor() {
//     }
//
//     set field(v){
//         console.log("Hello")
//     }
// }
//
// const a = new A();
// Object.defineProperty(a, 'field', {
//     value: 3
// })

const person = {firstname: "Daniel", lastname: "FELEMOU"}

for (let key of Object.keys(person)) {
    for(let val  of Object.values(person)) {
        console.log(val)
    }
}