console.log("=================================================================")
console.log("================= SYSTEME DE GESTION D'UNE ECOLE ================")
console.log("=================================================================")

/**
 * Enoncé du projet :
 * Créer une application simple (en mode console) permettant de gérer les entités suivantes :
 * Niveaux (ex : CP, CE1, Terminale…)
 * Classes (ex : 6e A, Terminale S2…)
 * Élèves
 * Notes
 * ==============
 * 🧱 Entités à gérer :
 * 1. 📘 Niveau
 * id (généré automatiquement)
 * nom (ex : CP, CE1, 3e, Terminale)
 *
 * Actions :
 * Ajouter un niveau
 * Modifier un niveau
 * Supprimer un niveau
 * Lister tous les niveaux
 *
 * 2. 🏫 Classe
 * id
 * nom (ex : 6e A, Terminale S2)
 * niveauId (référence à un Niveau)
 *
 * Actions :
 * Ajouter une classe
 * Modifier une classe
 * Supprimer une classe
 * Lister toutes les classes d’un niveau
 *
 * 3. 👨‍🎓 Élève
 * id
 * nom
 * prenom
 * classeId (référence à une Classe)
 *
 * Actions :
 * Ajouter un élève
 * Modifier un élève
 * Supprimer un élève
 * Lister les élèves d’une classe
 *
 * 4. 📊 Note
 * id
 * eleveId
 * matiere (ex : Mathématiques, Français…)
 * valeur (de 0 à 20)
 *
 * Actions :
 * Ajouter une note à un élève
 * Modifier une note
 * Supprimer une note
 * Afficher les notes d’un élève
 * Calculer la moyenne des notes d’un élève
 *
 * =========================
 * 💡 Consignes supplémentaires :
 * Utilise la programmation orientée objet (POO) avec des classes : Niveau, Classe, Eleve, Note, Ecole (pour gérer tout le système).
 * Stocke les données dans des tableaux (tu pourras ensuite utiliser des fichiers JSON ou une BDD).
 * Chaque classe aura des méthodes CRUD pour gérer ses entités.
 * Gère les erreurs : par exemple, empêcher d’ajouter un élève dans une classe inexistante.
 * ==============================================================
 * ✅ Exemple de scénario à implémenter (à la main ou via menu) :
 * Ajouter le niveau 6ème.
 * Ajouter la classe 6ème A dans ce niveau.
 * Ajouter deux élèves : Ali Camara, Fatou Diallo dans la classe 6ème A.
 * Ajouter des notes pour chaque élève (maths, français).
 * Afficher les notes et la moyenne de Ali Camara.
 */

class Niveau {
    #id = Math.floor(Math.random() * (100 + 1));
    #niveaux = []

    constructor(nomNiveau) {
        this.nomNiveau = nomNiveau
    }

    set addNiveau(niveau){
        return this.#niveaux.push(niveau);
    }
}

