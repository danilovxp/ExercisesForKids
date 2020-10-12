import React from 'react'
import { Container } from 'react-bootstrap'
import './App.scss'
import Generator from './components/Generator/Generator'

const App = () => {
  return (
    <Container className="main-wrapper">
      <Generator />
    </Container>
  )
}

export default App
