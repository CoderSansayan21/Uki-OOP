class Animal{
    eat(){
        return "eating";
    }
}

class Dog extends Animal{
    bark(){
        return "woof!";
    }
}

const dog1 = new Dog();
console.log(dog1.eat(),dog1.bark());
