import Character from "../DataClass/Character";
import Weapons from "../DataClass/Weapons";

class OddsCalc {
    static calculateOdds(weapons : Map<String, Weapons>, team : Character[]) : Map<String, Weapons>{
        console.log("Calculating odds");
        let newWeapons = new Map<String, Weapons>(weapons);

        newWeapons.forEach((weapon) => {weapon.odd = 0});
        
        OddsCalc.calculateCrossOdds(newWeapons, team[0]);

        OddsCalc.calculateTeamOdds(newWeapons, team.slice(1));

        OddsCalc.calculateRandomOdds(newWeapons);

        let oddsSum = 0;
        newWeapons.forEach((weapon) => {oddsSum += weapon.odd});
        console.log(oddsSum);

        return newWeapons;
    }

    static calculateCrossOdds(weapons : Map<String, Weapons>, cross : Character) {
        console.log("Calculating cross odds");
        const rangeWeapon = weapons.get(cross.rangeWeapon?.name || "");
        if (rangeWeapon) {
            rangeWeapon.odd = 25;
        }

        const meleeWeapon = weapons.get(cross.meleeWeapon?.name || "");
        if (meleeWeapon) {
            meleeWeapon.odd = 25;
        }
    }

    static calculateTeamOdds(weapons : Map<String, Weapons>, team : Character[]) {
        console.log("Calculating team odds");
        
        let teamNPC = team.filter((character) => character.name !== "Blank");
        let teamSize = teamNPC.length;
        
        if (teamSize > 0) {
            console.log("Calculating team odds");
            console.log(teamNPC);
            teamNPC.forEach((character) => {
                if (character.meleeWeapon) {
                    character.meleeWeapon.odd += (30/teamSize)/2;
                }

                if (character.rangeWeapon) {
                    character.rangeWeapon.odd += (30/teamSize)/2;
                }
            });
        } else {
            weapons.forEach((weapon) => {weapon.odd += (30/weapons.size)/2});
        }
    }

    static calculateRandomOdds(weapons : Map<String, Weapons>) {
        console.log("Calculating random odds");
        weapons.forEach((weapon) => {weapon.odd += (20/weapons.size)});
    }

}

export default OddsCalc;

//50% of the weighting is determined by the class of the controlled character
//30% of the weighting is determined by the team members (spread among them -> 10% each | 15% each | 30%)
//20% of the weighting is determined at random across all weapons