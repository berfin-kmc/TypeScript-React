import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export function User2() {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    function handleLogin() {
        setUser(() => ({
            name: "Eylül",
            email: "meow@yahoo.com"
        }))
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <h5>User name is: {user.name}</h5>
            <h6>User email is: {user.email}</h6>
        </div>
    )

}