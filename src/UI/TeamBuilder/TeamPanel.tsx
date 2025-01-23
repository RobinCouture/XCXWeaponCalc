import Character from "../../classes/DataClass/Character";
import CharaDisplayList from "./CharaDisplayList";
import TeamDisplayList from "./TeamDisplayList";

interface TeamPanelProps {
  team: Character[];
  characters?: Map<string, Character>;
  onCharaClicked?: (chara: Character) => void;
  onTeamClicked?: (chara: Character) => void;
  onCrossClicked?: () => void;
}

function TeamPanel({
  team,
  characters,
  onCharaClicked,
  onTeamClicked,
  onCrossClicked,
}: TeamPanelProps) {
  return (
    <>
      <TeamDisplayList
        characters={team}
        onCharaClicked={onTeamClicked}
        onCrossClicked={onCrossClicked}
      />
      <CharaDisplayList
        characters={characters}
        onCharaClicked={onCharaClicked}
        team={team}
      />
    </>
  );
}

export default TeamPanel;
