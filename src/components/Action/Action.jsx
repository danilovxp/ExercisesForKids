import React, { useRef, useState } from 'react'
import { Button } from 'react-bootstrap'

const Action = (props) => {
  const [isChosen, setIsChosen] = useState(false)
  const actionRef = useRef(null)

  const toggleChosen = () => {
    setIsChosen(!isChosen)

    !isChosen ? props.onAdd(props.sign) : props.onDelete(props.sign)
  }

  return (
    <div>
      <Button
        size="lg"
        variant={`${isChosen ? 'warning' : 'outline-warning'}`}
        onClick={toggleChosen}
        ref={actionRef}
      >
        {props.sign}
      </Button>
    </div>
  )
}

export default Action
