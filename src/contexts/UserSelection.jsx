import { createContext, useState } from 'react'

export const UserSelectionContext = createContext(undefined);

export const UserSelectionProvider = ({ children }) => {
    const [userSelection, setUserSelection] = useState([])

    return (
        <UserSelectionContext.Provider
            value={[userSelection, setUserSelection]}>
            {children}
        </UserSelectionContext.Provider>
    );
};
