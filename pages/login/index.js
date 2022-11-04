import { createMenuBurger} from "../../scripts/header.js"
import { login } from "../../scripts/requests.js"


function btnsMenuListener (){
    const btn2 = document.querySelector(".btn-2")
    const btn1 = document.querySelector(".btn-1")
     
    
        btn2.addEventListener('click', () => {
            window.location.replace("/pages/home/index.html")
        })

        btn1.addEventListener('click', () => {
            window.location.replace("/pages/register/index.html")
        })
        
        
    }

btnsMenuListener()

function btnsBurger (){

    const btnBurger = document.querySelector("#open-menu")
    
    
    btnBurger.addEventListener('click', () => {
        
        createMenuBurger()

        const btn2 = document.querySelector("#btn2")
        const btn1 = document.querySelector("#btn1")
        
        btn2.innerText = 'Home'
        btn1.innerText = 'Cadastrar'
        
            btn2.addEventListener('click', () => {
                window.location.replace("/pages/home/index.html")
            })
    
            btn1.addEventListener('click', () => {
                window.location.replace("/pages/register/index.html")
            })
            
    })
    

}

btnsBurger()




function btnRegister (){

    const btn = document.querySelector(".register")

    btn.addEventListener('click' , () => {
        window.location.replace("/pages/register/index.html")
    })
}

btnRegister()




const eventLogin = () => {

    const form = document.querySelector("form")
    
    const elements = [...form.elements]

    form.addEventListener('submit', async (event) => {

        event.preventDefault()

        const body = {}

        elements.forEach((element)=> {
            if (element.tagName == "INPUT" && element.value !== ""){
                body[element.id] = element.value
            }
        })

        await login(body)

    })
}

eventLogin()

