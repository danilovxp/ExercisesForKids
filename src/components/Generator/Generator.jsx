import React, { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import Action from '../Action/Action'
import Exercises from '../Exercises/Exercises'

const Generator = () => {
  const minNumberRef = useRef(null)
  const maxNumberRef = useRef(null)
  const exercisesNumberRef = useRef(null)
  const [chosenActions, setChosenActions] = useState([])
  const [exercises, setExercises] = useState([])
  const [isInputsFilled, setInputsFilled] = useState(false)
  const [isSignsDisplayed, setSignsDisplayed] = useState(true)

  const signs = ['+', '-', '*', '/']

  const resetExercises = () => {
    setSignsDisplayed(true)
  }

  const addAction = (action) => {
    setChosenActions([...chosenActions, action])
  }

  const deleteAction = (action) => {
    setChosenActions(chosenActions.filter((chosenAction) => chosenAction !== action))
  }

  const addExercises = (exercises) => {
    setExercises(exercises)
  }

  const generateExercises = () => {
    const minNumber = +minNumberRef.current.value
    const maxNumber = +maxNumberRef.current.value
    const exercisesNumber = +exercisesNumberRef.current.value
    const exercises = []
    for (let i = 0; i < exercisesNumber; i++) {
      const action = chosenActions[Math.floor(Math.random() * chosenActions.length)]
      let leftOperand = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
      let rightOperand = Math.round(Math.random() * (maxNumber - minNumber) + minNumber)
      if (leftOperand < rightOperand) {
        ;[leftOperand, rightOperand] = [rightOperand, leftOperand]
      }
      exercises.push({ action, leftOperand, rightOperand })
    }
    addExercises(exercises)
    minNumberRef.current.value = ''
    maxNumberRef.current.value = ''
    exercisesNumberRef.current.value = ''
    setChosenActions([])
    setSignsDisplayed(false)
  }

  const checkInputs = () => {
    setInputsFilled(
      exercisesNumberRef.current.value.length > 0 &&
        minNumberRef.current.value.length > 0 &&
        maxNumberRef.current.value.length > 0,
    )
  }

  return (
    <Container>
      {isSignsDisplayed ? (
        <div>
          <div className="action-wrapper">
            {signs.map((sign, index) => (
              <Action key={index} sign={sign} onDelete={deleteAction} onAdd={addAction} />
            ))}
          </div>
          <div className="input-form">
            <span>Choose a number from</span> <input type="number" ref={minNumberRef} onChange={checkInputs} />
            <span>to</span>
            <input type="number" ref={maxNumberRef} onChange={checkInputs} />
          </div>
          <div className="exercises-number-field">
            <span>Choose a number of exercises:</span> 
            <input type="number" ref={exercisesNumberRef} onChange={checkInputs} />
          </div>
          <div className="btn-generate">
            <button
              onClick={generateExercises}
              disabled={chosenActions.length === 0 || !isInputsFilled}
            >
              Generate
            </button>
          </div>
        </div>
      ) : (
        <div className="exercises-wrapper">
          <Exercises exercises={exercises} onReset={resetExercises} />
        </div>
      )}
    </Container>
  )
}

export default Generator
