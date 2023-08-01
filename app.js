let obj = {
    width: 2,
    height: 5,
    getArea: function () {
        return this.width * this.height
    }
}

let o1 = {
    width: 10,
    __proto__: obj
}

console.log(o1.__proto__ === obj)
console.log(o1.__proto__.__proto__)

function Person(name, gender, age, address) {
    this.name = name
    this.gender = gender
    this.age = age
    this.address = address
    this.selfDesc = function () {
        return `My name is ${this.name}, gender ${this.gender}, ${this.age} years old, I live in ${this.address}.`
    }
    console.log(this.name, this.gender)
}

Person.prototype.sayName = function () {
    console.log(this.name + '-------------------------------')
}

function Man(...args) {
    Person.apply(this, args)
}

console.log(new Person())

Man.prototype = new Person()
Man.prototype.constructor = Person

let person = new Person('bob', 'male', '12', 'No. 10 Shangdi 10th Street, Haidian District, Beijing, China')

let man = new Man('1---1', '2---2', '3---3', '4---4')

console.log(man)

let str = '123'

let nStr = str.padStart(10, '0')
console.log(nStr)

console.log(new Date() instanceof Date)

console.log(new Date().__proto__.constructor === Date)
console.log(Object.getPrototypeOf(new Date()).constructor === Date)

debugger
