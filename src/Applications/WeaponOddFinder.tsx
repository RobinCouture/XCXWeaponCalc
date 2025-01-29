import { useEffect, useState } from "react";
import Weapons from "../classes/DataClass/Weapons";
import WeaponSelector from "../UI/WeaponOddsFinder/WeaponSelector";
import OddsFind from "../classes/Math/OddsFind";

interface WeaponOddFinderProps {}

function WeaponOddFinder() {
  const rangeWeapons = Weapons.getRangeWeapons();
  const meleeWeapons = Weapons.getMeleeWeapons();
  const [selectedRange, setSelectedRange] = useState<Weapons>(
    rangeWeapons.get("Assault Rifle") || new Weapons()
  );
  const [selectedMelee, setSelectedMelee] = useState<Weapons>(
    meleeWeapons.get("Knife") || new Weapons()
  );

  useEffect(() => {
    OddsFind.findCrossSetup(selectedRange, selectedMelee);
  }), [selectedRange, selectedMelee];

  return (
    <>
      <p>WeaponOddFinder</p>
      <WeaponSelector
        weapons={rangeWeapons}
        onWeaponSelection={setSelectedRange}
      />
      <WeaponSelector
        weapons={meleeWeapons}
        onWeaponSelection={setSelectedMelee}
      />
      <p>selected range : {selectedRange.name}</p>
      <p>selected melee : {selectedMelee.name}</p>
      <p>Cross class to use : </p>
      <p>Team member to bring (choose 3 among the list) : </p>
    </>
  );
}

export default WeaponOddFinder;
