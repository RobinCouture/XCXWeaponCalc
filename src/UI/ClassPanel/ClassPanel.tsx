import "../../style/ClassPanel/ClassPanel.css";
import Classes from "../../classes/DataClass/CrossClass.tsx";

interface classNamePanelProps {}

function classNamePanel() {
  const classes = Classes.getCrossClasses();

  const classDisplay = Array.from(classes?.values() || []).map((classItem, index) => {
    return (
      <img key={index} src={classItem.image}></img>
    );
  });

  return (
    <>
      <h1>Class Panel</h1>
      {classDisplay}
    </>
  );
}

export default classNamePanel;
