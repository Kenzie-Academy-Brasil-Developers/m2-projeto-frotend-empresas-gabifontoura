

export const getLocalStorageToken = () => {
    const token = localStorage.getItem("@KenzieEmpresas:token") || ""
    return token
}