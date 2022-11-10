function logout(){
    const logout = document.querySelector(`li a[href*="login"]`)

    logout.addEventListener("click", () => {
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        localStorage.removeItem('showed-introduction')
        window.location.replace("../login/index.html")
    })
}

export { logout }