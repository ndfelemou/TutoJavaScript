// async function fetchUsers() {
//     const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Accept": "application/json",
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({title: "Mon premier article"})
//     })
//     console.log(r.headers.get("Content-Type"))
//     if (r.ok === true) {
//         return r.json()
//     }
//     throw new Error("Impossible de contacter le serveur")
// }
//
// fetchUsers()
//     .then(users => console.log(users))
//     .catch(err => console.log(err))

const a = new AbortController()

Promise.race([
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5&_delay=2000", {signal: a.signal}),
    fetch("https://jsonplaceholder.typicode.com/users?_limit=3", {signal: a.signal}),
]).then(r => r.json()).then(body => {
    a.abort()
    console.log(body)
})