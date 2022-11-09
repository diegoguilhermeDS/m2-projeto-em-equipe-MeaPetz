import { baseUrl } from "./readAllMyPets.js"

async function deletingPetById(id){
    const token = JSON.parse(localStorage.getItem("Token"))
    try {
        const request = await fetch(`${baseUrl}pets/${id}`,{
            method:"DELETE",
            headers:{
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
           
        })
        
        if(request.ok){
            console.log("sucess!", "Pet Abandonado :(")
            //futuro toast

        } else {
            console.log("erro", "Algo deu errado! Tente novamete")
            //futuro toast
        }
    } catch (err) {
        console.log(err)
        // toast("erro", "Algo deu errado! Tente novamete")
    }
}


export{
    deletingPetById
}