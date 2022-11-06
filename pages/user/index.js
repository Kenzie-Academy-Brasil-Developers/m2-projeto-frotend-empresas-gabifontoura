
import { logOut } from "../../scripts/logOut.js";
import { authenticationUser } from "../../scripts/authentication.js"
import { getAllCompanies, getInfosLoggedUser } from "../../scripts/requests.js"
import { renderModalUpdateMyOwnProfile } from "../../scripts/modalUpdateMyOwnProfile.js";
import { getCoworkers } from "../../scripts/requests.js"



logOut()
await authenticationUser()



function btnsListener() {

    const btnPencil = document.querySelector('.pencil')

    btnPencil.addEventListener('click', () => {
        renderModalUpdateMyOwnProfile()
    })
}

btnsListener()


async function renderUserInfos() {

    const response = await getInfosLoggedUser()

    const username = document.querySelector('.username')
    username.innerText = response.username
    const email = document.querySelector('.email')
    email.innerText = response.email
    const level = document.querySelector('.level')
    level.innerText = response.professional_level
    const kind_of_work = document.querySelector('.kind_of_work')
    kind_of_work.innerText = response.kind_of_work

}

renderUserInfos()



async function createCoworkers(idCompany) {

    const coworkers = await getCoworkers()


    coworkers.forEach((department) => {


        if (idCompany.uuid == department.company_uuid && department.company_uuid !== null) {


            const section = document.querySelector(".table-coworkers")

            const div = document.createElement("div")
            const h2CompanyName = document.createElement("h2")
            const span = document.createElement("span")
            const h3DeptName = document.createElement("h3")


            div.classList = 'header-company-dept flex align-center'
            h2CompanyName.classList = 'company-name title-2'
            h3DeptName.classList = 'title-2'

            h3DeptName.innerText = department.name
            span.innerText = ' ' + '-' + ' '
            h2CompanyName.innerText = idCompany.name

            div.append(h2CompanyName, span, h3DeptName)
            section.append(div)


            const arrayUsers = department.users

            arrayUsers.forEach((coworker) => {
                createCardCoworkers(coworker)
            })

        }


    })

}

async function areYouHired() {

    const infosLoggedUser = await getInfosLoggedUser()


    if (!infosLoggedUser.department_uuid) {

        const ul = document.querySelector(".coworkers-list")

        ul.classList = 'coworkers-list-larger coworkers-list'

        const li = document.createElement("li")
        const h2notYet = document.createElement("h2")

        h2notYet.classList = 'title txt-align-center padding-up-down-12rem'

        h2notYet.innerText = 'Você ainda não foi contratado'

        li.append(h2notYet)
        ul.append(li)

    }
}


areYouHired()




async function renderCoworkers() {


    const companies = await getAllCompanies()


    companies.forEach((company) => {

        createCoworkers(company)

    })


}

renderCoworkers()


function createCardCoworkers(coworker) {

    const ul = document.querySelector(".coworkers-list")

    const li = document.createElement("li")

    const h3coworkerName = document.createElement("h3")
    const h4coworkerLevel = document.createElement("h4")

    li.classList = 'card-coworker'
    h3coworkerName.classList = 'text-1-bold'
    h4coworkerLevel.classList = 'text-3'

    h3coworkerName.innerText = coworker.username
    h4coworkerLevel.innerText = coworker.professional_level

    li.append(h3coworkerName, h4coworkerLevel)
    ul.append(li)


}

export {
    renderUserInfos,
}