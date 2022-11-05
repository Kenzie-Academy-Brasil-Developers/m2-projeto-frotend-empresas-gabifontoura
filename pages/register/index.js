import { createMenuBurger} from "../../scripts/header.js"
import { register} from "../../scripts/requests.js"



function btnsMenuListener (){
    const btn2 = document.querySelector(".btn-2")
    const btn1 = document.querySelector(".btn-1")
    
    
        btn2.addEventListener('click', () => {
            window.location.replace("/pages/home/index.html")
        })

        btn1.addEventListener('click', () => {
            window.location.replace("/pages/login/index.html")
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
        btn1.innerText = 'Login'
        
            btn2.addEventListener('click', () => {
                window.location.replace("/pages/home/index.html")
            })
    
            btn1.addEventListener('click', () => {
                window.location.replace("/pages/login/index.html")
            })
            
    })
    
    
}

btnsBurger()










function btnReturnToLogin (){

    const btn = document.querySelector(".return")

    btn.addEventListener('click' , () => {
        window.location.replace("/pages/login/index.html")
    })
}

btnReturnToLogin()









const eventRegister = () => {
    const form = document.querySelector("form")
   
    const elements = [...form.elements]

   
    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const body = {}
        console.log(elements)
        
    
        
        elements.forEach(({name, value}) => {
          
            if(name && value !== ""){
                body[name] = value
            }
        })
        
        console.log(body)
        await register(body)

    })
}

eventRegister()
