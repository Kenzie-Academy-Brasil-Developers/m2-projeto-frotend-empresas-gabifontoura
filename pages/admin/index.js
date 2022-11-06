
import { logOut } from "../../scripts/logOut.js";
import { getAllUsers } from "../../scripts/requests.js"
import { getAllDepts } from "../../scripts/requests.js"
import { getAllCompanies } from "../../scripts/requests.js"
import { authenticationAdmin } from "../../scripts/authentication.js"
import { renderModalDepDetails } from "../../scripts/modalEye.js"
import { renderModalCreateDep } from "../../scripts/modalCreateDep.js"
import { renderModalUpdateDep } from "../../scripts/modalUptadeDep.js"
import { renderModalDeleteDep } from "../../scripts/modalDeleteDep.js"
import { renderModalUpdateUser } from "../../scripts/modalUpdateUser.js"
import { renderModalDeleteUser } from "../../scripts/modalDeleteUser.js"



import { getDeptsPerCompany } from "../../scripts/requests.js"


logOut()
await authenticationAdmin()




function btnsListener() {

    const btnCreate = document.querySelector("#btn-create")

    btnCreate.addEventListener('click', () => {

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

    btnEye.addEventListener('click', () => {

        renderModalDepDetails(element)
    })
    btnPencil.addEventListener('click', () => {

        renderModalUpdateDep(element)
    })
    btnTrash.addEventListener('click', () => {

        renderModalDeleteDep(element)

    })

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


    const departaments = await getAllDepts()


    departaments.forEach(element => {

        createCardDepts(element)
    });

}

renderCardsDepts()




async function selectFilterDeptsPerCompany() {

    const departments = await getAllDepts()

    console.log(departments)


    const select = document.querySelector(".select-admin")



    select.addEventListener('change', () => {

        const ul = document.querySelector(".card-list")

        ul.innerText = ""

        console.log(select.value)

        if (select.value !== 'Selecionar empresa') {

            departments.forEach((department) => {

                if (department.companies.uuid == select.value) {
                    createCardDepts(department)

                }

            })

        } else {
            departments.forEach((department) => {
                createCardDepts(department)

            })

        }



    });

}


selectFilterDeptsPerCompany()



async function renderOptionsSelectAdmin() {

    const select = document.querySelector(".select-admin")

    const companiesList = await getAllCompanies()


    companiesList.forEach((company) => {

        const option = document.createElement("option")


        option.innerText = company.name
        option.id = company.name
        option.value = company.uuid


        select.append(option)
    })
}

renderOptionsSelectAdmin()







async function createCardUsers(element) {

    const deptsList = await getAllDepts()


    deptsList.forEach((dept) => {

        if (dept.uuid == element.department_uuid) {

            const ul = document.querySelector(".users-list")

            const li = document.createElement("li")
            const h3name = document.createElement("h3")
            const h4description = document.createElement("h4")
            const h5companyName = document.createElement("h5")


            const div = document.createElement("div")

            const btnPencil = document.createElement("button")
            const iconPencil = document.createElement("img")

            const btnTrash = document.createElement("button")
            const iconTrash = document.createElement("img")

            li.classList = 'card flex column gap-05rem'
            h3name.classList = 'text-1-bold'
            h4description.classList = 'text-2'
            h5companyName.classList = 'text-2'

            div.classList = 'icons flex'

            btnPencil.classList = 'clean-btn'
            btnTrash.classList = 'clean-btn'

            iconPencil.src = "../../assets/pencil_black.svg"
            iconTrash.src = "../../assets/trash.svg"

            h3name.innerText = element.username
            h4description.innerText = element.professional_level
            h5companyName.innerText = dept.companies.name

            btnPencil.addEventListener('click', () => {

                renderModalUpdateUser(element)
            })

            btnTrash.addEventListener('click', () => {
                renderModalDeleteUser(element)
            })

            btnPencil.append(iconPencil)
            btnTrash.append(iconTrash)
            div.append(btnPencil, btnTrash)
            li.append(h3name, h4description, h5companyName, div)
            ul.append(li)

        }
    })

    if (element.department_uuid == null) {

        const ul = document.querySelector(".users-list")

        const li = document.createElement("li")
        const h3name = document.createElement("h3")
        const h4description = document.createElement("h4")
        const h5companyName = document.createElement("h5")


        const div = document.createElement("div")

        const btnPencil = document.createElement("button")
        const iconPencil = document.createElement("img")

        const btnTrash = document.createElement("button")
        const iconTrash = document.createElement("img")

        li.classList = 'card flex column gap-05rem'
        h3name.classList = 'text-1-bold'
        h4description.classList = 'text-2'
        h5companyName.classList = 'text-2'

        div.classList = 'icons flex'

        btnPencil.classList = 'clean-btn'
        btnTrash.classList = 'clean-btn'

        iconPencil.src = "../../assets/pencil_black.svg"
        iconTrash.src = "../../assets/trash.svg"

        h3name.innerText = element.username
        h4description.innerText = element.professional_level
        h5companyName.innerText = "Disponível"

        btnPencil.addEventListener('click', () => {

            renderModalUpdateUser(element)
        })

        btnTrash.addEventListener('click', () => {
            renderModalDeleteUser(element)
        })

        btnPencil.append(iconPencil)
        btnTrash.append(iconTrash)
        div.append(btnPencil, btnTrash)
        li.append(h3name, h4description, h5companyName, div)
        ul.append(li)
    }


}




async function renderCardsUsers() {

    const ul = document.querySelector(".users-list")

    ul.innerText = ""


    const users = await getAllUsers()


    users.forEach(element => {

        if (element.username !== "ADMIN") {

            createCardUsers(element)
        }


    })


}

renderCardsUsers()





export {
    renderCardsDepts,
    renderCardsUsers,
}