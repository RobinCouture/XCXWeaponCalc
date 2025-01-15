import { useState } from 'react'
import PartyMemberSelector from "./UI/PartyMemberSelector"
import './App.css'
import WeaponOddCalc from './Applications/WeaponOddCalc'
import CharaDisplayRow from './UI/TeamBuilder/CharaDisplayRow'
import images from "./assets/characters/characterImageImport.tsx";
import Character from './classes/Character'
import CharaDisplayList from './UI/TeamBuilder/CharaDisplayList.tsx'

function App() {
  const [count, setCount] = useState(0)
  const chara : Map<string, Character> = Character.getCharacters();

  return (
    <>
      <h1>Test</h1>
      <CharaDisplayList characters={chara} />
    </>
  )
}

export default App
