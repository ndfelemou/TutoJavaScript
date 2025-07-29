// const p = new Promise((resolve, reject) => {
//     resolve(4)
// })


// p
//     .then((n) => {
//         console.log(`Le nombre : ${n}`)
//         return 5
//     }).then((n) => console.log(`Le nombre 2 : ${n}`))
//     .catch((e) => {
//         console.log(`Erreur : ${e}`)
//     }).finally(() => console.log('qwerty'))


function wainSync(duration) {
    const t = Date.now()
    while (Date.now() - t < duration) {

    }
}

function wait(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(duration)
        }, duration)
    })
}

function waitAndFail(duration) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(duration)
        }, duration)
    })
}


// wait(2000)
//     .then(() => {
//         console.log("Attente 2s")
//         return wait(1000)
//     })
//     .then(() => {
//         console.log("Attente 1s")
//     })

// async function main() {
//     try {
//         await waitAndFail(2000)
//         console.log('Salut')
//
//         await wait(1000)
//         console.log('Bonsoir en JavaScript ......')
//     } catch (e) {
//         console.log("Erreur")
//     }
// }

async function main() {
    const duration = await wait(2000)
    console.log(`Duration: ${duration}`)
    return 5
}

function waitAndLog(duration, msg) {
    return wait(duration).then(() => console.log(msg))
}

// console.log(main())
// main().then(n => console.log(n))
// main()

// Promise.all([wait(1000), waitAndFail(2000)])
//     .then(console.log)
//     .catch(console.log)

// Promise.allSettled([wait(1000), waitAndFail(2000)])
//     .then(console.log)
//     .catch(console.log)

// Promise.any([waitAndFail(1000), waitAndFail(2000)])
//     .then(console.log)
//     .catch(console.error)

// Promise.race([waitAndFail(1000), wait(2000)])
//     .then(console.log)
//     .catch(console.error)

/*
const p = new Promise((r) => {
    console.log('Hello')
    r(2)
})
p.then(() => console.log('Then'))

wainSync(2000)
console.log('Les gens')
*/


