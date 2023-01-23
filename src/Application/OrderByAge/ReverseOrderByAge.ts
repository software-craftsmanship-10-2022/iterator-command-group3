import PersonCollectionInterface from "../../Domain/PersonCollectionInterface"
import CommandHandler from "../CommandHandler"

export default class ReverseOrderByAge implements CommandHandler {
    private list: PersonCollectionInterface

    constructor(list: PersonCollectionInterface) {
        this.list = list
    }

    execute() {
        const iterator = this.list.getReverseAgeIterator()

        while (iterator.hasMore()) {
            console.log(iterator.getNext())
        }
    }
}
