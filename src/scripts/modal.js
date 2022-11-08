


function openModalEditUser(content){

    const body = document.querySelector("body")

    const backgroundContainer = document.createElement("section")
    backgroundContainer.classList = "background"

    const mainContainer = document.createElement("section")
    mainContainer.classList = "modal-container"

    const closeModalButton = document.createElement("p")
    closeModalButton.classList = "modal-close"
    closeModalButton.innerText = "X"


    closeModalButton.addEventListener("click", () =>{
        backgroundContainer.remove()
    })

    backgroundContainer.addEventListener("click", (e) =>{
        if(e.target === backgroundContainer){
            backgroundContainer.remove()
        }
    })


    body.appendChild(backgroundContainer)
    backgroundContainer.appendChild(mainContainer)
    mainContainer.append(content)
    mainContainer.appendChild(closeModalButton)

}

export{
    openModalEditUser
}