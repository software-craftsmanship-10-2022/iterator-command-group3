import Aggregator from "./Aggregator";
import AlphabeticalOrderIterator from "./AlphabeticalOrderIterator";
import Iterator from "./Iterator";
import NumericalOrderIterator from "./NumericalOrderIterator";
import Person from "./Person";

export default class PersonCollection implements Aggregator {
  protected people: Person[];

  constructor() {
    this.people = [];
  }

  add(person: Person) {
    this.people.push(person);
  }

  getPeople() {
    return this.people;
  }

  orderByName(reverse: boolean): Person<string>[] {
    return new AlphabeticalOrderIterator(
      this.getPeople().map((person) => person.getName()),
      reverse
    );
  }

  orderByAge(reverse: boolean): Iterator<number> {
    return new NumericalOrderIterator(this, reverse);
  }

  orderByChildren(reverse: boolean): Iterator<number> {
    return new NumericalOrderIterator(this, reverse);
  }
}
