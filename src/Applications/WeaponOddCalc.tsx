import Weapons from "../classes/Weapons";
import PartyMember from "../UI/PartyMember";
import PartyMemberList from "../UI/PartyMemberList";
import PartyMemberSelector from "../UI/PartyMemberSelector";
import { useState } from 'react';
import '../style/WeaponOddCalc.css';

function WeaponOddCalc() {
  const weaponList = Array.from(Weapons.getWeapons().values()).map((weapon) => {
    return (
      <p key={weapon.name} id={weapon.name}>
        {weapon.name} : {weapon.odd} %
      </p>
    );
  });

  return (
    <>
      <h1>Weapon Odd Calculator</h1>
      <p>Calculate the odds of your weapon dropping from the target.</p>
      <div className="container">
        <PartyMemberSelector />
        <PartyMemberList />
      </div>

      {weaponList}
    </>
  );

}

export default WeaponOddCalc;
