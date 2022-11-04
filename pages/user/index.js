
import { logOut } from "../../scripts/logOut.js";
import { authenticationUser } from "../../scripts/authentication.js"
import {getInfosLoggedUser} from "../../scripts/requests.js"
import {getLocalStorageToken} from "../../scripts/localStorage.js"


logOut()
await authenticationUser()


const token = getLocalStorageToken()
getInfosLoggedUser(token)

console.log(token)
