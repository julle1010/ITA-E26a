let firstName = "Hans";

const person = {
  firstName: "John",
  lastName: "Doe",
  getName: function () {
    return person.firstName + " " + this.lastName;
  },
  giveMeANumber: function () {
    return Math.random();
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
  getName: function () {
    return person.firstName + " " + this.lastName;
  },
  giveMeANumber: function () {
    return Math.random();
  },
};

console.log(person.getName() + " 42");
console.log(person.giveMeANumber());

person.firstName = 42;

console.log(person.getName());

person.age = 12;

console.log(person.age);

person.presentYourself = function () {
  return (
    "Hi, my name is " +
    this.firstName +
    " " +
    this.lastName +
    " and I am " +
    this.age +
    " years old"
  );
};

console.log(person.presentYourself());
//console.log(person2.presentYourself());

function CarFun(make, model, topSpeed) {
  this.make = make;
  this.model = model;
  this.topSpeed = topSpeed;
  this.currentSpeed = 0;
  this.accelerate = function () {
    if (this.currentSpeed < this.topSpeed) {
      //this.currentSpeed = this.currentSpeed + 10;
      this.currentSpeed += 10;
      console.log(this.currentSpeed);
    }
    return this;
  };

  this.deAccelerate = function () {
    if (this.currentSpeed > 0) {
      //this.currentSpeed = this.currentSpeed - 10;
      this.currentSpeed -= 10;
      console.log(this.currentSpeed);
    }
    return this;
  };
}

const c1 = new CarFun("Ford", "Focus", 220);
const c2 = new CarFun("Ferrari", "Testerossa", 220);

c1.accelerate()
  .accelerate()
  .accelerate()
  .deAccelerate()
  .deAccelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .deAccelerate()
  .deAccelerate()
  .deAccelerate()
  .deAccelerate()
  .deAccelerate()
  .deAccelerate();
