import Collection from "./Collection"
import Iterator from "./Iterator"

export default interface Aggregator {
    getNameIterator: () => Iterator<Collection>
    getAgeIterator: () => Iterator<Collection>
    getChildrenIterator: () => Iterator<Collection>
}