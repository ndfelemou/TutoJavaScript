# COURS DE JAVASCRIPT

## 1. INTRODUCTION

      - JavaScript = Langage de programmation
      - ECMA = Organisme de standadisation
      - ECMA-262 = ECMAScript Language Specification
      - NB: Nous allons travailler avec la standard ES2022

## 2. Les variables:

On peut difinir les variables par (let, const, var)

      - const : Permet de déclaré des constantes
      - let : Pour déclaré les variables dont le contenu peut changer au FMT
      - var : Pour déclaré les variables et qui a un access global dans le code mais n'est plus utiliser

## 3. Les conditions:

Les conditions sont les intructions permettant de laisser de l'ordre a l'ordintateur, pour pouvoir executer certaine
choses certaines etape sont verifier nous avons ()

      - VRAI  ET  VRAI  =  VRAI
      - VRAI  ET  FAUX  =  FAUX
      - FAUT  ET  FAUX  =  FAUX

      - VRAI  OU  FAUX  =  VRAI
      - FAUX  OU  FAUX  =  FAUX
      - VRAI  OU  VRAI  =  VRAI

#### L'ordre des inversion d'une ou des condition (s)

      - Si (a || b) : son inverse donne => (!a && !b)
      - Si (a && b) : son inverse donne => (!a || !b)

## 4. Les Boucles

      Les boucles permettent d'exécuter du code une certaine fois tant qu'une condition est respecter
      Nous avons les boucles (*for*, *while*, *do while*, etc...)

## 5. Les fonctions

      Les fonctions permettent de factoriser une ou des parties logique de notre code, elles ont un grand avantage
      On a plusieurs type de declaration de fonctions avec le mot clef

### 1. function nomFonction(params1, params2, ..., paramsn)

### 2. soit avec const nomFonction = fonction(params1, params2, ..., paramsn)

      La particularite entre ses deux maniere de declaration une fonction est la suivante
      la premiere maniere permette d'utiliser ou d'appeler la fonction en haut avant sa definition
      quant a la deuxieme maniere il est explicitement neccessaire d'appeler la fonction apres sa defintion et n'est
      assessible que dans le bloc ou il est defini
      NB: Si l'on souhaite creer une fonction global a tout le programme alors il faut le definir la fonction avec le mot clef (function)
   
      Lorsqu'on creer une fonction dans un objet alors cette est appeller (methode)

