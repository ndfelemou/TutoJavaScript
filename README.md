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