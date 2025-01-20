import Character from "../../classes/DataClass/Character.tsx";
import images from "../../assets/characters/characterImageImport.tsx";

interface CrossDisplayRowProps {
  character: Character | undefined;
}

function CrossDisplayRow({ character }: CrossDisplayRowProps) {
  return (
    <>
      <li>
        {character && (
          <p>{character.name} {character.meleeWeapon?.name} {character.rangeWeapon?.name} </p>
        )}
      </li>
    </>
  );
}

export default CrossDisplayRow;