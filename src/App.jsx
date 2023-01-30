import birthdayCake from './assets/birthday-cake.svg'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
    const [userList, setUserList] = useState([])

    useEffect(() => {
        fetch('https://infallible-tereshkova-717266.netlify.app/.netlify/functions/server/users').then((res) => {
            res.json().then((data) => {
                setUserList(data)
            })
        })
    }, [])

    return (
        <>
            <h1 className="title">Average age calculator</h1>
            <div className="user-list">
                <ul>
                    {userList.map((user) => (
                        <li key={user.id}><label><input type="checkbox" />{user.name}</label></li>
                    ))}
                </ul>
            </div>
            <div className="average">
                <img src={birthdayCake} width={200} alt="" />
                <p>Âge moyen des personnes sélectionnées</p>
                <p className="result">56 ans</p>
            </div>
        </>
    )
}

export default App
