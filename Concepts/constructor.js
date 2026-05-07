class Student {
  constructor(name, age) {
    this.name = name; // 'this' = the new student being created
    this.age = age;
  }

  greet() {
    return "Hi! I am " + this.name + " and I am " + this.age + " years old.";
  }
}

const s1 = new Student("Amal", 20);
const s2 = new Student("Nimal", 22);

console.log(s1.greet()); // Hi! I am Amal and I am 20 years old.
console.log(s2.greet()); // Hi! I am Nimal and I am 22 years old.