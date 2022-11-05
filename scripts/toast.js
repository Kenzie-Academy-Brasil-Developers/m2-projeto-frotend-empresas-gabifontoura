
const toast = (title, message) => {

    const body = document.querySelector("body")

    const divToast = document.createElement("div")
    const icon = document.createElement("img")
    const textContainer = document.createElement("div")
    const h3 = document.createElement("h3")
    const pMsg = document.createElement("p")

    divToast.classList = 'toast-container gap-1rem'

    icon.src =  "/assets/check.svg"
    icon.alt = title
    h3.innerText = title
    pMsg.innerText = message

    textContainer.append(h3,pMsg)
    divToast.append(icon,textContainer)
    body.append(divToast)
    console.log("hi")

    

}

const toastAlert = (title, message) => {

    const body = document.querySelector("body")

    const divToast = document.createElement("div")
    const icon = document.createElement("img")
    const textContainer = document.createElement("div")
    const h3 = document.createElement("h3")
    const pMsg = document.createElement("p")

    divToast.classList = 'toast-container-alert gap-1rem'
    icon.classList = 'icon'


    icon.src =  "/assets/alert.svg"
    icon.alt = title
    h3.innerText = title
    pMsg.innerText = message

    textContainer.append(h3,pMsg)
    divToast.append(icon,textContainer)
    body.append(divToast)
    console.log("hi")

    

}

export{
    toast,
    toastAlert,
}