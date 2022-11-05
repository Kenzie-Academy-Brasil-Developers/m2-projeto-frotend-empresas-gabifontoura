import { getLocalStorageToken } from "./localStorage.js"

const baseUrl = "http://localhost:6278"


async function validate (token){

        const response = await fetch (baseUrl + "/auth/validate_user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
    
        })
 
        const data = await response.json()

        if(response.ok){
            return data.is_admin
        }

        
}


async function getAllCompanies() {

    
    try{
        const request = await fetch (baseUrl + "/companies",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const response = await request.json()

        return response

    }catch(err){
        console.log(err)
    }

}

async function getAllSectors() {

    
    try{
        const request = await fetch (baseUrl + "/sectors",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
             
            }
        })

        const response = await request.json()
 
        return response

    }catch(err){
        console.log(err)
    }

}


async function getCompaniesPerSector(sector) {

    
    try{
        const request = await fetch (baseUrl + "/companies" + `/${sector}` , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })

        const response = await request.json()
  
        return response

    }catch(err){
        console.log(err)
    }

}



async function login(body) {
    
    try {
        

        const request = await fetch (baseUrl + "/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        
        
        if (request.ok) {
            
            const response = await request.json()
           

            localStorage.setItem("@KenzieEmpresas:token", response.token)  

            const isAdmin = await validate(response.token)

            if(isAdmin){

                window.location.replace("/pages/admin/index.html");
            }
            else{
                window.location.replace("/pages/user/index.html");

            }

           

        } else {
        
            const response = await request.json()
            
            console.log(response.error)
        }

        


    } catch (err) {

        const response = await request.json()

        console.log(response.error)


    }
}

async function register(body) {

    try {
        const request = await fetch(baseUrl + "/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })


        if (request.ok) {

            
            setTimeout(() => {
                window.location.replace("/pages/login/index.html")
            }, 1000)

        } else {
            const response = await request.json()
            
            console.log(response.error)

        }


    } catch (err) {
        const response = await request.json()
            
        console.log(response.error)
     
    }

}




async function getAllDepts(){

    const token = getLocalStorageToken();

    try{
        const request = await fetch (baseUrl + "/departments",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const response = await request.json()

        return response

    }catch(err){
        console.log(err)
    }

}

async function getAllUsers(){

    const token = getLocalStorageToken()

    try{
        const request = await fetch (baseUrl + "/users",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const response = await request.json()

        return response

    }catch(err){
        console.log(err)
    }

}

async function getUsersOutOfWork(){

    
    const token = getLocalStorageToken();


    try{
        const request = await fetch (baseUrl + "/admin/out_of_work",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const response = await request.json()

        return response

    }catch(err){
        console.log(err)
    }

}


async function hireUser(body) {

    const token = getLocalStorageToken();

    try {
      const request = await fetch(baseUrl + "/departments/hire/", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
       
      });
  
      const response = await request.json();
  
      return response;

    } catch (err) {
      console.log(err);
    }
  }

  
async function dismissUser(idUser) {

    const token = getLocalStorageToken();

    try {
      const request = await fetch(baseUrl + "/departments/dismiss/" + idUser , {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      
       
      });
  
      const response = await request.json();
      
      return response;

    } catch (err) {
      console.log(err);
    }
  }

async function getDeptsPerCompany(company_id) {

    const token = getLocalStorageToken();

    try{
        const request = await fetch (baseUrl + "/departments/" + company_id,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const response = await request.json()
       
        return response

    }catch(err){
        console.log(err)
    }

}

async function createDepartment(body) {

    const token = getLocalStorageToken();
  
    console.log(body)
    try {
      const request = await fetch(baseUrl + "/departments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });
      const response = await request.json();
  
      return response;

    } catch (err) {
      console.log(err);
    }
  }


  async function updateDepartment(id,body) {

    const token = getLocalStorageToken();

    try {
      const request = await fetch(baseUrl + "/departments" + `/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(body),
       
      });
  
      const response = await request.json();
      console.log(response)
      return response;

    } catch (err) {
      console.log(err);
    }
  }

  async function deleteDepartment(id) {

    const token = getLocalStorageToken();

    try {
      const request = await fetch(baseUrl + "/departments/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        
       
      });
  
      const response = await request.json();
      
      return response;

    } catch (err) {
      console.log(err);
    }
  }


async function getInfosLoggedUser (){

    const token = getLocalStorageToken();
       
    try{
        const request = await fetch (baseUrl + "/users/profile",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const response = await request.json()

        return response

    }catch(err){
        console.log(err)
    }

}

async function getCoworkers (){

    const token = getLocalStorageToken();

       
    try{
        const request = await fetch (baseUrl + "/users/departments/coworkers",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        })

        const response = await request.json()

        console.log(response)
        return response

    }catch(err){
        console.log(err)
    }

}














export{
    getAllCompanies,
    getAllSectors,
    getCompaniesPerSector,
    login,
    register,
    validate,
    getAllUsers,
    getUsersOutOfWork,
    getAllDepts,
    createDepartment,
    updateDepartment,
    deleteDepartment,
    getDeptsPerCompany,
    getInfosLoggedUser,
    hireUser,
    dismissUser,
}