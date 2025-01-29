import { useEffect, useState } from "react";
import Weapons from "../classes/DataClass/Weapons";
import WeaponSelector from "../UI/WeaponOddsFinder/WeaponSelector";

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

    useEffect(() => {});

    return (
        <>
            <p>WeaponOddFinder</p>
            <WeaponSelector weapons={rangeWeapons} onWeaponSelection={setSelectedRange}/>
            <WeaponSelector weapons={meleeWeapons} onWeaponSelection={setSelectedMelee}/>
                <p>selected range : {selectedRange.name}</p>
                <p>selected melee : {selectedMelee.name}</p>
        </>
    )
}

export default WeaponOddFinder;


