import { iconHeart } from "../../scripts/icons.js";
import { menu } from "../../scripts/menu.js";
import { readAllPets } from "../../scripts/requests/readAllPets.js";

menu();

const allPets = await readAllPets();

console.log(allPets);

const ulAllPets = document.querySelector("#all-pets");

allPets.forEach((pet) => {
  ulAllPets.insertAdjacentHTML(
    "beforeend",
    `
      <li class="card" id="${pet.id}" >
        <div class="card-description">
          <h2>${pet.name}</h2>
          <small>${pet.species}</small>
          <button>
            ${iconHeart}
          </button>
        </div>
        <figure class="card-image-wrapper">
          <img
            src="${pet.avatar_url ? pet.avatar_url : ''}"
            alt=""
          />
        </figure>
      </li>
    `
  );
});
