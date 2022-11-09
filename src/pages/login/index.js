// import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js";

async function login(body){
    await fetch("https://m2-api-adot-pet.herokuapp.com/session/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    .then(res =>{
        if(res.ok) {
            return res.json()
            
        }else{
            //toast(Login deu ruim!)
            res.json().then(res => res.message)
        }
    })
    
    .then(res => {

        //toast ("Cadastro realizado com sucesso!")
        localStorage.setItem("User", JSON.stringify(res.user))
        localStorage.setItem("Token", res.token) 

        setTimeout(() => {
            
            window.location.replace("../home/index.html")
        },3000)
    })
}


function loginForm(){
    const inputs = document.querySelectorAll("input")
    const loginBtn = document.querySelector("#btn-login")

    const body = {}

    loginBtn.addEventListener("click", (e) =>{
        e.preventDefault()

        inputs.forEach(input => {
            body[input.name] = input.value
        })
        login(body)
    })
}

loginForm()
