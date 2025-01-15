import { useRef, useState } from "react";
import Character from "../../classes/Character";


interface CharaDisplayListProps {
    characters: Map<string, Character>;
}


function CharaDisplayList({characters} : CharaDisplayListProps) {
    
    
    return (
        <>  
            <p>CharaDisplayList</p>
        </>
    );
}

export default CharaDisplayList;