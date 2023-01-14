import { login } from "../../scripts/requests/login.js"
import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js"
import { darkMode } from "../../scripts/darkMode.js"
import { introduction } from "../../scripts/introduction.js"
import { toast } from "../../scripts/toast.js"

function goRegisterPage() {
    const redirectBtn = document.getElementById("redirect-register")

    redirectBtn.addEventListener("click", (e) => {
        e.preventDefault()
        setTimeout(() => {
            window.location.replace("src/pages/register/index.html")
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
        <img class="icon-search" src="/src/assets/img/spinner.png" alt="icone de procura">
        `

        login(body, loginBtn)
    })
}

const darkBtn = document.querySelector("#moon-btn")
darkMode(darkBtn)

goRegisterPage()
loginForm()
introduction()