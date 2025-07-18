import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { customer_choice, pizza_order } from './pizzaSlice';

const PizzaView = () => {
     const pizzaValue = useSelector((state)=>state.pizza.pizzaBase);
    // console.log(pizzaValue)
    const dispatch = useDispatch();
    const [number, setNumber] = useState(1)
  return (
    <div>
         <h3>Number of the pizza buns {pizzaValue}</h3>
        <button onClick={()=>dispatch(pizza_order())}>order now</button>
        <input type="text" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
        <button onClick={()=>dispatch(customer_choice(number))}>Customar choice</button>
    </div>
  )
}

export default PizzaView