import Character from "../classes/Character";
import PartyMember from "./PartyMember";

function PartyMemberList({addMember = () => {}}) {
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
    addMember();
  }

  return (
    <>
      <div onClick={handleClick}>{partyMemberList}</div>
    </>
  );
}

export default PartyMemberList;
