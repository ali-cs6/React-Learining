import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => { // same as Outlet, keep the children as it is with context accesability
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider