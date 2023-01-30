import birthdayCake from './assets/birthday-cake.svg'
import './App.css'
import { useEffect, useState } from 'react'

const baseUrl = 'https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server'
const currentYear = new Date().getFullYear()

function App() {
    const [userList, setUserList] = useState([])
    const [userSelection, setUserSelection] = useState([])
    const [result, setResult] = useState(undefined)
    const [feedback, setFeedBack] = useState(undefined)

    useEffect(() => {
        fetch(`${baseUrl}/users`).then((res) => {
            res.json().then((data) => {
                setUserList(data)
            })
        })
    }, [])

    const toggleItem = (array, item) => {
        return array.includes(item)
            ? array.filter((user) => user !== item)
            : array.concat(item);
    }
    const handleInput = (event) => {
        setUserSelection(toggleItem(userSelection, Number(event.target.value)))
    }

    useEffect(() => {
        if (userSelection.length === 0) {
            setResult(undefined)
            setFeedBack('Merci de sélectionner une personne')
            return
        }
        fetch(`${baseUrl}/average?ids=[${userSelection.join(',')}]`).then((res) => {
            res.json().then((data) => {
                if (!res.ok && data?.error) {
                    setResult(undefined)
                    setFeedBack(data.error)
                    return
                }
                setResult(Math.round(currentYear - data.average))
                setFeedBack(undefined)
            })
        })
    }, [userSelection])

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
