import { getUsersOutOfWork, hireUser, getAllUsers, dismissUser } from "./requests.js"
import { renderCardsUsers } from "../pages/admin/index.js"


function modalDepartmentDetails(department) {

    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")

    const divHeader = document.createElement("div")
    const h2name = document.createElement("h2")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")


    const main = document.createElement("main")

    const divDescription = document.createElement("div")
    const h3description = document.createElement("h3")
    const h4companyName = document.createElement("h4")

    const formContratar = document.createElement("form")
    const select = document.createElement("select")
    const btnContratar = document.createElement("button")

    const ulUsers = document.createElement("ul")


    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal-eye flex column'
    divHeader.classList = 'flex between modal-header padding-r-2rem'
    h2name.classList = 'title padding-up-down-1rem'
    btnCloseModal.classList = 'text-1-bold clean-btn align-start'

    main.classList = 'flex between'

    divDescription.classList = 'flex column gap-1rem'
    h3description.classList = 'text-1-bold'
    h4companyName.classList = 'text-2'

    formContratar.classList = 'flex column gap-1rem padding-r-2rem end form-contratar'
    select.classList = 'select-form-users users-out-of-work'
    btnContratar.classList = 'btn-contratar btn-green'


    ulUsers.classList = 'users-eye-list flex'

    formContratar.id = 'contratar'

    h2name.innerText = department.name
    h3description.innerText = department.description
    h4companyName.innerText = department.companies.name

    btnContratar.innerText = 'Contratar'
    btnContratar.addEventListener('click', (event) => {
        event.preventDefault()
        hire(department.uuid, select)
        renderUsersSelectModalEye()
        renderUsersSelectModalEye()
        renderHiredUsers(department)
        updateHiredUsers(department)
        renderCardsUsers()



    })

    iconClose.src = '../../assets/close.svg'
    btnCloseModal.addEventListener('click', () => {
        bgmodal.remove()
    })


    renderUsersSelectModalEye()
    renderHiredUsers(department)



    formContratar.append(select, btnContratar)
    divDescription.append(h3description, h4companyName)
    main.append(divDescription, formContratar)
    btnCloseModal.append(iconClose)
    divHeader.append(h2name, btnCloseModal)
    modal.append(divHeader, main, ulUsers)
    bgmodal.append(modal)


    return bgmodal
}




async function renderUsersSelectModalEye() {

    const usersOutOfWork = await getUsersOutOfWork()


    const select = document.querySelector(".users-out-of-work")

    select.innerText = ""

    const option = document.createElement("option")

    option.innerText = 'Selecionar usuário'
    option.value = 'Selecionar usuário'
    select.append(option)

    usersOutOfWork.forEach((user) => {

        const option = document.createElement("option")

        option.innerText = user.username
        option.id = user.uuid
        option.value = user.uuid

        select.append(option)
    })

}

function hire(id, select) {

    // console.log(select.options[select.selectedIndex].id)

    const newuser = {
        user_uuid: select.options[select.selectedIndex].id,
        department_uuid: id
    }

    hireUser(newuser)

}


async function renderHiredUsers(department) {

    const users = await getAllUsers()


    const ul = document.querySelector(".users-eye-list")

    ul.innerText = ""


    users.forEach((user) => {


        if (user.department_uuid !== null && user.department_uuid == department.uuid) {


            const li = document.createElement("li")
            const h3name = document.createElement("h3")
            const h4description = document.createElement("h4")
            const h5companyName = document.createElement("h5")
            const btnDesligar = document.createElement("button")

            li.classList = 'card-user flex column gap-05rem'
            btnDesligar.classList = 'btn-outline-red flex btn-desligar'

            h3name.classList = 'text-1'
            h4description.classList = 'text-2'
            h5companyName.classList = 'text-2'


            h3name.innerText = user.username
            h4description.innerText = user.professional_level
            h5companyName.innerText = department.companies.name

            btnDesligar.innerText = 'Desligar'
            btnDesligar.addEventListener('click', () => {
                updateHiredUsers(department)
                updateHiredUsers(department)
                dismissUser(user.uuid)
                renderUsersSelectModalEye()
                renderUsersSelectModalEye()
                renderCardsUsers()

            })


            li.append(h3name, h4description, h5companyName, btnDesligar)
            ul.append(li)
        } else {

            // console.log("Out Of Work")
        }

    })


}


function updateHiredUsers(department) {

    renderHiredUsers(department)

}







function renderModalDepDetails(department) {

    const mainContainer = document.querySelector(".container")

    const modal = modalDepartmentDetails(department)
    mainContainer.append(modal)
}








export {
    renderModalDepDetails,
}