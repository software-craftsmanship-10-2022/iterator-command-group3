const oneIvan = new Person("Ivan","Dobry", 34, 0);
const anotherIvan = new Person("Ivan","Gallego", 30, 1);
const alba = new Person("Alba","Villaleon", 29, 2);

const people = new PeopleCollection();
people.add(oneIvan);
people.add(anotherIvan);
people.add(alba);

const orderPeopleByNameAsc = people.orderByName(false)
const orderPeopleByNameDesc = people.orderByName(true)

const orderPeopleByAgeAsc = people.orderByAge(false)
const orderPeopleByAgeDesc = ...

const orderPeopleByChildrenAsc = ...
const orderPeopleByChildrenDesc = ...