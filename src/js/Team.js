import Character from "./Character"

export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(obj) {
        if(obj instanceof Character) {
            if(this.members.has(obj)){
                throw new Error("Не повторяйтесь")
            } else {
                this.members.add(obj)
            }
        } else {
            throw new Error("!")
        }
    }

    addAll(...persons) {
        for (const pers of persons) {
            this.add(pers)
        }
    }

    toArray() {
        return Array.from(this.members)
    }
}
// const komanda = new Team();
// const pers = new Character("alex", "Zombie")
// const pers1 = new Character("ivan", "Undead")
// // komanda.add(pers)
// komanda.addAll(pers, pers1)
// console.log(komanda.toArray())