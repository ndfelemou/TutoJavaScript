/**
 * Permet de savoir si l'utilisateur peut conduire
 *
 * @param {number} age : est l'âge de l'utilisateur
 * @param {string} country : Code pays sur 2 carracteres
 * @returns {boolean}
 */
// function canDrive(age, country) {
//     if (age >= 18) {
//         return true;
//     } else if (country === "US" && age >= 16) {
//         return true;
//     }
//     return false;
// }
//
// function isMajeur(age) {
//     return age >= 18
// }

/**
 * @returns {{id: number, title: string, body: string}}
 */
// function fetchPost(){
//
// }

/**
 * @returns {{id: number, title: string, body: string}[]}
 */
// function fetchPost2(){
//
// }


/**
 * @returns {Array<string>}
 */
// function getPosts(){
//
// }

/**
 *
 * @returns {Promise<{id: number, title: string, body: string}[]>}
 */
// async function getPosts2(){
//
// }

/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title Titre de l'article
 * @property {string} body Contenu de l'article
 */

/**
 *
 * @returns {Promise<Post[]>}
 */
// async function allUsers(){
//
// }


// const a = canDrive(18, "FR")
// console.log(a)

// const post = fetchPost()
// const a = getPosts()


// const a = allUsers().then((posts) => {
//     const post = posts[0];
//     post.title
// })


/**
 * @property {string} firstname
 * @property {string} lastname
 */
class A {
    constructor() {
        /**
         * Prénom de l'utilisateur
         * @type {string[]}
         */
        this.firstname = []
    }
}

const a = new A();