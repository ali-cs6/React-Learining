// this file is .js and not .jsx because we usually dont export any jsx
import React from 'react'


const UserContext = React.createContext(); //a method which initiate context creation

export default UserContext

// as we created context, we now have to create context provider, by wrapping it around all context components
//can be done in two ways, 