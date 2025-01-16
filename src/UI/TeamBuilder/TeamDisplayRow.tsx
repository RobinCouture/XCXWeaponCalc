import Character from "../../classes/Character";
import images from "../../assets/characters/characterImageImport.tsx";
import { useState } from "react";

interface CharaDisplayRowProps {
  character: Character | undefined;
  onCharaClicked?: (chara: Character, selected: boolean) => void;
}

function CharaDisplayRow({ character, onCharaClicked }: CharaDisplayRowProps) {
  const [selected, setSelected] = useState<boolean>(false);
  function handleClick() {
    setSelected(!selected);
    if (character && onCharaClicked) {
      onCharaClicked(character, !selected);      
    }
  }
  return (
    <>
      <li>
        {character && (
          <img 
          src={images[character.name as keyof typeof images]}
          onClick={() => {handleClick()}} 
          style={{opacity: selected ? 0.5 : 1}}
          />
        )}
      </li>
    </>
  );
}

export default CharaDisplayRow;