import { useRef, useState } from "react";
import Character from "../../classes/Character";
import CharaDisplayRow from "./CharaDisplayRow";
import ScrollableList from "../../classes/ScrollableList";

interface CharaDisplayListProps {
  characters?: Map<string, Character>;
  isTeamFull: Boolean;
  onCharaClicked?: (chara: Character, selected: Boolean) => void;
}

function CharaDisplayList({ characters, isTeamFull, onCharaClicked }: CharaDisplayListProps) {
  const CharaElementList = Array.from(characters?.values() || []).map(
    (chara, index) => {
      return <CharaDisplayRow key={index} character={chara} onCharaClicked={onCharaClicked} isTeamFull={isTeamFull}/>;
    }
  );

  return (
    <>
    <ScrollableList height="500px">
        {CharaElementList}
    </ScrollableList>
    </>
  );
}

export default CharaDisplayList;
