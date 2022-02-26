const container = document.querySelector(".hp-characters");

const url = "https://fedeperin-harry-potter-api-en.herokuapp.com/characters/";

async function harrypotter() {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const data = result;

    console.log(data);

    container.innerHTML = "";

    data.forEach(function (character) {
      container.innerHTML += `<a href="details.html?id=${character.id}"><div class="characters">
                <h2>${character.nickname}</h2>
                <img src="${character.image}" class="character-image" alt="character">
                <p>House: ${character.hogwartsHouse}</p>
                                                      </div></a>`;
    });
  } catch (error) {
    console.log(error);
    container.innerHTML =
      "<div class=error>Oh no.. Something went wrong, give us a minute while we solve the problem.</div>";
  }
}

harrypotter();
