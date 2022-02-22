const url = "http://hp-api.herokuapp.com/api/characters";

const container = document.querySelector(".hp-characters");

async function harrypotter() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const data = results;

    container.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name, data[i].gender, data[i].house);
      if (i === 15) {
        break;
      }

      container.innerHTML += `<a href="details.html"><div class="characters">
                <h2>${data[i].name}</h2>
                <img src="${data[i].image}" class="character-image" alt="character">
                <p>Gender: ${data[i].gender}</p>
                <p>House: ${data[i].house}</p>
                                                </div></a>`;
    }
  } catch (error) {
    console.log(error);
    container.innerHTML =
      "<div class=error>Oh no.. Something went wrong, give us a minute while we solve the problem.</div>";
  }
}

harrypotter();
