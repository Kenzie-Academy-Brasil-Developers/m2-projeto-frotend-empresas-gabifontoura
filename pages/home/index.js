

function toogleBurger() {
   
    const btn = document.querySelector("#open-menu")
    
    btn.addEventListener('click', () => {
   
        createMenu()
        
    })

}

toogleBurger()

function createMenu (){

        const header = document.createElement("header")
        const div = document.createElement("div")
        const section = document.createElement("section")
        const iconlogo = document.createElement("div")
        const imglogo = document.createElement("img")
        const btnburger = document.createElement("button")
        const iconburger = document.createElement("img")
        const bgmodal = document.createElement("div")
        const nav = document.createElement("nav")
        const btnLogin = document.createElement("button")
        const btnCadastro = document.createElement("button")
        const main = document.querySelector("main")
        

        header.classList = 'flex between absolute false-header'
        div.classList ='header flex between'
        section.classList ='logo flex gap-1rem'
        iconlogo.classList = 'logo-icon'
        btnburger.classList = 'menu-burger clean-btn'
        iconburger.classList ='burger'
        bgmodal.classList = 'nav absolute'
        nav.classList = 'flex gap-05rem '
        btnLogin.classList = 'btn-outline'
        btnCadastro.classList = 'btn-primary'
        
        btnLogin.innerText = 'Login'
        btnCadastro.innerText = 'Cadastro'
        imglogo.src='../../assets/Kenzie Empresas.svg'
        iconburger.src = "../../assets/close.svg"
        btnburger.addEventListener('click', () => {
            header.remove()
            bgmodal.remove()
        })

        btnLogin.addEventListener('click', () => {
            window.location.replace("./pages/login/index.html")
        })

        btnCadastro.addEventListener('click', () => {
            window.location.replace("./pages/register/index.html")
        })

        btnburger.append(iconburger)
        section.append(iconlogo,imglogo)
        div.append(section,btnburger)
        header.append(div)
        nav.append(btnLogin,btnCadastro)
        bgmodal.append(nav)
        main.append(header,bgmodal)

     
    }

    function btnsListener (){
        const btnLogin = document.querySelector(".login")
        const btnCadastrar = document.querySelector(".register")


        btnLogin.addEventListener('click', () => {
            window.location.replace("./pages/login/index.html")
        })

        btnCadastrar.addEventListener('click', () => {
            window.location.replace("./pages/register/index.html")
        })
    }

    btnsListener()