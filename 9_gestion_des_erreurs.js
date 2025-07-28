class Rectangle {
    constructor(width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error("Impossible d'avoir une forme avec des dimensions négatives.");
        }
        this.width = width
        this.height = height
    }

    get perimeter() {
        return 2 * (this.width + this.height)
    }

    get isValid() {
        return this.width > 0 && this.height > 0
    }

    isBiggerThan(shape) {
        return this.perimeter > shape.perimeter;
    }
}

class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
}

// try {
//     const r = new Rectangle(-10, 20)
// } catch (e) {
//     console.log(e.message)
// }

class PromptError extends Error{
    
}

function promptRectangle() {
    try {
        const width = parseInt(prompt("Largeur :"), 10)
        const height = parseInt(prompt("Hauteur :"), 10)
        return new Rectangle(width, height);
    } catch (e) {
        throw new PromptError("Entrée utilisateur invalide ❌", {cause: {code: 404, url: 'http://localhost:8000'}})
    }
}

try{
    promptRectangle()
}catch(e){
    if(e instanceof PromptError){
        console.log('Prompt Error')
    }else{
        console.log('Erreur classique')
    }
}