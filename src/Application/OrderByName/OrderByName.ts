import PersonCollectionInterface from "../../Domain/PersonCollectionInterface"
import CommandHandler from "../CommandHandler"

export default class OrderByName implements CommandHandler {
    private list: PersonCollectionInterface

    constructor(list: PersonCollectionInterface) {
        this.list = list
    }

    execute() {
        const iterator = this.list.getNameIterator()

        while (iterator.hasMore()) {
            console.log(iterator.getNext())
        }
    }
}