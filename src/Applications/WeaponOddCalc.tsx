import { useState } from "react";
import Character from "../classes/DataClass/Character";
import Weapons from "../classes/DataClass/Weapons";
import "../style/WeaponOddCalc.css";
import TeamBodyDisplay from "../UI/WeaponOddsDisplay/TeamBodyDisplay";
import ComponentSwitcher from "../UI/Reusable/ComponentSwitcher";
import TeamBuilder from "./TeamBuilder";

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
  const weaponsOdds = Array.from(weapons.values()).map((weapon, index) => {
    return (
      <p key={index}>
        {weapon.name} : {weapon.odd} %
      </p>
    );
  });

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
    </>
  );
}

//50% of the weighting is determined by the class of the controlled character
//30% of the weighting is determined by the team members (spread among them -> 10% each | 15% each | 30%)
//20% of the weighting is determined at random across all weapons
function processWeaponOdds(team: Character[]) {
  return;
}

export default WeaponOddCalc;
