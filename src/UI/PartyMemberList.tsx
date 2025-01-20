import Character from "../classes/DataClass/Character";
import PartyMember from "./PartyMember";

function PartyMemberList() {
  const partyMemberList = Array.from(Character.getCharacters().values()).map(
    (characterFromList) => {
      return (
        <PartyMember
          key={characterFromList.name}
          character={characterFromList}
        />
      );
    }
  );

  function handleClick() {
    console.log("Clicked");
  }

  return (
    <>
      <div>{partyMemberList}</div>
    </>
  );
}

export default PartyMemberList;
