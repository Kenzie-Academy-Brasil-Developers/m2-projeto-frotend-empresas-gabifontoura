import { createMenuBurger } from "../../scripts/header.js"
import { getAllCompanies, getCompaniesPerSector } from "../../scripts/requests.js"
import { getAllSectors } from "../../scripts/requests.js"




///HEADER

function btnsMenuListener() {
    const btn2 = document.querySelector(".btn-2")
    const btn1 = document.querySelector(".btn-1")


    btn2.addEventListener('click', () => {
        window.location.replace("/pages/login/index.html")
    })

    btn1.addEventListener('click', () => {
        window.location.replace("/pages/register/index.html")
    })


}

btnsMenuListener()

function btnsBurger() {
    const btnBurger = document.querySelector("#open-menu")


    btnBurger.addEventListener('click', () => {

        createMenuBurger()

        const btn2 = document.querySelector("#btn2")
        const btn1 = document.querySelector("#btn1")

        btn2.innerText = 'Login'
        btn1.innerText = 'Cadastrar'

        btn2.addEventListener('click', () => {
            window.location.replace("/pages/login/index.html")
        })

        btn1.addEventListener('click', () => {
            window.location.replace("/pages/register/index.html")
        })

    })


}

btnsBurger()

///////////





// async function renderSectorsSelect() {

//     //essa função eu fiz antes de perceber que na API tinha como fazer requisição dos setores direto, 
//     // mas como ela deu certo, não quero excluir, para ficar de exemplo


//     const companiesList = await getAllCompanies()

//     let sectors = []

//     companiesList.forEach((element) => {

//         sectors.push(element.sectors.description)

//     })


//     const uniqueSectors = new Set();

//     sectors.forEach((sector) => {
//         uniqueSectors.add(sector)
//     })


//     // console.log([...uniqueSectors])

//     const select = document.querySelector(".select")

//     const noRepeat = [...uniqueSectors]

//     noRepeat.forEach((setorName) => {

//         const option = document.createElement("option")

//         option.innerText = setorName

//         select.append(option)
//     })


// }


// renderSectorsSelect()


async function renderAllSectorsSelect() {

    const sectorsList = await getAllSectors()


    const select = document.querySelector(".select-home")

    sectorsList.forEach((sectorName) => {

        const option = document.createElement("option")

        option.innerText = sectorName.description

        option.value = sectorName.description
        option.id = sectorName.description

        select.append(option)
    })


}

renderAllSectorsSelect()



async function filterSelect() {

    const select = document.querySelector(".select-home")
    const companiesList = await getAllCompanies()
    
    
    companiesList.forEach((element) => {
        
        createCardCompanies(element)
        
    })
    
    
    select.addEventListener('change', () => {

        const ul = document.querySelector(".company-list")
    
        ul.innerText = ""

        if(select.value == 'Selecionar Setor'){

            companiesList.forEach((element) => {
            
                createCardCompanies(element)
                
            })
        }

        else{

        renderCompanies(select.value)

        }


    })

}


filterSelect()



async function renderCompanies(sector) {

    const perSector = await getCompaniesPerSector(sector)

    perSector.forEach((element) => {
        
       createCardCompanies(element)
        
    })
}




async function createCardCompanies(element) {

    const ul = document.querySelector(".company-list")

    const li = document.createElement("li")
    const h2name = document.createElement("h2")
    const div = document.createElement("div")
    const pHours = document.createElement("p")
    const tagSector = document.createElement("div")

    li.classList = 'company flex column'
    h2name.classList = 'company-name text-1-bold">'
    div.classList = 'company-description flex column gap-1rem'
    pHours.classList = 'text-2'
    tagSector.classList = 'btn-outline-rad'

    h2name.innerText = element.name
    pHours.innerText = element.opening_hours
    tagSector.innerText = element.sectors.description

    div.append(pHours, tagSector)
    li.append(h2name, div)
    ul.append(li)

    // <li class="company flex column" >
    //     <h2 class="company-name">Empresa Name</h2>
    //     <div class="company-description flex column gap-1rem">
    //         <p>10 horas</p>
    //         <div class="btn-outline-rad">Setor</div>
    //     </div>
    // </li >

}