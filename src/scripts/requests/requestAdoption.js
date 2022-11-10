import { toast } from "../toast.js"


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
            toast("Sucesso!", "Pet adotado com sucesso.")
            return response
        }else{
            toast("Error!", "Ops! algo deu errado na hora de adotar.")
        }
    } catch(error){
        toast("Error!", error)
    }
}


export {
    adoption
}