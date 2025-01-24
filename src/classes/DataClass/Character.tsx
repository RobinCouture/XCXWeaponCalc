import Weapons from './Weapons';
import images from '../../assets/characters/characterImageImport';
import bodies from '../../assets/bodies/bodyImageImport';

class Character {
    name!: string;
    rangeWeapon!: Weapons | null;
    meleeWeapon!: Weapons | null;
    image!: string;
    body!: string;

    static cross: Character;
    static characters: Map<string, Character> = new Map();

    constructor(name: string, rangeWeapon?: Weapons, meleeWeapon?: Weapons, image?: string, body?: string) {
        this.name = name;
        this.rangeWeapon = rangeWeapon ?? null;
        this.meleeWeapon = meleeWeapon ?? null;
        this.image = image ?? "";
        this.body = body ?? "";
    }

    static generateCharacters() {
        const weapons = Weapons.getWeapons();

        Character.characters.set("Elma", new Character("Elma", weapons.get("Dual Guns"), weapons.get("Dual Swords"), images["Elma"], bodies["Elma"]));
        Character.characters.set("Lin", new Character("Lin", weapons.get("Gatling Gun"), weapons.get("Shield"), images["Lin"], bodies["Lin"]));
        Character.characters.set("Gwin", new Character("Gwin", weapons.get("Assault Rifle"), weapons.get("Longsword"), images["Gwin"], bodies["Gwin"]));
        Character.characters.set("Irina", new Character("Irina", weapons.get("Assault Rifle"), weapons.get("Knife"), images["Irina"], bodies["Irina"]));
        Character.characters.set("Doug", new Character("Doug", weapons.get("Raygun"), weapons.get("Photon Saber"), images["Doug"], bodies["Doug"]));
        Character.characters.set("Nagi", new Character("Nagi", weapons.get("Gatling Gun"), weapons.get("Longsword"), images["Nagi"], bodies["Nagi"]));
        Character.characters.set("L", new Character("L", weapons.get("Psycho Launchers"), weapons.get("Shield"), images["L"], bodies["L"]));
        Character.characters.set("Lao", new Character("Lao", weapons.get("Sniper Rifle"), weapons.get("Javelin"), images["Lao"], bodies["Lao"]));
        Character.characters.set("Celica", new Character("Celica", weapons.get("Dual Guns"), weapons.get("Knife"), images["Celica"], bodies["Celica"]));
        Character.characters.set("Alexa", new Character("Alexa", weapons.get("Assault Rifle"), weapons.get("Javelin"), images["Alexa"], bodies["Alexa"]));
        Character.characters.set("Boze", new Character("Boze", weapons.get("Sniper Rifle"), weapons.get("Javelin"), images["Boze"], bodies["Boze"]));
        Character.characters.set("Frye", new Character("Frye", weapons.get("Gatling Gun"), weapons.get("Longsword"), images["Frye"], bodies["Frye"]));
        Character.characters.set("HB", new Character("HB", weapons.get("Assault Rifle"), weapons.get("Shield"), images["HB"], bodies["HB"]));
        Character.characters.set("Hope", new Character("Hope", weapons.get("Psycho Launchers"), weapons.get("Knife"), images["Hope"], bodies["Hope"]));
        Character.characters.set("Mia", new Character("Mia", weapons.get("Raygun"), weapons.get("Knife"), images["Mia"], bodies["Mia"]));
        Character.characters.set("Murderess", new Character("Murderess", weapons.get("Psycho Launchers"), weapons.get("Dual Swords"), images["Murderess"], bodies["Murderess"]));
        Character.characters.set("Phog", new Character("Phog", weapons.get("Dual Guns"), weapons.get("Dual Swords"), images["Phog"], bodies["Phog"]));
        Character.characters.set("Yelv", new Character("Yelv", weapons.get("Raygun"), weapons.get("Photon Saber"), images["Yelv"], bodies["Yelv"]));
    }

    static getCharacters(): Map<string, Character> {
        if (Character.characters.size > 0) {
            return Character.characters;
        } else {
            Character.generateCharacters();
            return Character.characters;
        }
    }

    static getCharacterByName(characterName: string): Character {
        if (Character.characters.size > 0) {
            return Character.characters.get(characterName) ?? Character.getBlankCharacter();
        } else {
            Character.generateCharacters();
            return Character.characters.get(characterName) ?? Character.getBlankCharacter();
        }
    }
    
    static getBlankCharacter(): Character {        
        return new Character("Blank", Weapons.getWeapons().get("Assault Rifle"), Weapons.getWeapons().get("Knife"), images["Blank"], bodies["Blank"]);
    }

    static getCrossCharacter(): Character {
        if (this.cross) {
            return this.cross;
        } else {
            this.cross = new Character("Cross", Weapons.getWeapons().get("Assault Rifle"), Weapons.getWeapons().get("Knife"), images["Cross"], bodies["Cross"]);
            return this.cross;
        }
    }
}

export default Character;