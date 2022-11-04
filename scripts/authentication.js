import { validate } from "./requests.js"

export async function authenticationAdmin() {
    
    const token = localStorage.getItem('@KenzieEmpresas:token')

    if (token) {
      
        const response = validate(token)
       
        if (!response) {

            window.location.replace("/pages/user/index.html");

        }

    }
}


export async function authenticationUser() {

    const token = localStorage.getItem('@KenzieEmpresas:token')

    if (token) {
      
        const response = await validate(token)
   

        if (response) {

            window.location.replace("/pages/admin/index.html");
        }

    }
}