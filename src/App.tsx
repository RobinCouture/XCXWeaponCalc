import { useState } from 'react'
import PartyMemberSelector from "./UI/PartyMemberSelector"
import './App.css'
import WeaponOddCalc from './Applications/WeaponOddCalc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeaponOddCalc />
    </>
  )
}

export default App
