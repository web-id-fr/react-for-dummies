import React from 'react';
import birthdayCake from '../assets/birthday-cake.svg'
import useAverage from '../hooks/useAverage.js'

const Average = () => {
    const { result, feedback } = useAverage()

    return (
        <div className="average">
            <img src={birthdayCake} width={200} alt="" />
            <p>Âge moyen des personnes sélectionnées</p>
            {result && (
                <p className="result" data-test-id="average-result">{result} ans</p>
            )}
            {feedback && (
                <p className="feedback" data-test-id="average-feedback">{feedback}</p>
            )}
        </div>
    );
};

export default Average;
