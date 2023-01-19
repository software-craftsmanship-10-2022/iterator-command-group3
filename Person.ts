export default class Person {
  private _name: string;
  private _surname: string;
  private _age: number;
  private _children: number;

  constructor(name: string, surname: string, age: number, children: number) {
    this._name = name;
    this._surname = surname;
    this._age = age;
    this._children = children;
  }

  getName(): string {
    return this._name;
  }

  surname(): string {
    return this._surname;
  }

  age(): number {
    return this._age;
  }

  children(): number {
    return this._children;
  }
}
