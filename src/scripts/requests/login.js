import { toast } from "../toast.js"

async function login(body, button){
    await fetch("https://m2-api-adot-pet.herokuapp.com/session/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    .then(res =>{
        if(res.ok) {
            toast("Sucesso!", "Login realizado com sucesso.")

            return res.json()
            
        }else{
            toast("Error!", "Ops! Algo deu errado.")

            setTimeout(() => {
                const modalToast = document.querySelector(".modal-toast")
                modalToast.remove()
            }, 4000)

            setTimeout(() => {
                button.innerHTML = "Cadastrar"
                button.disabled = true
            }, 1000)

            res.json().then(res => res.message)
        }
    })
    
    .then(res => {

        localStorage.setItem("User", JSON.stringify(res.user))
        localStorage.setItem("Token", JSON.stringify(res.token)) 

        setTimeout(() => {
            
            window.location.replace("/src/pages/home/index.html")
        },4000)
    })
}

export{
    login
}