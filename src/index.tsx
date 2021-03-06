import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './core/store/store'

import App from './components/App'

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.querySelector('#root')
)
