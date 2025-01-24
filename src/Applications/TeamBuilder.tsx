import Character from "../classes/DataClass/Character";
import Classes from "../classes/DataClass/CrossClass";
import "../style/TeamBuilder/TeamBuilder.css";
import { useEffect, useState } from "react";
import ClassPanel from "../UI/ClassPanel/ClassPanel";
import TeamPanel from "../UI/TeamBuilder/TeamPanel";
import ComponentSwitcher from "../UI/Reusable/ComponentSwitcher";
import Weapons from "../classes/DataClass/Weapons";

interface TeamBuilderProps {
  characters?: Map<string, Character>;
  team: Character[];
  setTeam: (team: Character[]) => void;
  onClickValider: (page: string) => void;
}

function TeamBuilder({ characters, team, setTeam, onClickValider }: TeamBuilderProps) {
  const [emptySlot, setEmptySlot] = useState<number>(team.filter((c) => c.name !== "Blank").length);
  const [activeComponent, setActiveComponent] = useState<string>("TeamPanel");

  function handleCharaClicked(chara: Character) {
    console.log(chara?.name, team.includes(chara));
    console.log(team);
    if (!team.includes(chara)) {
      addCharaToTeam(chara);
    } else {
      removeCharaFromTeam(chara);
    }
  }

  function handleTeamMemberClicked(chara: Character) {
    if (chara.name !== "Blank") {
      removeCharaFromTeam(chara);
    }
  }

  function handleCrossClicked() {
    setActiveComponent("ClassPanel");
  }
  
  function handleClassClicked(classe : Classes) {
    team[0].meleeWeapon = classe.meleeWeapon;
    team[0].rangeWeapon = classe.rangeWeapon;
    setActiveComponent("TeamPanel");
  }

  function handleClickValider() {
    onClickValider("TeamBodyDisplay");
  }

  function addCharaToTeam(chara: Character) {
    if (emptySlot < 4) {
      let newTeam = [...team];
      newTeam[emptySlot] = chara;
      setTeam(newTeam);
      setEmptySlot(emptySlot + 1);
    }
  }

  function removeCharaFromTeam(chara: Character) {
    let newTeam = team.filter((c) => c !== chara);
    newTeam.push(Character.getBlankCharacter());
    setTeam(newTeam);
    setEmptySlot(emptySlot - 1);
  }

  return (
    <>
      <div>
        <ComponentSwitcher active={activeComponent}>
          <TeamPanel
            key="TeamPanel"
            team={team}
            characters={characters}
            onTeamClicked={handleTeamMemberClicked}
            onCharaClicked={handleCharaClicked}
            onCrossClicked={handleCrossClicked}
          />
          <ClassPanel key="ClassPanel" onClassClicked={handleClassClicked}/>
        </ComponentSwitcher>
        <button onClick={handleClickValider}>valider</button>
      </div>
    </>
  );
}

export default TeamBuilder;
