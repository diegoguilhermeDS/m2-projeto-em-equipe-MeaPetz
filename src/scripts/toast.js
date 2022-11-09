const toast = (status, message) => {
    const body = document.querySelector("body")

    const container = document.createElement("div")
    container.classList.add("toast-container")

    const icon = document.createElement("img")
    icon.alt = "Mensagem de ${status}"

    if (status == "Sucesso!"){
        container.classList.add("success-toast")
        icon.src = "../../img/success_icon.png"
    }else{
        container.classList.add("fail-toast")
        icon.src = "../../img/fail_icon.png"
    }

    const msg = document.createElement("p")
    msg.innerText = message

    container.append(icon, msg)

    body.appendChild(container)


}

export{
    toast,
}