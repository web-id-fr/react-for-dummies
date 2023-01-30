import { useState } from 'react'

export default function useUserSelection() {
    const [userSelection, setUserSelection] = useState([])

    const toggleItem = (array, item) => {
        return array.includes(item)
            ? array.filter((user) => user !== item)
            : array.concat(item);
    }
    const toggleUser = (userId) => {
        setUserSelection(toggleItem(userSelection, userId))
    }

    return { userSelection, toggleUser }
}
