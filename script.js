console.log("----------------OOP Programming-----------------");

class Person {
  constructor(fName, lName, currentAge) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = currentAge;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getCurrentAge = function () {
    return `Current age is ${this.age}`;
  };
}

//Instantiate
let juan = new Person("Juan", "Dela Cruz", 20);
console.log(juan.getFullName());
console.log(juan.getCurrentAge());

let john = new Person("John", "Doe", 23);
console.log(john.getFullName());
console.log(john.getCurrentAge());

console.log("---------------Abstraction----------------------");

class House {
  vips = [];
  visitors = [];

  constructor(address, price) {
    this.address = address;
    this.price = price;
  }

  enterVisitor(person) {
    let fullName = person.getFullName();

    if (person.age >= 18) {
      this.visitors.push(person);
    }

    if (
      person.firstName.toLowerCase() == "davy" ||
      person.lastName.toLowerCase() == "yabut"
    ) {
      this.vips.push(person);
    }
  }
}

let house = new House("Manila", 20000000);
house.enterVisitor(juan);
house.enterVisitor(john);

let davy = new Person("davy", "yabut", 38);
house.enterVisitor(davy);

console.log("--------House visitors---------");
console.log(house.visitors);

console.log("--------House VIP---------");
console.log(house.vips);

let van = new Person("Claude Van", "Roque", 30);
house.vips.push(van);

console.log("--------House VIP after inserting van---------");
console.log(house.vips);

//console.log("---------------Encapsulation----------------------");

class Safehouse {
  #address = "";
  #price = "";
  #visitors = [];
  #vips = [];

  constructor(address, price) {
    this.#address = address;
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  get address() {
    if (this.#vips.length > 0) {
      return "Can not disclose";
    } else {
      return this.#address;
    }
  }

  set address(value) {
    if (value.trim().length > 0) {
      this.#address = value;
    }
  }

  enterVisitor(person) {
    let fullName = person.getFullName();

    if (person.age >= 18) {
      this.#visitors.push(person);
    }

    if (
      person.firstName.toLowerCase() == "davy" ||
      person.lastName.toLowerCase() == "yabut"
    ) {
      this.#vips.push(person);
    }
  }
}

let safeHouse = new Safehouse("Manila", 200000);
safeHouse.enterVisitor(van);
safeHouse.enterVisitor(juan);
safeHouse.enterVisitor(john);

console.log(safeHouse.address);
console.log(safeHouse.price);

safeHouse.address = "Quezon City";
console.log(safeHouse.address);

safeHouse.address = "";
console.log(safeHouse.address);

console.log("-----------------Inheritance--------------");

class Engineer extends Person {
  constructor(
    firstName,
    lastName,
    age,
    companyName,
    salary,
    yearsOfExperience
  ) {
    super(firstName, lastName, age);
    this.companyName = companyName;
    this.salary = salary;
    this.yearsOfExperience = yearsOfExperience;
  }

  getFullName() {
    return `Engr. ${this.firstName} ${this.lastName}`;
  }
}

class Doctor extends Person {
  constructor(
    firstName,
    lastName,
    age,
    companyName,
    salary,
    yearsOfExperience
  ) {
    super(firstName, lastName, age);
    this.companyName = companyName;
    this.salary = salary;
    this.yearsOfExperience = yearsOfExperience;
  }

  getFullName = function () {
    return `Dr. ${this.firstName} ${this.lastName}`;
  };
}
let engr = new Engineer("Steve", "Jobs", "60", "Apple", 0, 40);
let doctor = new Doctor("Douggie", "House", "60", "PH", 0, 40);
console.log(engr.getFullName());
console.log(doctor.getFullName());

console.log("-----------------Polymorphism--------------");

let bill = new Person("Bill", "Gates", 70);

function printFullName(person) {
  console.log(person.getFullName());
}

printFullName(juan);
printFullName(engr);
printFullName(doctor);
