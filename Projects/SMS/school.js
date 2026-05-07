// Base class (Abstraction + Encapsulation)
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

// Inheritance
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  // Polymorphism
  introduce() {
    return "I am Teacher " + this.getName() + ", I teach " + this.subject;
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  // Polymorphism
  introduce() {
    return "I am Student " + this.getName() + ", Grade: " + this.grade;
  }
}

const teacher = new Teacher("Mr. Silva", "JavaScript");
const student = new Student("Amal", "A+");

console.log(teacher.introduce()); // I am Teacher Mr. Silva, I teach JavaScript
console.log(student.introduce()); // I am Student Amal, Grade: A+