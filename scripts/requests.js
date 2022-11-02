

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
        // console.log(response)
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
        // console.log(response)
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
        // console.log(response)
        return response

    }catch(err){
        console.log(err)
    }

}


export{
    getAllCompanies,
    getAllSectors,
    getCompaniesPerSector,
}