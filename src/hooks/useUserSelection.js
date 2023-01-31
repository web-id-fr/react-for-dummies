import { useCallback, useContext } from 'react'
import { UserSelectionContext } from '../contexts/UserSelection.jsx'

export default function useUserSelection() {
    const [userSelection, setUserSelection] = useContext(UserSelectionContext)

    const toggleItem = (array, item) => {
        return array.includes(item)
            ? array.filter((user) => user !== item)
            : array.concat(item);
    }

    const toggleUser = useCallback((userId) => {
        setUserSelection((userSelection) => toggleItem(userSelection, userId))
    }, [])

    return { userSelection, toggleUser }
}
