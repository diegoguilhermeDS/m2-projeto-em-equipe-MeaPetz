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

            return response
        }else{
            console.log(request)
        }
    }catch(err){
            console.log(err)
    }
}


export{
    updateUser
}