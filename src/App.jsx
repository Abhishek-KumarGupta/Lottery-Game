import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Lottery from "./Lottery";
import Ticket from "./Ticket";

function App() {

  return (
    <>
     <Lottery n={3} winningSum={15}/>
     
    </>
  )
}

export default App
