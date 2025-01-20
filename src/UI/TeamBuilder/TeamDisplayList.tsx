import Character from "../../classes/DataClass/Character";
import CharaDisplayRow from "./CharaDisplayRow";
import CrossDisplayRow from "./CrossDisplayRow";
import TeamDisplayRow from "./TeamDisplayRow";

interface TeamDisplayListProps {
    characters?: Character[];
    onCharaClicked?: (chara: Character) => void;
}

function TeamDisplayList({characters, onCharaClicked}: TeamDisplayListProps) {
    return(
        <>
        <ul>
            <CrossDisplayRow character={characters?.[0]} />
            <TeamDisplayRow character={characters?.[1]} onCharaClicked={onCharaClicked} />
            <TeamDisplayRow character={characters?.[2]} onCharaClicked={onCharaClicked}/>
            <TeamDisplayRow character={characters?.[3]} onCharaClicked={onCharaClicked}/>
        </ul>
        </>
    );
}

export default TeamDisplayList;