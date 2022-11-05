
import { logOut } from "../../scripts/logOut.js";
import { authenticationUser } from "../../scripts/authentication.js"
import { getInfosLoggedUser } from "../../scripts/requests.js"
import { renderModalUpdateMyOwnProfile } from "../../scripts/modalUpdateMyOwnProfile.js";



logOut()
await authenticationUser()



function btnsListener() {

    const btnPencil = document.querySelector('.pencil')

    btnPencil.addEventListener('click', () => {
        renderModalUpdateMyOwnProfile()
    })
}

btnsListener()


async function renderUserInfos() {

    const response = await getInfosLoggedUser()

    const username = document.querySelector('.username')
    username.innerText = response.username
    const email = document.querySelector('.email')
    email.innerText = response.email
    const level = document.querySelector('.level')
    level.innerText = response.professional_level
    const kind_of_work = document.querySelector('.kind_of_work')
    kind_of_work.innerText = response.kind_of_work

}

renderUserInfos()




export{
    renderUserInfos,
}