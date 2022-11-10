import { menu } from "../../scripts/menu.js";
import { cardPets, profileCard } from "../../scripts/cards.js";
import { openModalEditUser } from "../../scripts/modal.js";
import { readingAllMyPets } from "../../scripts/requests/readAllMyPets.js";
import { readingMyProfile } from "../../scripts/requests/readProfile.js";
import { updateUser } from "../../scripts/requests/requestUpdateUser.js";
import { logout } from "../../scripts/logout.js";

menu();

async function renderMyProfile() {
  const localRender = document.querySelector(".div-profile");

  localRender.innerHTML = "";

  const profile = await readingMyProfile();
  const user = [profile];

  user.find((profile) => profileCard(profile));
}

async function renderAllMyPets() {
  const localRender = document.querySelector(".mainList");

  localRender.innerHTML = "";

  const pets = await readingAllMyPets();

  pets.forEach((pet) => {
    cardPets(pet);
  });
}

async function userInfoToUpdate() {
  const user = JSON.parse(localStorage.getItem("User"));

  const main = document.querySelector(".main");
  const editIcon = document.querySelector(".edit-user");

  editIcon.addEventListener("click", () => {
    const formContainer = document.createElement("div");
    formContainer.classList = "container-form";

    const perfilAvatar = document.createElement("img");
    perfilAvatar.classList = "avatar-edit-img";
    perfilAvatar.src = user.avatar_url;

    const EditDescription = document.createElement("p");
    EditDescription.classList = "desc-edit font-5-semibold";
    EditDescription.innerText = "Altere seus dados";

    const form = document.createElement("form");
    form.classList = "formModal";

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const inputs = [...form.elements];

      const body = {};

      inputs.forEach((input) => {
        if (input.tagName == "INPUT" && input.value !== "") {
          body[input.name] = input.value;
        }
      });

      await updateUser(body);
      window.location.reload();
    });

    const inputName = document.createElement("input");
    inputName.classList = "input-form-edit";
    inputName.type = "text";
    inputName.name = "name";
    inputName.value = user.name;

    const inputAvatar = document.createElement("input");
    inputAvatar.classList = "input-form-edit";
    inputAvatar.type = "url";
    inputAvatar.name = "avatar_url";
    inputAvatar.value = user.avatar_url;

    const buttonSubmit = document.createElement("button");
    buttonSubmit.classList = "button-submit-update font-5-semibold";
    buttonSubmit.type = "submit";
    buttonSubmit.innerText = "Alterar";

    form.append(EditDescription, inputName, inputAvatar, buttonSubmit);
    formContainer.append(perfilAvatar, form);
    openModalEditUser(formContainer);
  });
}

renderMyProfile();
renderAllMyPets();
userInfoToUpdate();
logout();
