import React from "react";
import styles from './Exercise.module.css';


const Exercise = (props) => {

    return <div>

        <span>{`${props.exercise.leftOperand} ${props.exercise.action} ${props.exercise.rightOperand}`}</span>
        <span> = </span>
        <input type='number'/>
        <button>Answer</button>

    </div>
};

export default Exercise;