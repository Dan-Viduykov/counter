import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICounterState } from '../../core/types';
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: ICounterState) => state.counter.count);

  const addCount = (num: number) => {
    dispatch({
      type: "INCREMENTED_COUNT",
      payload: num
    })
  }

  const subtractCount = (num: number) => {
    dispatch({
      type: "DECREMENTED_COUNT",
      payload: num
    })
  }

  return (
    <main>
      <div>{count}</div>
      <div>
        <button onClick={() => addCount(5)}>+</button>
        <button onClick={() => subtractCount(5)}>-</button>
      </div>
    </main>
  )
}

export default App
