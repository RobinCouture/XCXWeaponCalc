import React from "react";
import Classes from "../../classes/DataClass/CrossClass.tsx";
import "../../style/ClassPanel/ClassPanel.css";

interface ClassNameDisplayProps {
  classe: Classes | undefined;
  onClassClicked?: (classe: Classes) => void;
}

function ClassDisplay({ classe, onClassClicked }: ClassNameDisplayProps) {
  const handleClick = () => {
    if (onClassClicked && classe) {
      onClassClicked(classe);
    }
  };

  return (
    <>
    <div className="class-container">
      <p>{classe?.name}</p>
      <div className="image-container">
        <img className="classLogo" src={classe?.image} onClick={handleClick} />
        <img className="border" src={classe?.border}/>
      </div>
    </div>
    </>
  );
}

export default ClassDisplay;
