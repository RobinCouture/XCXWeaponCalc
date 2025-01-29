import Weapons from "../DataClass/Weapons";
import CrossClass from "../DataClass/CrossClass";

class OddsFind {
  classes = CrossClass.getCrossClasses();
  static classes: Map<string, CrossClass> = CrossClass.getCrossClasses();

  static findSetup(rangeWeapon: Weapons, meleeWeapon: Weapons) {
    this.findCrossSetup(rangeWeapon, meleeWeapon);
    this.findTeamSetup(rangeWeapon, meleeWeapon);
  }

  static findCrossSetup(
    rangeWeapon: Weapons,
    meleeWeapon: Weapons
  ): Array<CrossClass> {
    const useThisClass: Array<CrossClass> = [];
    let doubleMatch: Array<CrossClass> = [];
    let simpleMatch: Array<CrossClass> = [];

    for (const classe of this.classes.values()) {
      if (
        classe.rangeWeapon === rangeWeapon &&
        classe.meleeWeapon === meleeWeapon
      ) {
        doubleMatch.push(classe);
      }

      if (
        classe.rangeWeapon === rangeWeapon ||
        classe.meleeWeapon === meleeWeapon
      ) {
        simpleMatch.push(classe);
      }
    }

    console.log("Double match", doubleMatch);
    if (doubleMatch.length > 0) {
        for (const classe of doubleMatch) {
            console.log("parent ", classe.name, "\nenfants :");
            for (const child of classe.childClasses) {
                console.log(child.name);
            }
        }
    }

    return useThisClass;
  }

  static findTeamSetup(rangeWeapon: Weapons, meleeWeapon: Weapons) {
    console.log("Finding team setup");
    console.log(rangeWeapon);
    console.log(meleeWeapon);
  }
}

export default OddsFind;
