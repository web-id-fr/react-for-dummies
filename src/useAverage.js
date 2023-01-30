import { useEffect, useState } from 'react'

const currentYear = new Date().getFullYear()

export default function useAverage({ baseUrl, userSelection }) {
    const [result, setResult] = useState(undefined)
    const [feedback, setFeedBack] = useState(undefined)

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

    return { result, feedback }
}
