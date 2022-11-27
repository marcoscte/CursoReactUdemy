import React from 'react'
import ReactDOM from 'react-dom/client'
import { FirstApp } from './FirstApp'
import {HelloWorldApp} from './HelloWorldApp'

import './global.css' //importamos estilos globales, automaticamente se aplican a todo
import { CounterApp } from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value = {11}/> 
    {/* <FirstApp title="hola, soy Eliud!" subtitle = "1234"/>  */}
  </React.StrictMode>
)
