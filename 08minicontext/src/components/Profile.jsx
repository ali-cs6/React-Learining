import React, {useContext} from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const [user] = useContext(UserContext) //this has taken from context folder (UserContextProvider). this is the data

    if(!user) return <div>Please LogIn</div>

    return <div>Welcome {user.username}</div>
}

export default Profile