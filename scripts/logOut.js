


export function logOut() {

    const btnLogOut = document.querySelector(".log-out")

    btnLogOut.addEventListener("click", () => {

        localStorage.removeItem("@KenzieEmpresas:token")
        localStorage.removeItem("@KenzieEmpresas:tipoUsuario")
        window.location.replace("/pages/home/index.html")
    })

}

