import { baseUrl } from "./readAllMyPets.js"
import { toast } from "../toast.js"


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
            toast("Sucesso!", "Pet Abandonado :(")

        } else {
            toast("Error!", "Algo deu errado! Tente novamete")
        }
    } catch (error) {
        toast("Error!", error)
    }
}


export{
    deletingPetById
}