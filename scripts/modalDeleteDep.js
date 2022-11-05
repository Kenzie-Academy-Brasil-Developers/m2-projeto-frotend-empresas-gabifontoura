import { renderCardsDepts } from "../pages/admin/index.js"
import { deleteDepartment } from "./requests.js"



function modalDeleteDepartament(department) {


    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")

    const divHeader = document.createElement("div")
    const h4title = document.createElement("h4")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")

    const btnConfirmar = document.createElement("button")


    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal-delete flex column'
    divHeader.classList = 'flex end modal-header align-center'
    h4title.classList = 'title-2 text-delete'
    btnCloseModal.classList = 'text-1-bold clean-btn'
    btnConfirmar.classList = 'btn-green-max'


    iconClose.src = '../../assets/close.svg'
    btnCloseModal.addEventListener('click',() => {
        bgmodal.remove()
    })
    h4title.innerText = `Realmente deseja deletar o departamento ${department.name} e demitir seus funcionários?`

    btnConfirmar.innerText = 'Confirmar'
    console.log(department)
    console.log(department.uuid)

    btnConfirmar.addEventListener('click', async (event) => {
        console.log("hi")
        event.preventDefault()

        await deleteDepartment(department.uuid)
        await renderCardsDepts()
        bgmodal.remove()
        
    })



    btnCloseModal.append(iconClose)
    divHeader.append(btnCloseModal)
    modal.append(divHeader,h4title,btnConfirmar)
    bgmodal.append(modal)
    
    
    return bgmodal
}


function renderModalDeleteDep(department) {

    const mainContainer = document.querySelector(".container")

    const modal = modalDeleteDepartament(department)
    mainContainer.append(modal)
}


export {
    renderModalDeleteDep,
    
}