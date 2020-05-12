import React, {useRef, useState} from "react";
import styles from './Generator.module.css';
import Action from "../Action/Action";
import Exercise from "../Exercise/Exercise";

const Generator = () => {

    const minNumberRef = useRef(null);
    const maxNumberRef = useRef(null);
    const exercisesNumberRef = useRef(null);
    const [chosenActions, setChosenActions] = useState([]);
    const [exercises, setExercises] = useState([]);

    const addAction = (action) => {
        console.log('add Action');
        setChosenActions([...chosenActions, action]);
    };

    const deleteAction = (action) => {
        setChosenActions(chosenActions.filter(chosenAction => chosenAction !== action));
    };

    const addExercise = (exercise) => {
        console.log('add exercise');
        setExercises([...exercises, exercise]);
    };

    const generateExercises = () => {
        const minNumber = +minNumberRef.current.value;
        const maxNumber = +maxNumberRef.current.value;
        const exercisesNumber = +exercisesNumberRef.current.value;
        console.log(exercisesNumber);

        for (let i = 0; i < exercisesNumber; i++) {

            const action = chosenActions[Math.floor(Math.random() * chosenActions.length)];
            const leftOperand = Math.random() * (maxNumber - minNumber) + minNumber;
            const rightOperand = Math.random() * (maxNumber - minNumber) + minNumber;
            addExercise({
                action,
                leftOperand,
                rightOperand
            });
            console.log(`i = ${i}`)
        }
    };

    return <div>
        <div>
            <Action sign={'+'} onDelete={deleteAction} onAdd={addAction}/>
            <Action sign={'-'} onDelete={deleteAction} onAdd={addAction}/>
            <Action sign={'*'} onDelete={deleteAction} onAdd={addAction}/>
            <Action sign={'/'} onDelete={deleteAction} onAdd={addAction}/>
        </div>
        <div>
            <input type="number" ref={minNumberRef}/>
            <input type="number" ref={maxNumberRef}/>
        </div>
        <div>
            <input type="number" ref={exercisesNumberRef}/>
        </div>
        <div>
            <button onClick={generateExercises}>Generate</button>
        </div>
        <div>
            {!exercises.length ? 'No exercises yet' :
                exercises.map((exercise, index) => <Exercise key={index} exercise={exercise}/>)}
        </div>

    </div>
};

export default Generator;