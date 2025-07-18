import React from 'react'
import PizzaView from './features/pizza/PizzaView'
import BurgerView from './features/burger/BurgerView'

const App = () => {
  return (
    <div>
      <h1>pizza & Burger App</h1>
      <PizzaView/>
      <BurgerView/>
    </div>
  )
}

export default App