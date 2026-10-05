function Car(id, make, model, topSpeed, prodYear) {
  this.id = id;
  this.make = make;
  this.model = model;
  this.topSpeed = topSpeed;
  this.prodYear = prodYear;

  this.present = function (parrentElement) {
    let wrapper = document.createElement("div");
    let heading = document.createElement("h1");
    let desc = document.createElement("p");

    wrapper.id = this.id;
    heading.innerHTML = this.make + " " + this.model;
    desc.innerHTML =
      "Top speed: " + this.topSpeed + " Produced in " + this.prodYear;

    wrapper.appendChild(heading);
    wrapper.appendChild(desc);

    parrentElement.appendChild(wrapper);
  };
}
