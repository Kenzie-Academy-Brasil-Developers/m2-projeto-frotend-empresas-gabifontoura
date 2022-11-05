import { updateUser } from "../scripts/requests.js"
import {renderCardsUsers} from "../pages/admin/index.js"





function modalUpdateUser(user) {


    const bgmodal = document.createElement("section")
    const modal = document.createElement("section")
    const form = document.createElement("form")

    const divHeader = document.createElement("div")
    const h4title = document.createElement("h4")
    const btnCloseModal = document.createElement("button")
    const iconClose = document.createElement("img")

    const selectKindOfWork = document.createElement("select")
    const option = document.createElement("option")
    const optionHome = document.createElement("option")
    const optionPresencial = document.createElement("option")
    const optionHibrido = document.createElement("option")


    const selectLevel = document.createElement("select")
    const option0 = document.createElement("option")
    const optionEstag = document.createElement("option")
    const optionJr = document.createElement("option")
    const optionPl = document.createElement("option")
    const optionSr = document.createElement("option")

    const btnEditar = document.createElement("button")

    bgmodal.classList = 'modal-wrapper'
    modal.classList = 'modal flex column'
    divHeader.classList = 'flex between'
    h4title.classList = 'title padding-up-down-1rem'
    btnCloseModal.classList = 'text-1-bold clean-btn align-start'
    form.classList = 'flex column gap-1rem'
    selectKindOfWork.classList = 'select-form'
    selectLevel.classList = 'select-form'
    btnEditar.classList = 'btn-primary-max'


    h4title.innerText = 'Editar Usuário'
    iconClose.src = '../../assets/close.svg'
    btnCloseModal.addEventListener('click',() => {
        bgmodal.remove()
    })

    option.innerText = 'Selecionar modalidade de trabalho'
    optionHome.innerText = 'HomeOffice'
    optionHibrido.innerText = 'Híbrido'
    optionPresencial.innerText = 'Presencial'

    optionHome.value = 'home office'
    optionHibrido.value = 'hibrido'
    optionPresencial.value = 'presencial'

    option0.innerText = 'Selecionar nível profissional'
    optionEstag.innerText = 'Estágio'
    optionJr.innerText = 'Júnior'
    optionPl.innerText = 'Pleno'
    optionSr.innerText = 'Sênior'

    optionEstag.value = 'estágio'
    optionJr.value = 'júnior'
    optionPl.value= 'pleno'
    optionSr.value = 'sênior'

    selectKindOfWork.name = "kind_of_work"
    selectLevel.name = "professional_level"


    btnEditar.innerText = 'Editar'


    form.addEventListener('submit', async (event) => {

        
        event.preventDefault()

        const inputs = [...event.target]
        
        const newUser = {}
        console.log(newUser)
    
        inputs.forEach(({name, value}) => {
          
            if(name){
                newUser[name] = value
            }
        })


        await updateUser(user.uuid, newUser)
        await renderCardsUsers()
        bgmodal.remove()
    })


    selectLevel.append(option0,optionEstag,optionJr,optionPl,optionSr)
    selectKindOfWork.append(option,optionHome,optionPresencial,optionHibrido)
    form.append(selectKindOfWork,selectLevel,btnEditar)
    btnCloseModal.append(iconClose)
    divHeader.append(h4title, btnCloseModal)
    modal.append(divHeader, form)
    bgmodal.append(modal)
    
    
    return bgmodal

}


function renderModalUpdateUser(user) {

    const mainContainer = document.querySelector(".container")

    const modal = modalUpdateUser(user)
    mainContainer.append(modal)
}


export {
    renderModalUpdateUser,
    
}