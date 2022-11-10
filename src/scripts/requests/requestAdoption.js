

async function adoption(body){
    const token = JSON.parse(localStorage.getItem("Token"))
    try{
        const request = await fetch("https://m2-api-adot-pet.herokuapp.com/adoptions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(body)
        })

        if(request.ok){
            const response = await request.json()
            console.log("grande guri")
            return response
        }else{
            console.log(request)
        }
    } catch(err){
        console.log(err)
    }
}


export {
    adoption
}