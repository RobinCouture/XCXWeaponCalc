import Character from "../classes/Character";
import images from "../assets/characters/characterImageImport.tsx";
import { useState } from "react";

function PartyMember({ character }: { character: Character }) {
  const [selected, setSelected] = useState<boolean>(false);
  const [assignedCharacter, setAssignedCharacter] = useState<Character>(character);

  function handleClick() {
    setSelected(!selected);
    console.log(selected);
    console.log("Clicked " + assignedCharacter.name);
  }

  return (
    <>
      <img
        onClick={handleClick}
        className="container"
        src={images[assignedCharacter.name as keyof typeof images]}
        alt={assignedCharacter.name}
        style={{
            opacity: selected ? 1 : 0.5,
            cursor: "pointer",
        }}
      />
    </>
  );
}

export default PartyMember;
