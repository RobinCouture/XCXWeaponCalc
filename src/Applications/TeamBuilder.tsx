import Character from "../classes/Character";
import CharaDisplayList from "../UI/TeamBuilder/CharaDisplayList";
import TeamDisplayList from "../UI/TeamBuilder/TeamDisplayList";
import "../style/TeamBuilder/TeamBuilder.css";
import { useEffect, useState } from "react";

interface TeamBuilderProps {
  characters?: Map<string, Character>;
}

function TeamBuilder({ characters }: TeamBuilderProps) {
  const [emptySlot, setEmptySlot] = useState<number>(1);
  const [team, setTeam] = useState<Character[]>([
    new Character("Cross"),
    Character.getBlankCharacter(),
    Character.getBlankCharacter(),
    Character.getBlankCharacter(),
  ]);
  const [isTeamFull, setIsTeamFull] = useState<boolean>(emptySlot === 4);

  useEffect(() => {
    setIsTeamFull(emptySlot === 4);
  }),
    [emptySlot];

  function handleCharaClicked(chara: Character) {
    console.log(chara?.name, team.includes(chara));
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
    setIsTeamFull(false);
  }

  return (
    <>
      <div>
        <TeamDisplayList
          characters={team}
          onCharaClicked={handleTeamMemberClicked}
        />
        <CharaDisplayList
          characters={characters}
          onCharaClicked={handleCharaClicked}
          team={team}
        />
      </div>
    </>
  );
}

export default TeamBuilder;
