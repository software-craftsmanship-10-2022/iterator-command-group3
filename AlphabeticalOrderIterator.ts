import Iterator from "./Iterator";

class AlphabeticalOrderIterator implements Iterator<string> {
  position: number = 0;
  values: string[];

  constructor(param: string[], reverse: boolean) {
    const list = this.values.sort((a, b) => a.localeCompare(b));
    this.values = reverse ? list.reverse() : list;
  }

  current(): string {
    return this.values[this.position];
  }

  next(): string {
    return this.values[this.position++];
  }

  isValid(position: number): boolean {
    return position < this.values.length;
  }
}

export default AlphabeticalOrderIterator;
