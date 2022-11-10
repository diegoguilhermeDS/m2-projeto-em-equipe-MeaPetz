

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/" 

async function readingAllMyPets(){
    const token = JSON.parse(localStorage.getItem("Token"))
    try {
        const request = await fetch(`${baseUrl}pets/my_pets`,{
          method: "GET",
          headers:{
              "Authorization": `bearer ${token}`
          },
        })
        
        const response = await request.json()
  
        return response
  
      } catch (error) {
          console.log(error)        
      }
}




export{
    readingAllMyPets,
    baseUrl
}