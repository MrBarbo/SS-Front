import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./Property1Default.css";

const Property1Default = ({ rectangle22 }) => {
  return (
    <div className="property-1default">
      <img className="property-1default-child" alt="" src={rectangle22} />
      <div className="project-parent">
        <div className="project">Project</div>
        <div className="techs">techs</div>
      </div>
      <div className="project-name-group">
        <div className="project-name1">Project Name</div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel
          facilisis volutpat est velit egestas dui id ornare.
        </div>
        <div className="button-wrapper">
          <StateDefaultTypePrimary
            go={`Go <~>`}
            stateDefaultTypePrimaryAlignItems="center"
            stateDefaultTypePrimaryJustifyContent="center"
            stateDefaultTypePrimaryFlex="1"
            stateDefaultTypePrimaryWidth="unset"
            goFontSize="16px"
            goTextAlign="left"
            goFlex="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default;
