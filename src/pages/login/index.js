// import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js";
import { login } from "../../scripts/requests/login.js"
import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js"

function loginForm(){
    const form = document.querySelector("#form-login")
    const inputs = document.querySelectorAll("input")
    const loginBtn = document.querySelector("#btn-login")

    eventButtonDisabled(loginBtn, form)

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
