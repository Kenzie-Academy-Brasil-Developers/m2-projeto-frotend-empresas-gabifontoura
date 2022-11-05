
import { updateDepartment } from "../scripts/requests.js"
import {renderCardsDepts} from "../pages/admin/index.js"




function modalUpdateDepartament(department) {


    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")
    const form = document.createElement("form")

    const divHeader = document.createElement("div")
    const h4title = document.createElement("h4")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")

    const inputDescription = document.createElement("textarea")
    
    
    const btnSalvar = document.createElement("button")

    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal flex column'
    divHeader.classList = 'flex between modal-header'
    h4title.classList = 'title padding-up-down-1rem'
    btnCloseModal.classList = 'text-1-bold clean-btn align-start'
    form.classList = 'flex column gap-1rem'
    
    inputDescription.classList = 'input-textarea'
   
    btnSalvar.classList = 'btn-primary-max'

    h4title.innerText = 'Editar Departamento'
    iconClose.src = '../../assets/close.svg'
    btnCloseModal.addEventListener('click',() => {
        bgmodal.remove()
    })
    

   
    inputDescription.name = 'description'
    inputDescription.value = department.description
    btnSalvar.innerText = 'Salvar Alterações'



    form.addEventListener('submit', async (event) => {

        
        event.preventDefault()

        const inputs = [...event.target]
        
        const newDepartament = {}
    
        inputs.forEach(({name, value}) => {
          
            if(name){
                newDepartament[name] = value
            }
        })


        await updateDepartment(department.uuid, newDepartament)
        await renderCardsDepts()
        bgmodal.remove()
    })

    form.append(inputDescription, btnSalvar)
    btnCloseModal.append(iconClose)
    divHeader.append(h4title, btnCloseModal)
    modal.append(divHeader, form)
    bgmodal.append(modal)
    
    
    return bgmodal
}


function renderModalUpdateDep(department) {

    const mainContainer = document.querySelector(".container")

    const modal = modalUpdateDepartament(department)
    mainContainer.append(modal)
}


export {
    renderModalUpdateDep,
    
}