import images from "../assets/characters/characterImageImport.tsx";

function PartyMemberSelector() {
  function handleClick() {
    console.log("Clicked");
  }

  return (
    <>
    <div>
      <p onClick={handleClick}>holder</p>
      <p onClick={handleClick}>holder</p>
      <p onClick={handleClick}>holder</p>
    </div>
    </>
  );
}

export default PartyMemberSelector;
