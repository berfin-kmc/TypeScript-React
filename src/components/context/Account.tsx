import { useContext } from "react"
import { AccountContext } from "./AccountContext"


export function Account() {

    const accountContext = useContext(AccountContext)

    function handleLogin() {
        accountContext.setAccount(
            {
                name: "Eylül",
                email: "eylul@yahoo.com"
            }
        )
    }

    function handleLogout() {
        accountContext.setAccount(null)
    }


    return <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User name is: {accountContext.account?.name} </div>
        <div>User email is: {accountContext.account?.email} </div>
    </div>
}