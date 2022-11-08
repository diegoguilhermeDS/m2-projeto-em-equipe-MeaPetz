import { baseUrl } from "./readAllMyPets.js"

async function updateUser(body){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjEwNjgsImV4cCI6MTY2ODUyNTg2OCwic3ViIjoiMGZhNDNiYWEtNjdhNS00MDdkLTgzZDMtMTdkM2FjZGQ0NTZhIn0.5XcbfYPBHUHquyvvlZ43eu_D_qJpK1tgrcuHzhpS2Dg"
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