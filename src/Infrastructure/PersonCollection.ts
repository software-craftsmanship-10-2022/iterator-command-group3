import Person from "../Domain/Person"
import Iterator from "../Domain/Shared/Iterator"
import NameIterator from "./NameIterator"
import {AgeIterator} from "./AgeIterator"
import ChildrenIterator from "./ChildrenIterator"
import PersonCollectionInterface from "../Domain/PersonCollectionInterface"

export default class PersonCollection implements PersonCollectionInterface {
    people: Person[] = []
    
    getPeople(): Person[] {
        return this.people
    }
  
    addPerson(person: Person): void  {
        this.people.push(person)
    }
  
    getCount(): number {
        return this.people.length
    }
  
    getNameIterator(): Iterator<Person> {
        return new NameIterator(this, false)
    }
  
    getReverseNameIterator(): Iterator<Person> {
        return new NameIterator(this, true)
    }
  
    getAgeIterator(): Iterator<Person> {
        return new AgeIterator(this, false)
    }
  
    getReverseAgeIterator(): Iterator<Person> {
        return new AgeIterator(this, true)
    }
  
    getChildrenIterator(): Iterator<Person> {
        return new ChildrenIterator(this, false)
    }
  
    getReverseChildrenIterator(): Iterator<Person> {
        return new ChildrenIterator(this, true)
    }
  }