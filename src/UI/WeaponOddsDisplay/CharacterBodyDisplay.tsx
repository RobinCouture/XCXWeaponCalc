import { useState } from "react";
import Character from "../../classes/DataClass/Character";
import Weapons from "../../classes/DataClass/Weapons";
import "../../style/WeaponOddsDisplay/CharacterBodyDisplay.css";

interface CharacterBodyDisplayProps {
    character: Character;
}

function CharacterBodyDisplay({ character }: CharacterBodyDisplayProps) {
    

    return (
        <>
            <img className="image-body" src={character.body} alt={character.name} />
        </>
    )
}

export default CharacterBodyDisplay;