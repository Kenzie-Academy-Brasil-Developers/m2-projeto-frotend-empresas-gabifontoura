import { createMenuBurger} from "../../scripts/header.js"


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