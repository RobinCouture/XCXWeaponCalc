import Character from "../../classes/Character";
import CharaDisplayRow from "./CharaDisplayRow";
import CrossDisplayRow from "./CrossDisplayRow";
import TeamDisplayRow from "./TeamDisplayRow";

interface TeamDisplayListProps {
    characters?: Character[];
}

function TeamDisplayList({characters}: TeamDisplayListProps) {
    return(
        <>
        <ul>
            <CrossDisplayRow character={characters?.[0]} />
            <TeamDisplayRow character={characters?.[1]} />
            <TeamDisplayRow character={characters?.[2]} />
            <TeamDisplayRow character={characters?.[3]} />
        </ul>
        </>
    );
}

export default TeamDisplayList;