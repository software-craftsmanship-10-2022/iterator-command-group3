import Person from "./Person"
import Collection from "./Shared/Collection"
import Iterator from "./Shared/Iterator"

export default interface PersonCollectionInterface {
    getPeople(): Person[]
    addPerson(person: Person): void
    getCount(): number

    getNameIterator(): Iterator<Collection>
    getReverseNameIterator(): Iterator<Collection>
    getAgeIterator(): Iterator<Collection>
    getReverseAgeIterator(): Iterator<Collection>
    getChildrenIterator(): Iterator<Collection>
    getReverseChildrenIterator(): Iterator<Collection>
}

