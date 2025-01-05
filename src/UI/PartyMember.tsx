import Character from "../classes/Character";
import images from "../assets/characters/characterImageImport.tsx";
import { useState } from "react";

function PartyMember({ character } : { character: Character }) {
    const [selected, setSelected] = useState<boolean>(false);
  
    function handleClick() {
        setSelected(!selected);
        console.log(selected);
    console.log("Clicked " + character.name);
  }

  return (
    <>
      <img  onClick={handleClick} className="container" src={images[character.name as keyof typeof images]} alt={character.name} />
    </>
  );
}

export default PartyMember;
