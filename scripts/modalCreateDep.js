import { createDepartment, getAllCompanies, getAllDepts } from "./requests.js"
import { renderCardsDepts } from "../pages/admin/index.js"
import { getLocalStorageToken} from "./localStorage.js"



function modalCreateDepartament() {


    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")
    const form = document.createElement("form")

    const divHeader = document.createElement("div")
    const h4title = document.createElement("h4")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")

    const inputName = document.createElement("input")
    const inputDescription = document.createElement("input")
    const select = document.createElement("select")
    const btnCreate = document.createElement("button")

    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal flex column'
    divHeader.classList = 'flex between modal-header'
    h4title.classList = 'title'
    btnCloseModal.classList = 'text-1-bold clean-btn'
    form.classList = 'flex column gap-1rem'
    inputName.classList = 'input-default'
    inputDescription.classList = 'input-default'
    select.classList = 'select-form select-companies-modal'
    btnCreate.classList = 'btn-primary-max'

    h4title.innerText = 'Criar Departamento'
    iconClose.src = '../../assets/close.svg'
    btnCloseModal.addEventListener('click',() => {
        bgmodal.remove()
    })
    
    inputName.name = 'name'
    inputName.placeholder = 'Nome do departamento'
    inputDescription.name = 'description'
    inputDescription.placeholder = 'Descrição'
    btnCreate.innerText = 'Criar o departamento'
    select.name = 'company_uuid'
    

    renderCompaniesSelectModal()

    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const inputs = [...event.target]
        
        const newDepartament = {}
    
        inputs.forEach(({name, value}) => {
          
            if(name){
                newDepartament[name] = value
            }
        })

        await createDepartment(newDepartament)
        await renderCardsDepts()
        bgmodal.remove()
    })

    form.append(inputName, inputDescription, select, btnCreate)
    btnCloseModal.append(iconClose)
    divHeader.append(h4title, btnCloseModal)
    modal.append(divHeader, form)
    bgmodal.append(modal)
    
    
    return bgmodal
}



async function renderCompaniesSelectModal(){

    const companiesList = await getAllCompanies()
    
    const select = document.querySelector(".select-companies-modal")
    
    const option = document.createElement("option")
    
    option.innerText = 'Selecionar empresa'
    option.value = 'Selecionar empresa'
    select.append(option)
    
    companiesList.forEach((company) => {

        const option = document.createElement("option")

        option.innerText = company.name
        option.value = company.uuid
        option.id = company.uuid

        select.append(option)
    })
    
}




function renderModalCreateDep() {

    const mainContainer = document.querySelector(".container")

    const modal = modalCreateDepartament()
    mainContainer.append(modal)
}









// async function selectCompaniesFilterDepts(){
    
//     const departmentsList = await getAllDepts()
//     const token = getLocalStorageToken()

//     const select = document.querySelector(".select-companies-admin")


//     select.addEventListener('change', () => {
        
//     const ul = document.querySelector(".card-list")

//     ul.innerText = ""

//     if(select.value == 'Selecionar Empresa'){

//             departmentsList.forEach((element) => {
        
//             createCardDepts(element)

//         })
//     }

//     else{

//         getDeptsPerCompany(token,select.id)
        
//     }
    
    
// })



// }

export {
    renderModalCreateDep,
    selectCompaniesFilterDepts,
}