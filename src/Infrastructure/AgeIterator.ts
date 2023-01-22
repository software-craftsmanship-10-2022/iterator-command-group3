import Person from "../Domain/Person"
import PersonCollection from "../Domain/PersonCollection"
import Iterator from "../Domain/Shared/Iterator"

export default class AgeIterator implements Iterator<Person> {
    position: number = 0
    collection: PersonCollection
    reverse: boolean
    people: Person[]

    constructor(collection: PersonCollection, reverse: boolean) {
        this.reverse = reverse
        this.collection = collection
        const list = collection.getPeople().sort((a, b) => a.age - b.age)
        this.people = reverse ? list.reverse() : list
    }

    getNext(): Person{
        const person = this.people[this.position]
        this.position += 1
        return person
    }

    hasMore(): boolean {
        return this.position < this.collection.getCount()
    };

    current(): Person {
        return this.people[this.position]
    }
}