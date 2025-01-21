import Classes from "../../classes/DataClass/CrossClass.tsx";
import "../../style/ClassPanel/ClassPanel.css";

interface ClassNameDisplayProps {
    classe: Classes | undefined;
}

function ClassDisplay({classe} : ClassNameDisplayProps) {
    return (
        <img className="classLogo" src={classe?.image} />
    );
}

export default ClassDisplay;