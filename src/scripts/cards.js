

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
    profileCard
}