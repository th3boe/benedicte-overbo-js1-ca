const title = document.querySelector("title");

const container = document.querySelector(".characterInfo");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =
  "https://fedeperin-harry-potter-api-en.herokuapp.com/characters/" + id;

async function fetchCharacter() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results;

    console.log(data);

    container.innerHTML = "";

    title.innerHTML = `${data.nickname} | Details`;

    container.innerHTML += `<div class="theCharacter">
                  <h1>${data.character}</h1>
                  <img src="${data.image}" class="img" alt="characterImg">
                  <p>Portrayed by: ${data.interpretedBy}</p>
                  <p>House: ${data.hogwartsHouse}</p>
                  <p>Children: ${data.child}</p>
                                                  </div>`;
  } catch (error) {
    console.log(error);
    container.innerHTML =
      "<div class=error>Oh no.. Something went wrong, give us a minute while we solve the problem.</div>";
  }
}

fetchCharacter();
