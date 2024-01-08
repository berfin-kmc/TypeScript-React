import { PersonProps } from "./Person.types"
 
export function Person (props: PersonProps) {
    return <div>{props.person.first}</div>
}