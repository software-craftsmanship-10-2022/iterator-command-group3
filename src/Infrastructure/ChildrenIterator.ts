import Person from "../Domain/Person"
import PersonCollection from "./PersonCollection"
import Iterator from "../Domain/Shared/Iterator"

export default class ChildrenIterator implements Iterator<Person> {
    position: number = 0
    collection: PersonCollection
    reverse: boolean
    people: Person[]

    constructor(collection: PersonCollection, reverse: boolean) {
        this.reverse = reverse
        this.collection = collection
        const list = collection.getPeople().sort((a, b) => a.children - b.children)
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

function* makeChildrenIterator(collection: PersonCollection, reverse: boolean): Generator<Person> {
    let people = []
    const list = collection.getPeople().sort((a, b) => a.children - b.children)
    people = reverse ? list.reverse() : list

    for (let i = 0; i < collection.getCount(); i++) {
      yield people[i];
    }
}
  
const symbolChildrenIterator = (collection: PersonCollection, reverse: boolean) =>( {
    *[Symbol.iterator] () {
        let people = []
        const list = collection.getPeople().sort((a, b) => a.children - b.children)
        people = reverse ? list.reverse() : list
    
        for (let i = 0; i < collection.getCount(); i++) {
          yield people[i];
        }
    }
})
  