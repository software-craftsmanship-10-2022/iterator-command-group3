import CommandHandler from "../CommandHandler"
import { symbolAgeIterator } from "../../Infrastructure/AgeIterator"
import PersonCollection from "../../Infrastructure/PersonCollection"

export default class OrderbyAge implements CommandHandler {
    private list: PersonCollection

    constructor(list: PersonCollection) {
        this.list = list
    }

    execute() {
        const persons = symbolAgeIterator(this.list, false)

        for (const person of persons) {
            console.log(person)
        }
    }
}