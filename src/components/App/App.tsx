import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, subtractCount } from '../../core/store/actions/asyncCounterActions'; 
import { ICounterState } from '../../core/types';
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: ICounterState) => state.counter.count);

  const add = (num: number) => dispatch(addCount(num))
  const subtract = (num: number) => dispatch(subtractCount(num))

  return (
    <main>
      <div>{count}</div>
      <div>
        <button onClick={() => add(5)}>+</button>
        <button onClick={() => subtract(5)}>-</button>
      </div>
    </main>
  )
}

export default App
