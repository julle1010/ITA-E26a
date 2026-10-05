let carsArray = [];
let parrentElement = document.getElementById("cars");

fetchData("cars.json").then(function (cars) {
  cars.forEach(function (v) {
    carsArray.push(new Car(v.id, v.brand, v.model, v.top_speed_kmh, v.year));
  });

  console.log(carsArray);

  for (let i in carsArray) {
    carsArray[i].present(parrentElement);
  }
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
