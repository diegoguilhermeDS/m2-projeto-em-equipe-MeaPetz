import { toast } from "../toast.js"
import { baseUrl } from "./readAllMyPets.js"

async function updateUser(body){
    const token = JSON.parse(localStorage.getItem("Token"))
    try{
        const request = await fetch(`${baseUrl}users/profile`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",  
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })

        if(request.ok){
            const response = await request.json()
            toast("Sucesso!", "Alteração feita com sucesso.")

            return response
        }else{
            toast("Error!", "Ops! algo deu errado.")
        }
    }catch(error){
            toast("Error!", error)
    }
}


export{
    updateUser
}