class Weapons {
    private _name!: string;
    private _type!: string;    
    private _odd!: number;    

    static weapons = new Map<String, Weapons>();
    static meleeWeapons = new Map<String, Weapons>();
    static rangeWeapons = new Map<String, Weapons>();

    constructor(weaponName?: string, weaponType?: string) {
        this.name = weaponName ?? "";
        this.type = weaponType ?? "";
        this.odd = 0;
    }

    static generateWeapons() {
        Weapons.weapons.set("Knife", new Weapons("Knife", "Melee"));
        Weapons.weapons.set("Longsword", new Weapons("Longsword", "Melee"));
        Weapons.weapons.set("Shield", new Weapons("Shield", "Melee"));
        Weapons.weapons.set("Dual Swords", new Weapons("Dual Swords", "Melee"));
        Weapons.weapons.set("Javelin", new Weapons("Javelin", "Melee"));
        Weapons.weapons.set("Photon Saber", new Weapons("Photon Saber", "Melee"));
        
        Weapons.weapons.set("Assault Rifle", new Weapons("Assault Riffle", "Range"));
        Weapons.weapons.set("Gatling Gun", new Weapons("Gatling Gun", "Range"));
        Weapons.weapons.set("Dual Guns", new Weapons("Dual Guns", "Range"));
        Weapons.weapons.set("Sniper Rifle", new Weapons("Sniper Rifle", "Range"));
        Weapons.weapons.set("Raygun", new Weapons("Raygun", "Range"));
        Weapons.weapons.set("Psycho Launchers", new Weapons("Psycho Launchers", "Range"));

        Weapons.weapons.forEach((value, key) => {
            if (value.type === "Melee") {
                Weapons.meleeWeapons.set(key, value);
            } else {
                Weapons.rangeWeapons.set(key, value);
            }
        });
    }

    static getWeapons(): Map<String, Weapons> {
        if (Weapons.weapons.size > 0) {
            return Weapons.weapons;
        } else {
            Weapons.generateWeapons();
            return Weapons.weapons;
        }
    }

    static getMeleeWeapons(): Map<String, Weapons> {
        if (Weapons.meleeWeapons.size > 0) {
            return Weapons.meleeWeapons;
        } else {
            Weapons.generateWeapons();
            return Weapons.meleeWeapons;
        }
    }

    static getRangeWeapons(): Map<String, Weapons> {
        if (Weapons.rangeWeapons.size > 0) {
            return Weapons.rangeWeapons;
        } else {
            Weapons.generateWeapons();
            return Weapons.rangeWeapons;
        }
    }

    static getWeaponByName(weaponName: string): Weapons | null {
        if (Weapons.weapons.has(weaponName)) {
            return Weapons.weapons.get(weaponName) ?? null;
        } else {
            if (Weapons.weapons.size === 0) {
                Weapons.generateWeapons();
                this.getWeaponByName(weaponName);
            }
            return null;
        }
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    public get odd(): number {
        return this._odd;
    }
    public set odd(value: number) {
        this._odd = value;
    }
}

export default Weapons;