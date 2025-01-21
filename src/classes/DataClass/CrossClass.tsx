import Weapons from "./Weapons";
import classImages from "../../assets/classes/classImageImport.tsx";

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

  static getDrifter(): CrossClass {
    if (CrossClass.crossClasses.size > 0) {
      return CrossClass.getCrossClasses().get("Drifter") as CrossClass;
    } else {
      CrossClass.generateClasses();
      return CrossClass.getCrossClasses().get("Drifter") as CrossClass;
    }
  }

  static getCrossClasses(): Map<string, CrossClass> {
    if (CrossClass.crossClasses.size > 0) {
      return CrossClass.crossClasses;
    } else {
      CrossClass.generateClasses();
      return CrossClass.crossClasses;
    }
  }

  static generateClasses() {
    const weapons = Weapons.getWeapons();

    const Drifter = new CrossClass("Drifter", classImages["Drifter"], weapons.get("Knife"), weapons.get("Assault Rifle"));

    const Striker = new CrossClass("Striker", classImages["Striker"], weapons.get("Longsword"), weapons.get("Assault Rifle"));

    const SamuraiGunner = new CrossClass("Samurai Gunner", classImages["Samurai Gunner"], weapons.get("Longsword"), weapons.get("Assault Rifle"));
    const Duelist = new CrossClass("Duelist", classImages["Duelist"], weapons.get("Longsword"), weapons.get("Assault Rifle"));

    const ShieldTrooper = new CrossClass("Shield Trooper", classImages["Shield Trooper"], weapons.get("Shield"), weapons.get("Gatling gun"));
    const BastionWarrior = new CrossClass("Bastion Warrior", classImages["Bastion Warrior"], weapons.get("Shield"), weapons.get("Gatling gun"));

    const Commando = new CrossClass("Commando", classImages["Commando"], weapons.get("Dual Blades"), weapons.get("Dual Guns"));

    const WingedViper = new CrossClass("Winged Viper", classImages["Winged Viper"], weapons.get("Dual Blades"), weapons.get("Dual Guns"));
    const FullMetalJaguar = new CrossClass("Full Metal Jaguar", classImages["Full Metal Jaguar"], weapons.get("Dual Blades"), weapons.get("Dual Guns"));

    const PartisanEagle = new CrossClass("Partisan Eagle", classImages["Partisan Eagle"], weapons.get("Javelin"), weapons.get("Sniper Rifle"));
    const AstralCrusader = new CrossClass("Astral Crusader", classImages["Astral Crusader"], weapons.get("Javelin"), weapons.get("Sniper Rifle"));

    const Enforcer = new CrossClass("Enforcer", classImages["Enforcer"], weapons.get("Knife"), weapons.get("Raygun"));

    const Psycorruptor = new CrossClass("Psycorruptor", classImages["Psycorruptor"], weapons.get("Knife"), weapons.get("Raygun"));
    const Mastermind = new CrossClass("Mastermind", classImages["Mastermind"], weapons.get("Knife"), weapons.get("Raygun"));

    const BlastFencer = new CrossClass("Blast Fencer", classImages["Blast Fencer"], weapons.get("Photon Saber"), weapons.get("Psycho Launchers"));
    const GalacticKnight = new CrossClass("Galactic Knight", classImages["Galactic Knight"], weapons.get("Photon Saber"), weapons.get("Psycho Launchers"));

    Drifter.parentClass = null;
    Drifter.childClasses = [Striker, Commando, Enforcer];

    Striker.parentClass = Drifter;
    Striker.childClasses = [SamuraiGunner, ShieldTrooper];

    Commando.parentClass = Drifter;
    Commando.childClasses = [WingedViper, PartisanEagle];

    Enforcer.parentClass = Drifter;
    Enforcer.childClasses = [Psycorruptor, BlastFencer];

    SamuraiGunner.parentClass = Striker;
    SamuraiGunner.childClasses = [Duelist];

    ShieldTrooper.parentClass = Striker;
    ShieldTrooper.childClasses = [BastionWarrior];

    WingedViper.parentClass = Commando;
    WingedViper.childClasses = [FullMetalJaguar];

    PartisanEagle.parentClass = Commando;
    PartisanEagle.childClasses = [AstralCrusader];

    Psycorruptor.parentClass = Enforcer;
    Psycorruptor.childClasses = [Mastermind];

    BlastFencer.parentClass = Enforcer;
    BlastFencer.childClasses = [GalacticKnight];

    Duelist.parentClass = SamuraiGunner;
    Duelist.childClasses = [];

    BastionWarrior.parentClass = ShieldTrooper;
    BastionWarrior.childClasses = [];

    FullMetalJaguar.parentClass = WingedViper;
    FullMetalJaguar.childClasses = [];

    AstralCrusader.parentClass = PartisanEagle;
    AstralCrusader.childClasses = [];

    Mastermind.parentClass = Psycorruptor;
    Mastermind.childClasses = [];

    GalacticKnight.parentClass = BlastFencer;
    GalacticKnight.childClasses = [];

    this.crossClasses.set("Drifter", Drifter);
    this.crossClasses.set("Striker", Striker);
    this.crossClasses.set("Samurai Gunner", SamuraiGunner);
    this.crossClasses.set("Duelist", Duelist);
    this.crossClasses.set("Shield Trooper", ShieldTrooper);
    this.crossClasses.set("Bastion Warrior", BastionWarrior);
    this.crossClasses.set("Commando", Commando);
    this.crossClasses.set("Winged Viper", WingedViper);
    this.crossClasses.set("Full Metal Jaguar", FullMetalJaguar);
    this.crossClasses.set("Partisan Eagle", PartisanEagle);
    this.crossClasses.set("Astral Crusader", AstralCrusader);
    this.crossClasses.set("Enforcer", Enforcer);
    this.crossClasses.set("Psycorruptor", Psycorruptor);
    this.crossClasses.set("Mastermind", Mastermind);
    this.crossClasses.set("Blast Fencer", BlastFencer);
    this.crossClasses.set("Galactic Knight", GalacticKnight);
  }
}

export default CrossClass;
