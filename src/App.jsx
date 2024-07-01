import { useState } from 'react'
import ShowCount from "./components/ShowCount/ShowCount";
import './App.css'
import Boton from './components/boton/Boton';

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='app'>
      <ShowCount count={counter}/>
      <div className='contenedorBotones'>
        <Boton count={counter} setCount={setCounter}  texto='Restar'></Boton>
        <Boton count={counter} setCount={setCounter} texto='Sumar'></Boton>
      
      </div>
    </div>
  )
}

export default App
