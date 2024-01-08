import { useState } from "react"

export function LoggedIn() {

//Most of the time you don't need to explicit the type of the state if you start it with an initial value.
// Type inference will take care of it.

    const [isLoggedIn  , setIsLoggedIn ] = useState<boolean>(false)

    function handleLogInChange () {
        setIsLoggedIn((prev : boolean) => (!prev) )
    }

    return (
        <div>
            <button onClick={handleLogInChange}>Log{isLoggedIn ? "out" : "in"}</button>
            <div>User is logged {isLoggedIn ? "in" : "out"} </div>
        </div>
    )
}