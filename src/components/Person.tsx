/* interface Person {
    first : string,
    last :string
}

type PersonProps = {
   person : Person
}
 */

type PersonProps = {
    person : {
        first : string,
        last :string
    }
 }
 
export function Person (props: PersonProps) {
    return <div>{props.person.first}</div>
}