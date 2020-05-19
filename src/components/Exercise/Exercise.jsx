import React, {useRef, useState} from "react";
import styles from './Exercise.module.css';


const Exercise = (props) => {

    const answerInputRef = useRef(null);
    const [answerStatus, setAnswerStatus] = useState('');
    const [isDisabled, setDisabled] = useState(false);
    const statuses = ['Correct', 'Incorrect'];

    const checkAnswer = () => {
        setDisabled(true);
        let result;
        if(props.exercise.action === '+') {
            result = props.exercise.leftOperand + props.exercise.rightOperand;
        } else if(props.exercise.action === '-') {
            result = props.exercise.leftOperand - props.exercise.rightOperand;
        } else if(props.exercise.action === '*') {
            result = props.exercise.leftOperand * props.exercise.rightOperand;
        } else  {
            result = props.exercise.leftOperand / props.exercise.rightOperand;
        }

        let answer = +answerInputRef.current.value;
        if (answer === result){
            setAnswerStatus(statuses[0]);
            props.onCorrect()
        }else {
            setAnswerStatus(statuses[1]);
            props.onError();
        }
    };
    
    return <div className={styles.wrapper}>

        <span>{`${props.exercise.leftOperand} ${props.exercise.action} ${props.exercise.rightOperand}`}</span>
        <span> = </span>
        <input type='number' ref={answerInputRef} disabled={isDisabled}/>
        <button onClick={checkAnswer} disabled={isDisabled}>Answer</button>
        <span className={answerStatus === statuses[0] ? styles.correct : styles.incorrect}>{answerStatus}</span>

    </div>
};

export default Exercise;