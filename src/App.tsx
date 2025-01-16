import { useState } from 'react'
import PartyMemberSelector from "./UI/PartyMemberSelector"
import './App.css'
import WeaponOddCalc from './Applications/WeaponOddCalc'
import CharaDisplayRow from './UI/TeamBuilder/CharaDisplayRow'
import images from "./assets/characters/characterImageImport.tsx";
import Character from './classes/Character'
import CharaDisplayList from './UI/TeamBuilder/CharaDisplayList.tsx'
import TeamDisplayList from './UI/TeamBuilder/TeamDisplayList.tsx'
import TeamBuilder from './Applications/TeamBuilder.tsx'

function App() {
  const [count, setCount] = useState(0)
  const chara : Map<string, Character> = Character.getCharacters();

  return (
    <>
      <TeamBuilder characters={chara}/>
    </>
  )
}

export default App
