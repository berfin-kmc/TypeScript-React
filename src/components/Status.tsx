export enum StatusEnum {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}

type StatusProps = {
    status: StatusEnum
}

export function Status(props: StatusProps) {

    let message = ""

    switch (props.status) {
        case StatusEnum.LOADING:
            message = "Loading...";
            break;
        case StatusEnum.SUCCESS:
            message = "Operation successful!";
            break;
        case StatusEnum.ERROR:
            message = "An error occurred.";
            break;
        default:
            // Handle other cases if needed
            break;
    }

    return <div>
        {message}
    </div>
}