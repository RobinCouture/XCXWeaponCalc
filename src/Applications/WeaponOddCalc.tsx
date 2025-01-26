import { useEffect, useState } from "react";
import Character from "../classes/DataClass/Character";
import Weapons from "../classes/DataClass/Weapons";
import "../style/WeaponOddCalc.css";
import TeamBodyDisplay from "../UI/WeaponOddsDisplay/TeamBodyDisplay";
import ComponentSwitcher from "../UI/Reusable/ComponentSwitcher";
import TeamBuilder from "./TeamBuilder";
import OddsCalc from "../classes/Math/OddsCalc";

interface WeaponOddCalcProps {
  team: Character[];
  characters?: Map<string, Character>;
  setTeam: (team: Character[]) => void;
}

function WeaponOddCalc({ team, characters, setTeam }: WeaponOddCalcProps) {
  const [weapons, setWeapons] = useState<Map<String, Weapons>>(
    Weapons.getWeapons()
  );
  const [activeComponent, setActiveComponent] =
    useState<string>("TeamBodyDisplay");

  useEffect(() => {
    setWeapons(OddsCalc.calculateOdds(weapons, team));
  }, [team]);

  function test() {
    let newTeam = [...team];
    setTeam(newTeam);
  }

  return (
    <>
      <p>weapon odd calc</p>
      <ComponentSwitcher active={activeComponent}>
        <TeamBodyDisplay
          key="TeamBodyDisplay"
          team={team}
          weapons={weapons}
          onClickValider={setActiveComponent}
        />
        <TeamBuilder
          key="TeamBuilder"
          team={team}
          characters={characters}
          setTeam={setTeam}
          onClickValider={setActiveComponent}
        />
      </ComponentSwitcher>
      <button onClick={test}>refresh</button>
    </>
  );
}

export default WeaponOddCalc;
