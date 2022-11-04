import { getLocalStorageToken } from "../../scripts/localStorage.js";
import { logOut } from "../../scripts/logOut.js";
import { getAllUsers } from "../../scripts/requests.js"
import { getAllDepts } from "../../scripts/requests.js"
import { getAllCompanies } from "../../scripts/requests.js"
import { renderModalCreateDep } from "../../scripts/modalCreateDep.js"
import { authenticationAdmin } from "../../scripts/authentication.js"


logOut()
await authenticationAdmin()

// selectCompaniesFilterDepts()



function btnsListener() {

    const btnCreate = document.querySelector("#btn-create")

    btnCreate.addEventListener('click', () => {
        console.log("hi")
      
        renderModalCreateDep()
    })
}



btnsListener()


async function createCardDepts(element) {

    const ul = document.querySelector(".card-list")

    const li = document.createElement("li")
    const h3name = document.createElement("h3")
    const h4description = document.createElement("h4")
    const h5companyName = document.createElement("h5")

    const div = document.createElement("div")
    const btnEye = document.createElement("button")
    const iconEye = document.createElement("img")

    const btnPencil = document.createElement("button")
    const iconPencil = document.createElement("img")

    const btnTrash = document.createElement("button")
    const iconTrash = document.createElement("img")

    li.classList = 'card flex column gap-05rem'
    h3name.classList = 'text-1-bold'
    h4description.classList = 'text-2'
    h5companyName.classList = 'text-2'

    div.classList = 'icons flex'
    btnEye.classList = 'clean-btn'
    btnPencil.classList = 'clean-btn'
    btnTrash.classList = 'clean-btn'

    iconEye.src = "../../assets/eye.svg"
    iconPencil.src = "../../assets/pencil_black.svg"
    iconTrash.src = "../../assets/trash.svg"

    h3name.innerText = element.name
    h4description.innerText = element.description
    h5companyName.innerText = element.companies.name

    btnEye.append(iconEye)
    btnPencil.append(iconPencil)
    btnTrash.append(iconTrash)

    div.append(btnEye, btnPencil, btnTrash)
    li.append(h3name, h4description, h5companyName, div)
    ul.append(li)
}



async function renderCardsDepts() {

    const ul = document.querySelector(".card-list")

    ul.innerText = ""

    const token = getLocalStorageToken()


    const departaments = await getAllDepts(token)


    departaments.forEach(element => {

        createCardDepts(element)
    });

}

renderCardsDepts()









async function createCardUsers(element) {

    const ul = document.querySelector(".users-list")

    const li = document.createElement("li")
    const h3name = document.createElement("h3")
    const h4description = document.createElement("h4")
    // const h5companyName = document.createElement("h5")

    const div = document.createElement("div")

    const btnPencil = document.createElement("button")
    const iconPencil = document.createElement("img")

    const btnTrash = document.createElement("button")
    const iconTrash = document.createElement("img")

    li.classList = 'card flex column gap-05rem'
    h3name.classList = 'text-1-bold'
    h4description.classList = 'text-2'
    // h5companyName.classList = 'text-2'

    div.classList = 'icons flex'

    btnPencil.classList = 'clean-btn'
    btnTrash.classList = 'clean-btn'

    iconPencil.src = "../../assets/pencil_black.svg"
    iconTrash.src = "../../assets/trash.svg"

    h3name.innerText = element.username
    h4description.innerText = element.professional_level
    // h5companyName.innerText = element.companies.name


    btnPencil.append(iconPencil)
    btnTrash.append(iconTrash)
    div.append(btnPencil, btnTrash)
    li.append(h3name, h4description, div)
    ul.append(li)
}




async function renderCardsUsers() {

    const token = getLocalStorageToken()


    const users = await getAllUsers(token)


    users.forEach(element => {

        if (element.username !== "ADMIN") {

            createCardUsers(element)
        }

    });

}

renderCardsUsers()





async function renderOptionsSelectAdmin() {

    const select = document.querySelector(".select-admin")

    const companiesList = await getAllCompanies()

    companiesList.forEach((element) => {

        const option = document.createElement("option")

        option.innerText = element.name

        select.append(option)
    })
}

renderOptionsSelectAdmin()



export {
    renderCardsDepts,
}