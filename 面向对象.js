function Dog(){}
Object.prototype.name = 'person';
Dog.prototype.name = 'dog';
var p = new Object();
var dog = new Dog();
console.log(p.name);
console.log(dog.name);
console.log(dog.__proto__.name);
console.log(dog.__proto__.__proto__.name);
console.log(dog.__proto__.constructor.prototype.name);