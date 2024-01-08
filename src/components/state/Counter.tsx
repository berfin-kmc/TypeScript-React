import { useReducer } from "react"

/* enum ActionTypeEnum {
    INCREMENT = "increment",
    DECREMENT = "decrement",
    RESET = "reset"
}
 */


type CounterState = {
    count: number
}

// Discriminated Unions

type ResetAction = {
    type: "reset"
}

type UpdateAction = {
    type: "increment" | "decrement"
    payload: number
}

type CounterAction = UpdateAction | ResetAction

// Discriminated Unions


const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}


export function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment", payload: 10 })}> PLUS 10</button>
            <button onClick={() => dispatch({ type: "decrement", payload: 10 })}> MINUS 10</button>
            <button onClick={() => dispatch({ type: "reset"  })}> RESET</button>
        </>
    )
}