/**
 * Hvis Foo Bar har skrevet dem, skal der kun være en overskrift, og en tilkendegivelse af at indlægget er censureret i selve indlægget TJEK!
 * John Doe skal anonymiseres, da han ikke længere arbejder her, men hans indlæg kan godt vises på siden NÆSTEN TJEK
 *  Forfatternavnet skal da være “Anonymous” og være med mørkeblå skrift
 */

let mainContentArea = document.getElementById("main-content-area");

//fetchData("Data/data.json").then((data) => {
fetchData("Data/data.json").then(function (data) {
  //Al kode som bruger "data" skal være inde mellem de krøllede parateser: {}

  console.log(data);

  let articleToInsert = "";
  let content = "";
  let author = "";
  let email = "";

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].heading);

    if (data[i].author === "Foo Bar") {
      content = "CENSORED";
      author = data[i].author;
      email = data[i].email;
    } else if (data[i].author === "John Doe") {
      author = "Anonymous";
      content = data[i].content;
      email = "";
    } else {
      content = data[i].content;
      author = data[i].author;
      email = data[i].email;
    }

    articleToInsert =
      "<div id='" +
      data[i].id +
      "' class='content'>" +
      "<h1>" +
      data[i].heading +
      "</h1>" +
      "<p class='inner-content'>" +
      content +
      "</p>" +
      "<p class='author'>" +
      author +
      "</p>" +
      "<p class='contact'>" +
      email +
      "</p>" +
      "</div>";

    mainContentArea.innerHTML += articleToInsert;
  }

  let authorElements = document.getElementsByClassName("author");

  for (let i = 0; i < authorElements.length; i++) {
    if (authorElements[i].innerHTML == "Anonymous") {
      authorElements[i].style.color = "darkblue";
    }
  }
});

//Magi - det taler vi om senere!!
async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
