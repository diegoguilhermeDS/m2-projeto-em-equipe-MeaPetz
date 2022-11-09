import { login } from "../../scripts/requests/login.js"
import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js"

function goRegisterPage() {
    const redirectBtn = document.getElementById("redirect-register")

    redirectBtn.addEventListener("click", (e) => {
        e.preventDefault()
        setTimeout(() => {
            window.location.replace("../register/index.html")
        }, 1000)
    })
}

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

        loginBtn.innerHTML = `
        <img class="icon-search" src="../../assets/img/spinner.png" alt="icone de procura">
        `

        login(body, loginBtn)
    })
}

goRegisterPage()
loginForm()
