// CLASS = Blueprint
class Animal {
  constructor(name) {
    this.name = name; // property
  }

  speak() {
    return this.name + " makes a sound."; // method
  }
}

// OBJECT = Instance created from blueprint
const dog = new Animal("Dog");
const cat = new Animal("Cat");

console.log(dog.speak()); // Dog makes a sound.
console.log(cat.speak()); // Cat makes a sound.