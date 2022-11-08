const baseUrl = "https://m2-api-adot-pet.herokuapp.com/"

async function register(body, btn) {
    try {
        const request = await fetch(`${baseUrl}users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        const response = await request.json()

        setTimeout(() => {
            btn.innerHTML = "Cadastrar"
            btn.disabled = true
        }, 1000)

        if (request.ok) {
            
            setTimeout(() => {
                location.replace("../../pages/login/index.html")
            }, 2000)
            
        } else {
            /* message error */
        }

        console.log(response)
        return response
    } catch(err) {

    }
}


export {
    register
}