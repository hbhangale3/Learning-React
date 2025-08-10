import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter.jsx'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
function App() {
  
  return (
    <div>

      <DoubleDice/>

      {/* passing an array */}
        {/* <ListPicker values={[1,2,3]}/> */}

        {/* passing an object */}
        {/* <ListPicker values={{a:1,b:2,c:3}}/> */}

        {/* <Greeter from="Shivangi" num={15}/>
        <Greeter person="Harsh" from="Shivangi"/>
        <Greeter person="Harsh"  num={15}/> */}
    </div>
  )
}

export default App
