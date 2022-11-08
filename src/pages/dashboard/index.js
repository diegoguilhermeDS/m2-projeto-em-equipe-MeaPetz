import { cardPets, profileCard } from "../../scripts/cards.js";
import { readingAllMyPets } from "../../scripts/requests/readAllMyPets.js";
import { readingMyProfile } from "../../scripts/requests/readProfile.js";



async function renderMyProfile(){
    const localRender = document.querySelector(".div-profile");

    localRender.innerHTML = ""

    const profile = await readingMyProfile()
    const user = [profile]

    user.find(profile => profileCard(profile))   
}
renderMyProfile()




async function renderAllMyPets(){
    const localRender = document.querySelector(".mainList");


    localRender.innerHTML = ""

    const pets = await readingAllMyPets()

    pets.forEach(pet => {
        cardPets(pet)
    });    
}
renderAllMyPets()