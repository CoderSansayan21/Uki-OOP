// CLASS = Blueprint
class Animal {
  constructor(name,age) {
    this.name = name; // property
    this.age = age; // property
  }

  speak() {
    return this.name + " makes a sound."; // method
  }
}

// OBJECT = Instance created from blueprint
const dog = new Animal("Dog", 5);
const cat = new Animal("Cat", 3);

console.log(dog.speak()); // Dog makes a sound.
console.log(dog.age); // 5
console.log(cat.speak()); // Cat makes a sound.

