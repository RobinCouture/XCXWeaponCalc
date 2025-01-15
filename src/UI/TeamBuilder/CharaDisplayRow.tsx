import Character from "../../classes/Character";
import images from "../../assets/characters/characterImageImport.tsx";

interface CharaDisplayRowProps {
  character: Character | undefined;
}

function CharaDisplayRow({ character }: CharaDisplayRowProps) {
  return (
    <>
      <li>
        {character && (
          <img src={images[character.name as keyof typeof images]} />
        )}
      </li>
    </>
  );
}

export default CharaDisplayRow;
