type PersonListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export function PersonList(props: PersonListProps) {

    const personListElemets = props.names.map((name, i) => {
        return <h2 key={i}>{name.first} {name.last}</h2>
    })

    return <div>
        {personListElemets}
    </div>
}