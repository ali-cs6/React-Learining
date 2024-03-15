import react from "react";
import UserCotext from "./UserContext";

const UserContextProvider = ({childern}) => {
    const [user, setUser] = React.useState(null);
    return(
        <UserCotext.Provider value={{user, setUser}}>
            {childern}
        </UserCotext.Provider> 
    )
}

export default UserContextProvider