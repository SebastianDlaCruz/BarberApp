import { useState } from "react";
import { UserContext } from './userContext'

export const UserProvider = ({ children }) => {

    const [access, setAccess] = useState(false);

    return (
        <UserContext.Provider value={{ access, setAccess }}>
            {children}
        </UserContext.Provider>
    )

}