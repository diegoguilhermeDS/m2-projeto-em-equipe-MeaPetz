import { eventButtonDisabled } from "../../scripts/eventButtonDisabled.js"


function eventRegister() {
    const formRegister = document.querySelector("#form-register")
    const btnRegister  = formRegister.elements[4]

    eventButtonDisabled(btnRegister, formRegister)
}


eventRegister()