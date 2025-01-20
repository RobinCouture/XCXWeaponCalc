import { useState } from "react";
import images from "../assets/characters/characterImageImport.tsx";
import Character from "../classes/DataClass/Character.tsx";
import PartyMember from "./PartyMember.tsx";

function PartyMemberSelector() {
  const [slot, setSlot] = useState<number>(0);
  const blankCharacter = Character.getBlankCharacter();

  const team = [
    <PartyMember character={blankCharacter} />,
    <PartyMember character={blankCharacter} />,
    <PartyMember character={blankCharacter} />,
  ]

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    console.log("Clicked");
  }

  return (
    <>
      <div onClick={handleClick}>
        {team}
      </div>
    </>
  );
}

export default PartyMemberSelector;
