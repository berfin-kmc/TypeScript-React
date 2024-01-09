import { useState, createContext } from "react";


export type AuthAccount = {
    name: string,
    email: string
}

type AccountContextProviderProps = {
    children: React.ReactNode
}

type AccountContextType = {
    account: null | AuthAccount,
    setAccount: React.Dispatch<React.SetStateAction<AuthAccount | null>>,
}

export const AccountContext = createContext({} as AccountContextType)

export function AccountContextProvider(props: AccountContextProviderProps) {
    const [account, setAccount] = useState<AuthAccount | null>(null)
    return <AccountContext.Provider value={{account, setAccount}}>{props.children}</AccountContext.Provider>
}