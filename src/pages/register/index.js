import { darkMode } from "../../scripts/darkMode.js"
import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js"
import { register } from "../../scripts/requests/requestRegister.js"

function toHome() {
    const btnToHome = document.getElementById("to-home")

    btnToHome.addEventListener("click", () => {
        document.body.style.cursor = 'wait'
        setTimeout(() => {
            location.replace("../login/index.html")
        }, 700)
    })
}

function eventRegister() {
    const formRegister = document.querySelector("#form-register")
    const btnRegister  = formRegister.elements[4]
    const elements = [...formRegister.elements]

    eventButtonDisabled(btnRegister, formRegister)

    formRegister.addEventListener("submit", (event) => {
        event.preventDefault()

        const body = {}

        elements.forEach((elem) => {
            if (elem.tagName == "INPUT" && elem.value !== "") {
                body[elem.id] = elem.value
                elem.value = ""
            }
        })

        btnRegister.innerHTML = `
        <img class="icon-search" src="../../assets/img/spinner.png" alt="icone de procura">
        `

        register(body, btnRegister)
    })
}


toHome()
eventRegister()


const btnDarkMode = document.getElementById("dark-mode")
darkMode(btnDarkMode)
