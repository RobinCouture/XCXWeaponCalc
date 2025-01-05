import Weapons from "../classes/Weapons";
import PartyMember from "../UI/PartyMember";
import PartyMemberList from "../UI/PartyMemberList";
import PartyMemberSelector from "../UI/PartyMemberSelector";
import { useState } from 'react';
import '../style/WeaponOddCalc.css';

function WeaponOddCalc() {
  const [slot, setSlot] = useState<number>(0);

  const weaponList = Array.from(Weapons.getWeapons().values()).map((weapon) => {
    return (
      <p key={weapon.name} id={weapon.name}>
        {weapon.name} : {weapon.odd} %
      </p>
    );
  });

  function addPartyMember() {
    setSlot(slot + 1);
    console.log("Slot: " + slot);
  }

  function removePartyMember() {
    setSlot(slot - 1);
  }

  return (
    <>
      <h1>Weapon Odd Calculator</h1>
      <p>Calculate the odds of your weapon dropping from the target.</p>
      <div className="container">
        <PartyMemberSelector />
        <PartyMemberList addMember={addPartyMember}/>
      </div>

      {weaponList}
    </>
  );

}

export default WeaponOddCalc;
