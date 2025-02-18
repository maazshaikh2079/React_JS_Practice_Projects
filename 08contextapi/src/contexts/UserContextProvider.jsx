import React, { useState } from 'react';
import UserContext from './UserContext.js';  // const UserContext = React.createContext();

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null);  // typeof null: object
    // OR  const [user, setUser] = useState({});  // typeof {}: object

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
