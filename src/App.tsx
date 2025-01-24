import { useState } from "react";
import "./App.css";
import WeaponOddCalc from "./Applications/WeaponOddCalc";
import CharaDisplayRow from "./UI/TeamBuilder/CharaDisplayRow";
import images from "./assets/characters/characterImageImport.tsx";
import Character from "./classes/DataClass/Character.tsx";
import CharaDisplayList from "./UI/TeamBuilder/CharaDisplayList.tsx";
import TeamDisplayList from "./UI/TeamBuilder/TeamDisplayList.tsx";
import TeamBuilder from "./Applications/TeamBuilder.tsx";
import ClassPanel from "./UI/ClassPanel/ClassPanel.tsx";
import Weapons from "./classes/DataClass/Weapons.tsx";

function App() {
  const chara: Map<string, Character> = Character.getCharacters();
  const [team, setTeam] = useState<Character[]>([
    Character.getCrossCharacter(),
    Character.getBlankCharacter(),
    Character.getBlankCharacter(),
    Character.getBlankCharacter(),
  ]);

  return (
    <>
      <WeaponOddCalc team={team} characters={chara} setTeam={setTeam} />
      {/* <TeamBuilder characters={chara} team={team} setTeam={setTeam}/> */}
      {/* <ClassPanel /> */}
    </>
  );
}

export default App;
