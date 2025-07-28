const moyenne = (notes) => {
    let sum = 0
    for (let note of notes) {
        sum += note
    }
    return sum / notes.length
}

/**
 * La classes Student(Eleve ou Etudiant)
 */
class Student {
    ecole = "IST Mamou"
    _notes = []

    // Constructeur par defaut
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    /** Getter et Setters */
    set notes(v) {
        if (Array.isArray(v)) {
            this._notes = v
        }
    }

    get name() {
        return `${this.firstname} ${this.lastname}`
    }

    get notes(){
        console.log("Notes: ", this._notes)
    }

    // setNotes(notes) {
    //     this.notes = notes;
    // }

    canPass() {
        return moyenne(this._notes) >= Student.moyenne
    }

    static moyenne = 10

    static hello() {
        console.log("Bonjour a tous !")
    }
}

class SuperStudent extends Student{
    _notes = []
    constructor(firstname, lastname, email, notes) {
        super(firstname, lastname);
        this.email = email;
        this._notes = notes;
    }

    canPass() {
        return true
    }

    // get notes(){
    //     console.log("Notes: ", this._notes)
    // }

    get name() {
        return `Super ${super.name}`
    }
}


// const daniel = new Student("Daniel", "Félémou")
// const jane = new Student("Jane", "Doe")

// daniel.setNotes([18, 19, 20])
// jane.setNotes([10, 10, 9])
//
// console.log(daniel, jane)
// console.log(daniel.canPass(), jane.canPass())

// daniel.notes = 19
// daniel.notes = [18, 19, 20]

// console.log(daniel.canPass(), jane.canPass())
// console.log(daniel.name)


const daniel = new Student("Daniel", "Félémou")
const jane = new SuperStudent("Jane", "Doe")
const shadow = new SuperStudent("Walker", "Shadow", "shadow@walker.fr", [17, 18, 19.85])

daniel.notes = [17, 19, 19.85]
jane.notes = [0, 10, 8]

// console.log(daniel.name)
console.log(shadow.canPass())