import "../../style/ClassPanel/ClassPanel.css";
import Classes from "../../classes/DataClass/CrossClass.tsx";
import ClassDisplay from "./ClassDisplay.tsx";

interface classNamePanelProps {
  onClassClicked? : (classe: Classes) => void;
}

function classNamePanel({onClassClicked} : classNamePanelProps) {
  const classes = Classes.getCrossClasses();

  return (
    <>
      <h1>Class Panel</h1>
      <div className="wrapper">
        <div className="rank0">
            <ClassDisplay classe={classes.get("Drifter")} onClassClicked={onClassClicked} />
        </div>
        <div className="rank1">
            <ClassDisplay classe={classes.get("Striker")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Commando")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Enforcer")} onClassClicked={onClassClicked} />
        </div>
        <div className="rank2">
            <ClassDisplay classe={classes.get("Samurai Gunner")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Shield Trooper")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Winged Viper")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Partisan Eagle")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Psycorruptor")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Blast Fencer")} onClassClicked={onClassClicked} />
        
        </div>
        <div className="rank3">
            <ClassDisplay classe={classes.get("Duelist")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Bastion Warrior")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Full Metal Jaguar")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Astral Crusader")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Mastermind")} onClassClicked={onClassClicked} />
            <ClassDisplay classe={classes.get("Galactic Knight")} onClassClicked={onClassClicked} />
        </div>
      </div>
    </>
  );
}

export default classNamePanel;

{
  /* <div className="wrapper">
        <ul className="parent">
          <li>
            <ClassDisplay classe={classes.get("Drifter")} />
            <ul className="children first-child">
              <li>
                <ClassDisplay classe={classes.get("Striker")} />
                <ul className="children first-child top-child">
                  <li>
                  <ClassDisplay classe={classes.get("Samurai Gunner")} />
                    <ul className="children second-child top-child last-child">
                      <li>
                      <ClassDisplay classe={classes.get("Duelist")} />
                      </li>
                    </ul>
                  </li>
                  <li>
                  <ClassDisplay classe={classes.get("Shield Trooper")} />
                    <ul className="children second-child bottom-child last-child">
                      <li>
                      <ClassDisplay classe={classes.get("Bastion Warrior")} />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <ClassDisplay classe={classes.get("Commando")} />
                <ul className="children first-child middle-child">
                  <li>
                  <ClassDisplay classe={classes.get("Winged Viper")} />
                    <ul className="children second-child top-child last-child">
                      <li>
                      <ClassDisplay classe={classes.get("Full Metal Jaguar")} />
                      </li>
                    </ul>
                  </li>
                  <li>
                  <ClassDisplay classe={classes.get("Partisan Eagle")} />
                    <ul className="children second-child bottom-child last-child">
                      <li>
                      <ClassDisplay classe={classes.get("Astral Crusader")} />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
              <ClassDisplay classe={classes.get("Enforcer")} />
                <ul className="children first-child bottom-child">
                  <li>
                  <ClassDisplay classe={classes.get("Psycorruptor")} />
                    <ul className="children second-child top-child last-child">
                      <li>
                      <ClassDisplay classe={classes.get("Mastermind")} />
                      </li>
                    </ul>
                  </li>
                  <li>
                  <ClassDisplay classe={classes.get("Blast Fencer")} />
                    <ul className="children second-child bottom-child last-child">
                      <li>
                      <ClassDisplay classe={classes.get("Galactic Knight")} />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div> */
}
