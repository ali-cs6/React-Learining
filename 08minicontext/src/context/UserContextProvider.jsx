import React from "react";
import UserContext from "./UserContext";

//here we will export a method to export what we mean to
const UserContextProvider = ({childern}) => { //childern here is what it recive will be passed onward
    const [user, setUser] = React.useState(null); //this is the data passed onward. 
    return(
        <UserContext.Provider value={{user, setUser}}>
            {childern}
        </UserContext.Provider> 
    )
}

export default UserContextProvider