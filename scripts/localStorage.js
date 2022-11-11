

export const getLocalStorageToken = () => {
    const token = localStorage.getItem("@KenzieEmpresas:token")

    if(token == "" || token == null || token == undefined){
        window.location.href ="/pages/home/index.html"
    }
    return token
}