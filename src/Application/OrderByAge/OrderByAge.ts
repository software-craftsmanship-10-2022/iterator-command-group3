import PersonCollectionInterface from "../../Domain/PersonCollectionInterface"
import CommandHandler from "../CommandHandler"

export default class OrderbyAge implements CommandHandler {
    private list: PersonCollectionInterface

    constructor(list: PersonCollectionInterface) {
        this.list = list
    }

    execute() {
        const iterator = this.list.getAgeIterator()

        while (iterator.hasMore()) {
            console.log(iterator.getNext())
        }
    }
}