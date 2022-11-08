
function eventRegister() {
    const formRegister = document.querySelector("#form-register")
    const btnRegister  = formRegister.elements[4]

    eventButtonDisabled(btnRegister, formRegister)
}


function eventButtonDisabled(btn, form) {
    const elements = [...form.elements]

    elements.forEach((elem) => {
        if (elem.tagName == "INPUT") {
            elem.addEventListener("input", () => {
                let arr = elements.filter((elem) => elem.value == "")
                if (arr.length <= 1) {
                    btn.disabled = false
                }
            })
        }
    })
}


eventRegister()