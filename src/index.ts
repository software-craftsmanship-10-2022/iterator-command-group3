import Person from "./Domain/Person"
import PersonCollection from "./Infrastructure/PersonCollection"
import OrderByName from "./Application/OrderByName/OrderByName"
import ReverseOrderByName from "./Application/OrderByName/ReverseOrderByName"
import OrderbyAge from "./Application/OrderByAge/OrderByAge"
import ReverseOrderByAge from "./Application/OrderByAge/ReverseOrderByAge"
import OrderByChildren from "./Application/OrderByChildren/OrderByChildren"
import ReverseOrderByChildren from "./Application/OrderByChildren/ReverseOrderByChildren"


const person1 = new Person("Ivan", "Gallego", 20, 5)
const person2 = new Person("Alba", "Villalon", 18, 3)
const person3 = new Person("Ivan", "Dobry", 55, 83)

const personCollection = new PersonCollection()
personCollection.addPerson(person1)
personCollection.addPerson(person2)
personCollection.addPerson(person3)

const orderByName = new OrderByName(personCollection)
const reverseOrderByName = new ReverseOrderByName(personCollection)

const orderByAge = new OrderbyAge(personCollection)
const reverseOrderByAge = new ReverseOrderByAge(personCollection)

const orderByChildren = new OrderByChildren(personCollection)
const reverseOrderByChildren = new ReverseOrderByChildren(personCollection)


orderByName.execute()
reverseOrderByName.execute()

orderByAge.execute()
reverseOrderByAge.execute()

orderByChildren.execute()
reverseOrderByChildren.execute()