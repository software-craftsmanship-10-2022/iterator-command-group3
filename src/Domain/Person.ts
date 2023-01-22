export default class Person {
    name: string
    surname: string
    age: number
    children: number
  
    constructor(name: string, surname: string, age: number, children: number) {
        this.name = name
        this.surname = surname
        this.age = age
        this.children = children
    }
}