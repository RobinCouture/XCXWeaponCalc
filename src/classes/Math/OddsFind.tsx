import Weapons from "../DataClass/Weapons";

class OddsFind {
    static findSetup(rangeWeapon : Weapons, meleeWeapon : Weapons) {
        console.log("Finding setup");
        console.log(rangeWeapon);
        console.log(meleeWeapon);
    }

    static findCrossSetup(rangeWeapon : Weapons, meleeWeapon : Weapons) {
        console.log("Finding cross setup");
        console.log(rangeWeapon);
        console.log(meleeWeapon);
    }

    static findTeamSetup(rangeWeapon : Weapons, meleeWeapon : Weapons) {
        console.log("Finding team setup");
        console.log(rangeWeapon);
        console.log(meleeWeapon);
    }
}

export default OddsFind;