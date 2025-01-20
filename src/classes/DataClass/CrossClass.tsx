import Weapons from "./Weapons";

class CrossClass {
  name!: string;
  image!: string;
  meleeWeapon!: Weapons | null;
  rangeWeapon!: Weapons | null;
  parentClass!: CrossClass | null;
  childClasses!: CrossClass[];

  static crossClasses: Map<string, CrossClass> = new Map();

  constructor(
    name: string,
    image: string,
    meleeWeapon?: Weapons,
    rangeWeapon?: Weapons
  ) {
    this.name = name;
    this.image = image;
    this.meleeWeapon = meleeWeapon ?? null;
    this.rangeWeapon = rangeWeapon ?? null;
  }

  static generateClasses() {
    const weapons = Weapons.getWeapons();
  }
}

export default CrossClass;
