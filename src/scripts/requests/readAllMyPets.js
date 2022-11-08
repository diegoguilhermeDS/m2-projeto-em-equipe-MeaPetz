

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/" 

async function readingAllMyPets(){
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Njc5MjEwNjgsImV4cCI6MTY2ODUyNTg2OCwic3ViIjoiMGZhNDNiYWEtNjdhNS00MDdkLTgzZDMtMTdkM2FjZGQ0NTZhIn0.5XcbfYPBHUHquyvvlZ43eu_D_qJpK1tgrcuHzhpS2Dg"
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