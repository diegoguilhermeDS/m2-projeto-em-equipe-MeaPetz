import { toast } from "../toast.js"

const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

async function register(body, btn) {
    try {
        const request = await fetch(`${baseUrl}users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const response = await request.json()

        setTimeout(() => {
            btn.innerHTML = "Cadastrar"
            btn.disabled = true
        }, 1000)

        if (request.ok) {
            toast("Sucesso!", "Cadastro realizado com sucesso.")
            setTimeout(() => {
                location.replace("../../pages/login/index.html")
            }, 4000)
            
        } else {
            toast("Error!", "Ops! Algo deu errado.")
            setTimeout(() => {
                const modalToast = document.querySelector(".modal-toast")
                modalToast.remove()
            }, 4000)
        }

        return response
    } catch(err) {
        toast("Error!", "Ops! Algo deu errado.")
    }
}


export {
    register
}