import { iconHeart } from "../../scripts/icons.js";
import { menu } from "../../scripts/menu.js";
import { readAllPets } from "../../scripts/requests/readAllPets.js";
import { adoption } from "../../scripts/requests/requestAdoption.js";

menu();

const allPets = await readAllPets();

async function renderHomeAllPets(list) {
  const ulAllPets = document.querySelector("#all-pets");

  ulAllPets.innerHTML = "";

  if (list.length) {
    list.forEach((pet) => {
      if (pet.available_for_adoption) {
        const card = document.createElement("li");
        card.classList = "card";
        card.id = pet.id;

        const cardDescription = document.createElement("div");
        cardDescription.classList = "card-description";

        const name = document.createElement("h2");
        name.innerText = pet.name;

        const species = document.createElement("small");
        species.innerText = pet.species;

        const div = document.createElement("div");
        div.classList = "div-button-adopt";
        div.id = pet.id;
        div.name = "pet_id";

        div.addEventListener("click", async (e) => {
          if (e.target.closest(".div-button-adopt").id === pet.id) {
            const body = {};
            body[div.name] = pet.id;
            await adoption(body);
            setTimeout(() => {
              window.location.reload();
            }, 500);
          }
        });

        const button = document.createElement("button");
        button.innerHTML = iconHeart;

        const cardImageWrapper = document.createElement("figure");
        cardImageWrapper.classList = "card-image-wrapper";

        const imgCard = document.createElement("img");
        imgCard.src = `${pet.avatar_url ? pet.avatar_url : ""}`;
        imgCard.alt = "foto do pet";

        ulAllPets.append(card);
        card.append(cardDescription, cardImageWrapper);
        cardDescription.append(name, species, div);
        div.append(button);
        cardImageWrapper.append(imgCard);
      }
    });
  } else {
    ulAllPets.insertAdjacentHTML('beforeend', '<li class="communicate">Nenhuma adoção para essa espécie! Abra seu coração para outra! :)</li>')
  }
}
renderHomeAllPets(allPets);

const input = document.querySelector(".input-base");

input.addEventListener("input", async () => {
  const value = input.value.toLowerCase();

  const allPets = await readAllPets();

  const filtered = allPets.filter((pets) => {
    return pets.species.toLowerCase().includes(value);
  })

  renderHomeAllPets(filtered);
});
