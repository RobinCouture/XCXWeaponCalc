import Character from "../../classes/Character";
import images from "../../assets/characters/characterImageImport.tsx";
import { useState } from "react";

interface CharaDisplayRowProps {
  character: Character | undefined;
  isTeamFull: Boolean;
  onCharaClicked?: (chara: Character, selected: boolean) => void;
}

function CharaDisplayRow({ character, isTeamFull, onCharaClicked }: CharaDisplayRowProps) {
  const [selected, setSelected] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);
  function handleClick() {
    setSelected(!selected);
    if (character && onCharaClicked) {
      onCharaClicked(character, !selected);      
    }

    if (isTeamFull) {
      setOpacity(1);
    } else {
      setOpacity(selected ? 1 : 0.5);
    }
  }
  return (
    <>
      <li>
        {character && (
          <img 
          src={images[character.name as keyof typeof images]}
          onClick={() => {handleClick()}} 
          style={{opacity: opacity}}
          />
        )}
      </li>
    </>
  );
}

export default CharaDisplayRow;
