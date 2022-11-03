

function createMenuBurger (){

        const header = document.createElement("header")
        const div = document.createElement("div")
        const section = document.createElement("section")
        const iconlogo = document.createElement("div")
        const imglogo = document.createElement("img")
        const btnburger = document.createElement("button")
        const iconburger = document.createElement("img")
        const bgmodal = document.createElement("div")
        const nav = document.createElement("nav")
        const btn2 = document.createElement("button")
        const btn1 = document.createElement("button")
        const main = document.querySelector("main")
        

        header.classList = 'flex between absolute false-header'
        div.classList ='header flex between'
        section.classList ='logo flex gap-1rem'
        iconlogo.classList = 'logo-icon'
        btnburger.classList = 'menu-burger clean-btn'
        iconburger.classList ='burger'
        bgmodal.classList = 'nav-mobile absolute'
        nav.classList = 'flex gap-05rem '
        btn2.classList = 'btn-2 btn-outline'
        btn1.classList = 'btn-1 btn-primary'

        btn2.id = 'btn2'
        btn1.id = 'btn1'

        imglogo.src='../../assets/Kenzie Empresas.svg'
        iconburger.src = "../../assets/close.svg"
        btnburger.addEventListener('click', () => {
            header.remove()
            bgmodal.remove()
        })



        btnburger.append(iconburger)
        section.append(iconlogo,imglogo)
        div.append(section,btnburger)
        header.append(div)
        nav.append(btn2,btn1)
        bgmodal.append(nav)
        main.append(header,bgmodal)

     
    }

   

          
    export {
      
        createMenuBurger,
    }