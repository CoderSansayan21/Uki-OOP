// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound.";
  }
}

// Child class inherits from Animal
class Dog extends Animal {
  speak() {
    return this.name + " says: Woof! 🐶";
  }
}

class Cat extends Animal {
  speak() {
    return this.name + " says: Meow! 🐱";
  }
}

const d = new Dog("Buddy");
const c = new Cat("Whiskers");

console.log(d.speak()); // Buddy says: Woof! 🐶
console.log(c.speak()); // Whiskers says: Meow! 🐱