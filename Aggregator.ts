export default interface Aggregator {
  orderByName(reverse: boolean): Iterator<string>[];
  orderByAge(reverse: boolean): Iterator<number>;
  orderByChildren(reverse: boolean): Iterator<number>;
}
