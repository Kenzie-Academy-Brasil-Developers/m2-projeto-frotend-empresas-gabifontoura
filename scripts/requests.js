

const baseUrl = "http://localhost:6278"


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

            localStorage.setItem("@KenzieEmpresas:token", JSON.stringify(response))
            
            admAuth(JSON.parse(localStorage.getItem("@KenzieEmpresas:token")))
          
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


async function admAuth(token){


        const request = await fetch (baseUrl + "/auth/validate_user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
    
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log(res.json().then((response) => response.error));
          }
        })

        .then((res) => {
          if (res) {
            localStorage.setItem("@KenzieEmpresas:tipoUsuario", "admin");
            window.location.replace("/pages/admin/index.html");
        } else {
            localStorage.setItem("@KenzieEmpresas:tipoUsuario", "users");
            window.location.replace("/pages/user/index.html");
        }
    });

    
}
















export{
    getAllCompanies,
    getAllSectors,
    getCompaniesPerSector,
    login,
    register
}