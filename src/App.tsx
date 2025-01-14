import { useState } from 'react'
import PartyMemberSelector from "./UI/PartyMemberSelector"
import WeaponOddCalc from './Applications/WeaponOddCalc'
import WaitingScreen from './UI/WaitingScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <WaitingScreen />
      </>
  )
}

export default App
