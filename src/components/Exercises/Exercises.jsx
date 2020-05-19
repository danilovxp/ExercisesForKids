import React, {useState} from "react";
import styles from './Exercises.module.css';
import Exercise from "../Exercise/Exercise";

const Exercises = (props) => {

    const [numberOfCorrect, setNumberOfCorrect] = useState(0);
    const [numberOfIncorrect, setNumberOfIncorrect] = useState(0);

    const increaseCorrectAnswers = () => {
        setNumberOfCorrect(numberOfCorrect + 1);
    };

    const increaseIncorrectAnswers = () => {
        setNumberOfIncorrect(numberOfIncorrect + 1);
    };

    return (
        <div>
            <div>
                {!props.exercises.length ? 'No exercises yet' :
                    props.exercises.map((exercise, index) => <Exercise key={index} exercise={exercise}
                                                                       onError={increaseIncorrectAnswers}
                                                                       onCorrect={increaseCorrectAnswers}/>)}
            </div>
            {props.exercises.length > 0 && <p className={styles.correct}>{`Correct:  ${numberOfCorrect}`}</p>}
            {props.exercises.length > 0 && <p className={styles.incorrect}>{`Incorrect: ${numberOfIncorrect}`}</p>}
            {props.exercises.length > 0 && props.exercises.length === numberOfIncorrect + numberOfCorrect &&
            <div><p className={numberOfCorrect > numberOfIncorrect ? styles.win : styles.lose}>{numberOfCorrect > numberOfIncorrect ? 'You win' : 'You lose'}</p>
                <button onClick={props.onReset}>Reset</button></div>}
        </div>
    )
};

export default Exercises;