## 6. Les classes et la POO

    Les prototypes ou les classes sont des fonctions
    Les fonctions qui sont definies dans les classes n'ont pas besoins d'avoir le mot clef (function)
    Les Getters et les Setters sont des methodes qui sont appeler automatiquement ou dynamiquements
    Tout les types, objects de base en JS fonctionnent avec un système de prototypes
    Lorsqu'on accède à une propriété on vérifie si cette propriétés existe dans l'objet courrant et 
    Si ce n'est pas le cas on regarde dans son prototype et remontée jusqu'à l'objet qui n'aura plus de propriétées
    On peut créer nos propres prototypes grâces au mot class NomPrototype et en suite on défine toutes les propriétées de notre prototype

    On peut également définir des propriétées ou des méthodes comme static 
    (mais dans ce cas elles seront uniquement accessible sur l'objet qui sert de prototype plutôt que sur les différentes instance)

### a. Les prototype des prototypes (heritage des classes)

## 7. Gestion des erreurs

    Parfois nos fonctions vont recevoir des paramètres qui ne conviennent pas et il faudra être capable de renvoyer une erreur quand cela arrive. Il est possible de renvoyer une erreur à l'aide de l'opérateur throw.

    function setNotes (notes) {
    if (!Array.isArray()) {
        throw new Error('Les notes doivent être un tableau')
    }
        this.notes = notes
    }
    L'objet Error sera construit avec une chaine de caractères qui permettra de décrire la raison de l'erreur. On pourra aussi lui passer un objet en second argument qui contiendra une propriété cause qui permettra de donner plus d'informations sur la cause de l'erreur.
    
    Le throw va faire remonter l'erreur et bloquer le script si elle n'est pas capturée. Il est possible de capturer les erreurs en utilisant le try...catch
    
    try {
    // du code qui peut renvoyer des erreurs
    } catch (e) {
    // Ce code sera éxécuté si il y a eu une erreur
    }
    Il est possible de re-envoyer une erreur et d'utiliser la cause pour conserver la cause originale du problème
    
    try {
    // du code qui peut renvoyer des erreurs
    // a plusieurs endroits
    } catch (e) {
    throw new Error("Impossible de faire l'action", {cause: e})
    }
    Vous pouvez aussi créer des classes d'erreur personnalisées pour pouvoir les identifier par la suite
    
    class PromptError extends Error{
    
        constructor(originalPrompt) {
            super(, {cause: originalPrompt})
        }
    
    }
    On peut ensuite utiliser cette erreur à la place de la classe Error
    
    function promptInt (msg) {
    const n = prompt(msg) * 1
    if (Number.isNaN(n)) {
    throw new PromptError("Le nombre n'est pas valide", {cause: msg})
    }
    return n
    }

## 8. Les fonctions usuelles
    Dans ce chapitre nous allons passer en revue les fonctions utiles que vous êtes le plus susceptible d'utiliser.
    
    Les fonctions sur les nombres
    Les fonctions sur les chaînes de caractères
    Les fonctions sur les tableaux
    Les fonctions sur les objets
    Les fonctions sur les fonctions

## 9. Le sucre syntaxique

    En JavaScript il existe pas mal de syntaxes alternatives qui vont nous permettre d'écrire du code plus simplement. 
    Cette simplification est appelée "sucre syntaxique"

    L'incrémentation
    Vous pouvez incrémenter rapidement une valeur en utilisant la syntax ++ ou --

    i++ // équivalent à i = i + 1
    i-- // équivalent à i = i - 1

    Vous pouvez mettre le ++ et -- avant le nom de la variable pour changer la valeur de retour (mais cela ne change pas le fonctionnement de l'incrémentation)
    let i = 0
    ++i // retourne 1, là ou i++ retourne 0

    Enfin, vous pouvez aussi utiliser des opérations mathématiques lors de l'assignation
    
    i += 4 // Equivalent à i = i + 4
    i /= 3 // Equivalent à i = i / 3
    i *= 3 // Equivalent à i = i * 3
    
    Les conditions
    Tout d'abord le ternaire permet de simplifier une condition avec la syntaxe suivante
    
    <condition> ? <valeur si condition vrai> : <valeur si condition fausse>
    
    Cela permet de simplifier cette condition
    
    let message
    if (age >= 18) {
    message = 'Vous pouvez entrer'
    } else {
    message = 'Vous ne pouvez pas entrer'
    }
    Ce qui donnera avec du ternaire
    
    const message = age >= 18 ? 'Vous pouvez entrer' : 'Vous ne pouvez pas entrer'
    On peut aussi dériver l'utilisation des opérateurs booléens pour éviter de faire une condition
    
    const b = a || 3 // Ne vaudra 3 que si la valeur de a est falsy
    const c = a && 3 // Ne vaudra 3 que si la valeur de a est truthy
    
    // Ces opérateurs peuvent aussi être utilisé lors de l'assignation
    a ||= 3 // Equivalent à a = a || 3
    a &&= 3 // Equivalent à a = a && 3
    Il existe un opérateur supplémentaire qui permet de tester si la valeur est null ou undefined plutôt que falsy. Cet opérateur est appelé un opérateur de coalescence des nuls (Nullish coalescing operator)
    
    const b = a ?? 3 // Ne vaudra 3 que si la valeur de a est null ou undefined
    Enfin, l'opérateur ?. permettra de faire de l'optional chaining et d'accéder à une propriété sur un objet s'il existe, en renvoyant undefined si la valeur est null ou undefined.
    
    Cela permet de simplifier ce genre de syntaxe
    
    // On doit vérifier si les ancêtre existe avant d'accéder à la propriété
    if (person && person.job && person.job.salary) {
    console.log(person.job.salary.value)
    }
    Pour devenir
    
    console.log(person?.job?.salary?.value)
    La déstructuration
    L'affectation par décomposition (destructuring en anglais) permet de créer des variables à partir des propriétés d'un objet ou des valeurs d'un tableau plus facilement.
    
    const [note1, note2] = [12, 16, 18, 19] // note1 = 12, note2 = 16
    
    const person = {firstname: 'John', lastname: 'Doe'}
    const {firstname, lastname} = person // firstname = 'John', lastname: 'Doe'
    Cette destructuration peut être particulièrement utile lorsqu'une fonction attend comme paramètre un objet
    
    function isMajeur ({age, country}) {
    // ...
    }
    Il est aussi possible d'utiliser le spread operator ... pour extraire tous les éléments restant dans une variable. Dans le cas des tableaux ce spread operateur doit être utilisé pour le dernier élément seulement.
    
    const [note1, note2, ...rest] = [12, 16, 18, 19] // rest = [18, 19]
    const [...rest, note4] = [12, 16, 18, 19] // Uncaught SyntaxError: Rest element must be last element
    
    const person = {firstname: 'John', lastname: 'Doe', age: 18}
    const {firstname, ...personWithoutFirstname} = person // personWithoutFirstname = {lastname: 'Doe', age: 18}
    Cette syntaxe peut être utilisée pour remplacer certaines méthodes que l'on a vu sur les tableaux
    
    const [firstItem, ..._] = [1, 2, 3, 4, 5, 6]
    Décomposition
    La décomposition permet d'utiliser un itérable à la place de plusieurs arguments (dans le cas des fonctions) ou de plusieurs éléments (dans le cas des tableaux) ou de paires clés-valeurs (pour les objets)
    
    Dans le cas des fonctions :
    
    function sum (...items) {
    return items.reduce((acc, item) => item + acc, 0)
    }
    
    items(1, 2, 3, 4)
    const numbers = [1, 2, 6, 8]
    sum(...numbers) // 17
    Dans le cas des tableaux cet opérateur peut permettre de simplifier plusieurs opérations comme la fusion de tableaux ou la création de nouveaux tableaux
    
    const a = [1, 2]
    const b = [3, 4]
    const c = [...a, ...b] // [1, 2, 3, 4]
    const d = [...a, 3, 4] // [1, 2, 3, 4]
    // On peut aussi créer un clone d'un tableau pour éviter de le modifier "en place"
    const reversedA = [...a].reverse()
    Le fonctionnement dans le cas des objets est similaire
    
    const a = {x: 3, y: 2}
    const b = {...a, width: 10, height: 10} // {x: 3, y:2, width: 10, height: 10}

