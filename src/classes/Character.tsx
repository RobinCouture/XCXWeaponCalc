import Weapons from './Weapons';

class Character {
    name!: string;
    rangeWeapon!: Weapons | null;
    meleeWeapon!: Weapons | null;
    image!: string;

    static characters: Map<string, Character> = new Map();

    constructor(name: string, rangeWeapon?: Weapons, meleeWeapon?: Weapons, image?: string) {
        this.name = name;
        this.rangeWeapon = rangeWeapon ?? null;
        this.meleeWeapon = meleeWeapon ?? null;
        this.image = image ?? "";
    }

    static generateCharacters() {
        const weapons = Weapons.getWeapons();

        Character.characters.set("Elma", new Character("Elma", weapons.get("Dual Guns"), weapons.get("Dual Swords")));
        Character.characters.set("Lin", new Character("Lin", weapons.get("Gatling Gun"), weapons.get("Shield")));
        Character.characters.set("Gwin", new Character("Gwin", weapons.get("Assault Rifle"), weapons.get("Longsword")));
        Character.characters.set("Irina", new Character("Irina", weapons.get("Assault Rifle"), weapons.get("Knife")));
        Character.characters.set("Doug", new Character("Doug", weapons.get("Raygun"), weapons.get("Photon Saber")));
        Character.characters.set("Nagi", new Character("Nagi", weapons.get("Gatling Gun"), weapons.get("Longsword")));
        Character.characters.set("L", new Character("L", weapons.get("Psycho Launchers"), weapons.get("Shield")));
        Character.characters.set("Lao", new Character("Lao", weapons.get("Sniper Rifle"), weapons.get("Javelin")));
        Character.characters.set("Celica", new Character("Celica", weapons.get("Dual Guns"), weapons.get("Knife")));
        Character.characters.set("Alexa", new Character("Alexa", weapons.get("Assault Rifle"), weapons.get("Javelin")));
        Character.characters.set("Boze", new Character("Boze", weapons.get("Sniper Rifle"), weapons.get("Javelin")));
        Character.characters.set("Frye", new Character("Frye", weapons.get("Gatling Gun"), weapons.get("Longsword")));
        Character.characters.set("HB", new Character("HB", weapons.get("Assault Rifle"), weapons.get("Shield")));
        Character.characters.set("Hope", new Character("Hope", weapons.get("Psycho Launchers"), weapons.get("Knife")));
        Character.characters.set("Mia", new Character("Mia", weapons.get("Raygun"), weapons.get("Knife")));
        Character.characters.set("Murderess", new Character("Murderess", weapons.get("Psycho Launchers"), weapons.get("Dual Swords")));
        Character.characters.set("Phog", new Character("Phog", weapons.get("Dual Guns"), weapons.get("Dual Swords")));
        Character.characters.set("Yelv", new Character("Yelv", weapons.get("Raygun"), weapons.get("Photon Saber")));
    }

    static getCharacters(): Map<string, Character> {
        if (Character.characters.size > 0) {
            return Character.characters;
        } else {
            Character.generateCharacters();
            return Character.characters;
        }
    }
}

export default Character;