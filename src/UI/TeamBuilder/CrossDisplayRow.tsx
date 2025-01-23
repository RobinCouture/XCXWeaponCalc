import Character from "../../classes/DataClass/Character.tsx";
import images from "../../assets/characters/characterImageImport.tsx";

interface CrossDisplayRowProps {
  character: Character | undefined;
  onCrossClicked?: () => void;
}

function CrossDisplayRow({ character, onCrossClicked }: CrossDisplayRowProps) {
  function handleClick() {
    if (onCrossClicked) {
      onCrossClicked();
    }
  }

  return (
    <>
      <li>
        {character && (
          <p onClick={handleClick}>{character.name} {character.meleeWeapon?.name} {character.rangeWeapon?.name} </p>
        )}
      </li>
    </>
  );
}

export default CrossDisplayRow;