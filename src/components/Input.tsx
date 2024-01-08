type InputProps = {
    handleChange : (e : React.ChangeEvent<HTMLInputElement> , id: number) => void
}

export function Input(props : InputProps) {
    return <input type="text" onChange={(e) => props.handleChange(e,1)} />
}