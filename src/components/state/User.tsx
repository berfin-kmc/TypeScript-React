import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}

export function User() {
    const [user, setUser] = useState<AuthUser | null>(null)

    function handleLogin() {
        setUser(() => ({
            name: "Eylül",
            email: "meow@yahoo.com"
        }))
    }

    function handleLogout() {
        setUser(() => null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h5>User name is: {user?.name}</h5>
            <h6>User email is: {user?.email}</h6>
        </div>
    )

}