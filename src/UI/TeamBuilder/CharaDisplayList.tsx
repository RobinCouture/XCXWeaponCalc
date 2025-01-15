import { useRef, useState } from "react";
import Character from "../../classes/Character";
import CharaDisplayRow from "./CharaDisplayRow";
import ScrollableList from "../../classes/ScrollableList";

interface CharaDisplayListProps {
  characters?: Map<string, Character>;
}

function CharaDisplayList({ characters }: CharaDisplayListProps) {
  const numberOfItems: number = characters?.size || 0;
  const CharaElementList = Array.from(characters?.values() || []).map(
    (chara, index) => {
      return <CharaDisplayRow key={index} character={chara} />;
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
