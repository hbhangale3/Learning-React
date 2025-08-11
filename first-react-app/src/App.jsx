import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeter from './Greeter.jsx'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import ColorList from './ColorList'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import ClickEmoji from './ClickEmoji'

import Clicker from './Clicker'

function App() {
  const data= [
    { id:1, item: "eggs", quantity: 12, completed: false },
    { id:2, item: "milk", quantity: 1, completed: true },
    { id:3, item: "carrots", quantity: 6, completed: true },
];

const property=[
  {id: 129031, name: "Desert Yurt", rating:4.9, price:150},
  {id: 129331, name: "Lone Mountain Cabin", rating:4.8, price:250},
  {id: 129032, name: "Cactus Retreat", rating:4.75, price:300},
  {id: 129034, name: "Redwood Treehouse Escape", rating:4.9, price:120},
  {id: 129035, name: "Goldminer Campground", rating:4.69, price:96},
]

  return (
    <div>

      <ClickEmoji />
      {/* <Clicker/>
      <PropertyList properties={property}/> */}
      
      {/* <ShoppingList items={data}/> */}
      {/* <DoubleDice/>
      <ColorList colors={["red","yellow","green"]}/> */}
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
