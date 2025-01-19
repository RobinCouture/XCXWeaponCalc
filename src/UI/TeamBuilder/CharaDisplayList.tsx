import { useRef, useState } from "react";
import Character from "../../classes/Character";
import CharaDisplayRow from "./CharaDisplayRow";
import ScrollableList from "../../classes/ScrollableList";

interface CharaDisplayListProps {
  characters?: Map<string, Character>;
  team : Character[];
  onCharaClicked?: (chara: Character) => void;
}

function CharaDisplayList({ characters, team, onCharaClicked }: CharaDisplayListProps) {
  const CharaElementList = Array.from(characters?.values() || []).map(
    (chara, index) => {
      return <CharaDisplayRow key={index} character={chara} onCharaClicked={onCharaClicked} team={team}/>;
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
