function toast (status, message){
    const body = document.querySelector("body")

    const container = document.createElement("div")
    container.classList.add("modal-toast")
    
    const icon = document.createElement("img")
    icon.alt = `Mensagem de ${status}`
    
    const msg = document.createElement("h3")
    msg.classList.add("font-4-semibold")
    msg.innerText = message

    if (status == "Sucesso!"){
        container.classList.add("bg-sucess")
        icon.src = "../../assets/img/icons/success_icon.png"

    }else if(status == "Error!") {
        container.classList.add("bg-alert")
        icon.src = "../../assets/img/icons/error_icon.png"
    }


    container.append(icon, msg)

    body.appendChild(container)

}

export{ toast };