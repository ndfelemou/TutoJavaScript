// let i = 0
// i++
// console.log(i)
//
// let j = 3
// j += 3
// console.log(j)
//
// let i = 2
// i *= 5
// console.log(i)
//
// let i = 10
// i /= 2
// console.log(i)

// const double = n => n * 2
// console.log(double(3))

// const a = 0
// const b = a || 5
// const c = b ?? 10
//
// console.log(b)
// console.log(c)

// let a
// const b = a ?? 5
//
// console.log(b)

// let a
//
// a ??= 2025
// console.log(a)
//
// let b
// b ||= 7
// console.log(b)

// const person = {firstname: "Daniel", lastname: "FELEMOU", job: {name: "Informaticien"}}
// console.log(person.job.name ?? "Developper")
// console.log(person.job?.name)

// const person = {firstname: "Daniel", age: 26}
// console.log(person?.age?.toString())


// const [premiereNote, ...autresNotes] = [12, 17, 18, 19, 20]
// console.log(premiereNote, autresNotes)

// const {firstname, ...rest} = {
//     firstname: "Daniel",
//     lastname: "FELEMOU",
//     age: 18
// }

// function canDrive({age, pays, region}) {
//     if(region === undefined){
//         region = 'Paris'
//     }
//     return true
// }

// console.log(canDrive({age: 26, pays: "FR"}))

// function pow(n, power = 2){
//
// }

// pow(3)

// const notes = [1, 2]
// const notes2 = [...notes, 10, 15, 20]
// console.log(notes, notes2)

// const person = {firstname: "Daniel", lastname: "FELEMOU"}
// const personWithAge = {...person, age: 26}
// const personWithAgeAndAddress = {...personWithAge, address: "Fossidet"}
//
// console.log(person)
// console.log(personWithAge)
// console.log(personWithAgeAndAddress)


// const age = 26
// let message = age >= 18 ? "Majeur" : "Mineur"
// console.log(message)

