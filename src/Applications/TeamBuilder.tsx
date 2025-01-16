import Character from "../classes/Character";
import CharaDisplayList from "../UI/TeamBuilder/CharaDisplayList";
import TeamDisplayList from "../UI/TeamBuilder/TeamDisplayList";
import "../style/TeamBuilder/TeamBuilder.css";
import { useEffect, useState } from "react";

interface TeamBuilderProps {
    characters?: Map<string, Character>;
}

function TeamBuilder({characters}: TeamBuilderProps) {
    const [emptySlot, setEmptySlot] = useState<number>(1);
    const [team, setTeam] = useState<Character[]>([
        new Character("Cross"),
        Character.getBlankCharacter(),
        Character.getBlankCharacter(),
        Character.getBlankCharacter()
    ]);
    const [isTeamFull, setIsTeamFull] = useState<boolean>(emptySlot === 4);

    useEffect(() => {
        setIsTeamFull(emptySlot === 4);
        console.log("Team is full:", isTeamFull);
    }), [emptySlot];

    function handleCharaClicked(chara: Character, selected: Boolean) {
        console.log(chara?.name, selected);
        if (selected) {
            if (emptySlot < 4) {
                let newTeam = [...team];
                newTeam[emptySlot] = chara;
                setTeam(newTeam);
                setEmptySlot(emptySlot + 1);
            }
        } else {
            if (team.includes(chara)) {
            let newTeam = team.filter((c) => c !== chara);
            newTeam.push(Character.getBlankCharacter());
            setTeam(newTeam);
            setEmptySlot(emptySlot - 1);
            }
        }
    }

    return (
        <>
        <div>
            <TeamDisplayList characters={team}/>
            <CharaDisplayList characters={characters} onCharaClicked={handleCharaClicked} isTeamFull={isTeamFull}/>
        </div>
        </>
    );
}

export default TeamBuilder;