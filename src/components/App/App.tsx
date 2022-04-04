import React, { FC } from 'react'
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../core/hooks/useTypedSelector';
import { changeCount } from '../../core/store/actions/counter';
import './App.css'

const App: FC = () => {
  const { count } = useTypedSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <main className='plane'>
      <div className='plane__wrap'>
        <div className='plane__count'>{count}</div>
        <div className='plane__buttons-list'>
          <button onClick={() => dispatch(changeCount(-3))} className='plane__button plane__button--normal'>- 3</button>
          <button onClick={() => dispatch(changeCount(-1))} className='plane__button plane__button--normal'>- 1</button>
          <button onClick={() => dispatch(changeCount(1))} className='plane__button plane__button--normal'>+ 1</button>
          <button onClick={() => dispatch(changeCount(3))} className='plane__button plane__button--normal'>+ 3</button>
        </div>
      </div>
    </main>
  )
}

export default App