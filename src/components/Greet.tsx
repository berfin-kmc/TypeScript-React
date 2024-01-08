// type alias
type GreetProps = {
    name: string,
    messageNum?: number,
    isLoggedIn: boolean
}


export function Greet(props: GreetProps) {

    const {messageNum = 0} = props

    return (
        props.isLoggedIn ? (<div>
            <h2>Hello world from {props.name}!!!</h2>


            <h5>You have {messageNum} unread message(s).</h5>
        </div>) : (<h2> Welcome Guest </h2>)
    )
}
