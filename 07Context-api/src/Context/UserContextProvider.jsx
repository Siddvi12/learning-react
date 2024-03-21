import React from "react";

import UserContext from "./UserContext";

const UserContextProvider =({children}) => {
console.log(children);
    const [user, setUser] =React.useState(null) // react.usestate bhi likh sakte hai bina import karwaye
return(
    <UserContext.Provider value={{user,setUser}}>
    {children}
    </UserContext.Provider>
    
)


}





export default UserContextProvider;