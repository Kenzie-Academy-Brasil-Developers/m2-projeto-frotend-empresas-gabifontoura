
import { updateMyOwnProfile } from "../../scripts/requests.js"
import { renderUserInfos } from "../pages/user/index.js"




function modalupdateMyOwnProfile() {


        const bgmodal = document.createElement("section")
        const modal = document.createElement("section")
        const form = document.createElement("form")

        const divHeader = document.createElement("div")
        const h4title = document.createElement("h4")
        const btnCloseModal = document.createElement("button")
        const iconClose = document.createElement("img")

        const inputName = document.createElement("input")
        const inputEmail = document.createElement("input")
        const inputPassword = document.createElement("input")

        const btnEditar = document.createElement("button")

        bgmodal.classList = 'modal-wrapper'
        modal.classList = 'modal flex column'
        divHeader.classList = 'flex between modal-header'
        h4title.classList = 'title padding-up-down-1rem'
        btnCloseModal.classList = 'text-1-bold clean-btn align-start'
        form.classList = 'flex column gap-1rem'
        inputName.classList = 'input-default'
        inputEmail.classList = 'input-default'
        inputPassword.classList = 'input-default'


        btnEditar.classList = 'btn-primary-max'

        h4title.innerText = 'Editar Perfil'
        iconClose.src = '../../assets/close.svg'
        btnCloseModal.addEventListener('click', () => {
            bgmodal.remove()
        })

        inputName.placeholder = 'Seu nome'
        inputName.name = 'username'
        inputEmail.placeholder = 'Seu e-mail'
        inputEmail.name =  'email'
        inputPassword.placeholder = 'Sua senha'
        inputPassword.name ='password'

        btnEditar.innerText = 'Editar perfil'

        form.addEventListener('submit', async (event) => {


            event.preventDefault()

            const inputs = [...event.target]

            const newProfile = {}

            inputs.forEach(({ name, value }) => {

                if (name) {
                    newProfile[name] = value
                }
            })


            await updateMyOwnProfile(newProfile)
            await renderUserInfos()
            bgmodal.remove()
        })

        form.append(inputName, inputEmail, inputPassword, btnEditar)
        btnCloseModal.append(iconClose)
        divHeader.append(h4title, btnCloseModal)
        modal.append(divHeader, form)
        bgmodal.append(modal)


        return bgmodal
    }



function renderModalUpdateMyOwnProfile() {

    const mainContainer = document.querySelector(".container")

    const modal = modalupdateMyOwnProfile()
    mainContainer.append(modal)
}





export {
    renderModalUpdateMyOwnProfile,

}