

async function login(body){
    await fetch("https://m2-api-adot-pet.herokuapp.com/session/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    .then(res =>{
        if(res.ok) {
            return res.json()
            
        }else{
            //toast(Login deu ruim!)
            res.json().then(res => res.message)
        }
    })
    
    .then(res => {

        //toast ("Cadastro realizado com sucesso!")
        localStorage.setItem("User", JSON.stringify(res.user))
        localStorage.setItem("Token", res.token) 

        setTimeout(() => {
            
            window.location.replace("../home/index.html")
        },3000)
    })
}

export{
    login
}