import { useState } from "react";
import Character from "../../classes/DataClass/Character";
import CharacterBodyDisplay from "./CharacterBodyDisplay";
import Weapons from "../../classes/DataClass/Weapons";

interface TeamBodyDisplayProps {
  team: Character[];
  weapons: Map<String, Weapons>;
  onClickValider: (page : string) => void;
}

function TeamBodyDisplay({ team, weapons, onClickValider }: TeamBodyDisplayProps) {
  const weaponsOdds = Array.from(weapons.values()).map((weapon, index) => {
    return <p key={index}>{weapon.name} : {weapon.odd} %</p>
  });

  function handleClickValider() {
    onClickValider("TeamBuilder");
  }

  return (
    <>
    <div>
      <CharacterBodyDisplay character={team[3]} />
      <CharacterBodyDisplay character={team[0]} />
      <CharacterBodyDisplay character={team[1]} />
      <CharacterBodyDisplay character={team[2]} />
    </div>
    <div>
      {weaponsOdds}
    </div>
    <div>
      <button onClick={handleClickValider}>change team</button>
    </div>
    </>
  );
}

export default TeamBodyDisplay;
