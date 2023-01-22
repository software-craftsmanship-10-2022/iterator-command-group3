export default interface Iterator<T> {
    getNext: () => T
    hasMore: () => boolean
    current: () => T
}