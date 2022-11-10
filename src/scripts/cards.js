import { deletingPetById } from "../scripts/requests/deletePetById.js";
import { openModalEditUser } from "./modal.js";


function cardPets(pet){
    const localRender = document.querySelector(".mainList")

    const card =  document.createElement("li")
    card.classList = "card"

    const infoPet =  document.createElement("div")
    infoPet.classList = "info-pet"

    const petName =  document.createElement("h2")
    petName.classList = "pet-name font-4-semibold"
    petName.innerText = pet.name

    const petSpecies =  document.createElement("p")
    petSpecies.classList = "pet-species font-6-semibold"
    petSpecies.innerText = pet.species

    const adoptedButton =  document.createElement("img")
    adoptedButton.classList = "adopted-button"
    adoptedButton.src = "../../assets/img/liked.png"
    adoptedButton.id = pet.id

    adoptedButton.addEventListener("click", async (e) => {
        openModalEditUser(formDelete)

    })
    
    const formDelete = document.createElement("form")
    formDelete.classList = "formModal formDelete"

    const abandonmentAlert = document.createElement("h2")
    abandonmentAlert.innerText = "Deseja mesmo Abandonar seu pet?"

    const buttonAceptAbandonment = document.createElement("button")
    buttonAceptAbandonment.innerText = "Sou do mal!"
    buttonAceptAbandonment.classList = "button-submit-update font-5-semibold"

    buttonAceptAbandonment.addEventListener("click", async (e) => {
        e.preventDefault()
        await deletingPetById(pet.id)
        setTimeout(() => {
            window.location.reload()
        }, 500)
    })

    formDelete.append(abandonmentAlert, buttonAceptAbandonment)

    const divPetProfile =  document.createElement("div")
    divPetProfile.classList = "div-pet-profile"

    const petProfile =  document.createElement("img")
    petProfile.classList = "pet-profile"
    petProfile.src = pet.avatar_url

    localRender.append(card)
    card.append(infoPet, divPetProfile)
    infoPet.append(petName, petSpecies, adoptedButton)
    divPetProfile.append(petProfile)
}


function profileCard(profile){
    const localRender = document.querySelector(".div-profile")

    const profileImg = document.createElement("img")
    profileImg.classList = "profile"
    profileImg.src = profile.avatar_url
    profileImg.alt = "foto de perfil"

    const username = document.createElement("h2")
    username.classList = "username font-4-bold"
    username.innerText = profile.name

    localRender.append(profileImg, username)
}


export{
    cardPets,
    profileCard,
}