import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { burger_order } from './burgerSlice';

const BurgerView = () => {
    const burgerBaseValue = useSelector((state)=>state.burger.burgerBase);
    // console.log(burgerBaseValue)
    const dispatch = useDispatch()
  return (
    <div>
        <h3>Number of the Burger buns {burgerBaseValue}</h3>
        <button onClick={()=>dispatch(burger_order())}>order now</button>
    </div>
  )
}

export default BurgerView