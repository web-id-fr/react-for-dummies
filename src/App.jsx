import './App.css'
import { useEffect, useState } from 'react'
import useUserSelection from './hooks/useUserSelection.js'
import UserList from './components/UserList.jsx'
import Average from './components/Average.jsx'

function App() {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/users`).then((res) => {
            res.json().then((data) => {
                setUserList(data)
            })
        })
    }, [])

    const { userSelection, toggleUser } = useUserSelection()

    return (
        <>
            <h1 className="title">Average age calculator</h1>
            <UserList userList={userList} userSelection={userSelection} toggleUser={toggleUser} />
            <Average userSelection={userSelection} />
        </>
    )
}

export default App
