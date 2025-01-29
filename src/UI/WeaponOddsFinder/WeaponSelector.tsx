import Weapons from "../../classes/DataClass/Weapons";

interface WeaponSelectorProps {
    weapons: Map<String, Weapons>;
    onWeaponSelection: (weapon: Weapons) => void;
}

function WeaponSelector({weapons, onWeaponSelection}: WeaponSelectorProps) {
    const type : String = Array.from(weapons.values())[0].type;
    const options = Array.from(weapons.values()).map((weapon) => {
        return (
            <option key={weapon.name} value={weapon.name}>{weapon.name}</option>
        )
    });
    return (
    <>
        <label htmlFor="selector">Select {type} weapon</label>
        <select name="selector" id="selector" onChange={(e) => onWeaponSelection(weapons.get(e.target.value) || new Weapons())}>
            {options}
        </select>
    </>
    )
}

export default WeaponSelector;