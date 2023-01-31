import React from 'react';
import birthdayCake from '../assets/birthday-cake.svg'
import useAverage from '../hooks/useAverage.js'

const Average = ({ baseUrl, userSelection }) => {
    const { result, feedback } = useAverage({ baseUrl, userSelection })

    return (
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
    );
};

export default Average;
