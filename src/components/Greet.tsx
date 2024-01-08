// type alias
type GreetProps = {
    name: string,
    messageNum?: number,
    isLoggedIn: boolean
}


export function Greet({name, messageNum = 0, isLoggedIn}: GreetProps) {


    return (
        isLoggedIn ? (<div>
            <h2>Hello world from {name}!!!</h2>


            <h5>You have {messageNum} unread message(s).</h5>
        </div>) : (<h2> Welcome Guest </h2>)
    )
}
