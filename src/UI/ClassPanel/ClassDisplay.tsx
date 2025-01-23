import React from 'react';
import Classes from "../../classes/DataClass/CrossClass.tsx";
import "../../style/ClassPanel/ClassPanel.css";

interface ClassNameDisplayProps {
    classe: Classes | undefined;
    onClassClicked? : (classe: Classes) => void;
}

function ClassDisplay({classe, onClassClicked} : ClassNameDisplayProps) {
    const handleClick = () => {
        if (onClassClicked && classe) {
            onClassClicked(classe);
        }
    };

    return (
        <img className="classLogo children" src={classe?.image} onClick={handleClick} />
    );
}

export default ClassDisplay;