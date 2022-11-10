import { baseUrl } from "./readAllMyPets.js"
import { toast } from "../toast.js"


async function readingMyProfile(){
    const token = JSON.parse(localStorage.getItem("Token"))
    try {
        const request = await fetch(`${baseUrl}users/profile`,{
          method: "GET",
          headers:{
              "Authorization": `bearer ${token}`
          },
        })
        
        const response = await request.json()
  
        return response
  
      } catch (error) {
        toast("Error!", error);       
      }
}

export{
    readingMyProfile
}