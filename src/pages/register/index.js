import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js"
import { register } from "../../scripts/requests/requestRegister.js"


function eventRegister() {
    const formRegister = document.querySelector("#form-register")
    const btnRegister  = formRegister.elements[4]
    const elements = [...formRegister.elements]

    eventButtonDisabled(btnRegister, formRegister)

    console.log(btnRegister)
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


eventRegister()