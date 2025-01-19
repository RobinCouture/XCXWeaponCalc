import Character from "../../classes/Character";
import images from "../../assets/characters/characterImageImport.tsx";
import { useEffect, useState } from "react";

interface CharaDisplayRowProps {
  character: Character | undefined;
  team : Character[];
  onCharaClicked?: (chara: Character) => void;
}

function CharaDisplayRow({ character, team, onCharaClicked }: CharaDisplayRowProps) {
  const [opacity, setOpacity] = useState<number>(1);

  function handleClick() {
    if (character && onCharaClicked) {
      onCharaClicked(character);      
    }
  }

  useEffect(() => {
    if (team.includes(character as Character)) {
      setOpacity(0.5);
    } else {
      setOpacity(1);
    }
  }, [team]);
  
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
