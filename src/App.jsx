import birthdayCake from './assets/birthday-cake.svg'
import './App.css'
import { useEffect, useState } from 'react'
import useAverage from './useAverage.js'
import useUserSelection from './useUserSelection.js'

const baseUrl = 'https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server'

function App() {
    const [userList, setUserList] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}/users`).then((res) => {
            res.json().then((data) => {
                setUserList(data)
            })
        })
    }, [])

    const { userSelection, toggleUser } = useUserSelection()
    const handleInput = (event) => {
        toggleUser(Number(event.target.value))
    }

    const { result, feedback } = useAverage({ baseUrl, userSelection })

    return (
        <>
            <h1 className="title">Average age calculator</h1>
            <div className="user-list">
                <ul>
                    {userList.map((user) => (
                        <li key={user.id}>
                            <label>
                                <input type="checkbox"
                                       value={user.id}
                                       checked={userSelection.includes(user.id)}
                                       onChange={handleInput} />
                                {user.name}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="average">
                <img src={birthdayCake} width={200} alt="" />
                <p>Âge moyen des personnes sélectionnées</p>
                {result && (
                    <p className="result">{result} ans</p>
                )}
                {feedback && (
                    <p className="feedback">{feedback}</p>
                )}
            </div>
        </>
    )
}

export default App
