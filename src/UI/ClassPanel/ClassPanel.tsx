import "../../style/ClassPanel/ClassPanel.css";
import Classes from "../../classes/DataClass/CrossClass.tsx";
import ClassDisplay from "./ClassDisplay.tsx";

interface classNamePanelProps {}

function classNamePanel() {
  const classes = Classes.getCrossClasses();

  return (
    <>
      <h1>Class Panel</h1>
      <div className="wrapper">
        <div className="rank0">
          <ClassDisplay classe={classes.get("Drifter")} />
        </div>
        <div className="rank1">
          <ClassDisplay classe={classes.get("Striker")} />
          <ClassDisplay classe={classes.get("Commando")} />
          <ClassDisplay classe={classes.get("Enforcer")} />
        </div>
        <div className="rank2">
          <ClassDisplay classe={classes.get("Samurai Gunner")} />
          <ClassDisplay classe={classes.get("Shield Trooper")} />
          <ClassDisplay classe={classes.get("Winged Viper")} />
          <ClassDisplay classe={classes.get("Partisan Eagle")} />
          <ClassDisplay classe={classes.get("Psycorruptor")} />
          <ClassDisplay classe={classes.get("Blast Fencer")} />
        </div>
        <div className="rank3">
          <ClassDisplay classe={classes.get("Duelist")} />
          <ClassDisplay classe={classes.get("Bastion Warrior")} />
          <ClassDisplay classe={classes.get("Full Metal Jaguar")} />
          <ClassDisplay classe={classes.get("Astral Crusader")} />
          <ClassDisplay classe={classes.get("Mastermind")} />
          <ClassDisplay classe={classes.get("Galactic Knight")} />
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
