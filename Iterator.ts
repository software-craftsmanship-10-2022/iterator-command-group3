export default interface Iterator<T> {
  current(): T;
  next(): T;
}
