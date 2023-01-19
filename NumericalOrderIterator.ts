import Iterator from "./Iterator";
import Person from "./Person";
import PersonCollection from "./PersonCollection";

class NumericalOrderIterator implements Iterator<string> {
  position: number = 0;
  people: Person[];

  constructor(collection: PersonCollection, reverse: boolean) {
    const list = collection
      .getPeople()
      .sort((a, b) => a.getfield() - b.getName());
    this.people = reverse ? list.reverse() : list;
  }

  current(): Person {
    return this.people[this.position];
  }

  next(): Person {
    return this.people[this.position++];
  }

  isValid(position: number): boolean {
    return position < this.people.length;
  }
}

export default NumericalOrderIterator;
