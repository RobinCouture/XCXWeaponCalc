import Character from "../../classes/DataClass/Character.tsx";
import images from "../../assets/characters/characterImageImport.tsx";
import { useEffect, useState } from "react";

interface TeamDisplayRowProps {
  character: Character | undefined;
  onCharaClicked?: (chara: Character) => void;
}

function TeamDisplayRow({ character, onCharaClicked } : TeamDisplayRowProps) {
  const [isBlank, setIsBlank] = useState<boolean>(character?.name === "Blank");

  useEffect(() => {
    setIsBlank(character?.name === "Blank");
  }), [character];

  function handleClick() {
    if (character && onCharaClicked) {
           onCharaClicked(character);
    }
  }

  return (
    <>
      <li>
        {character && (
          <img 
          src={images[character.name as keyof typeof images]}
          onClick={() => {handleClick()}} 
          />
        )}
      </li>
    </>
  );
}

export default TeamDisplayRow;