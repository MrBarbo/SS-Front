import { useMemo } from "react";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./Property1Default.css";

const Property1Default = ({
  rectangle22,
  projectName,
  projectDesc,
  property1DefaultWidth,
  property1DefaultFlex,
  rectangleIconWidth,
  rectangleIconAlignSelf,
  rectangleIconMaxWidth,
  rectangleIconOverflow,
  rectangleIconFlexShrink,
  frameDivCursor,
  onFrameContainer6Click,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      flex: property1DefaultFlex,
    };
  }, [property1DefaultWidth, property1DefaultFlex]);

  const rectangleIcon2Style = useMemo(() => {
    return {
      width: rectangleIconWidth,
      alignSelf: rectangleIconAlignSelf,
      maxWidth: rectangleIconMaxWidth,
      overflow: rectangleIconOverflow,
      flexShrink: rectangleIconFlexShrink,
    };
  }, [
    rectangleIconWidth,
    rectangleIconAlignSelf,
    rectangleIconMaxWidth,
    rectangleIconOverflow,
    rectangleIconFlexShrink,
  ]);

  const frameDiv7Style = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>      
      <img
        className="property-1default-child"
        alt=""
        src={rectangle22}
        style={rectangleIcon2Style}
      />
      <div className="project-parent">
        <div className="project">Project</div>
        <div className="techs">techs</div>
      </div>
      <div className="project-name-group">
        <div className="project-name1">{projectName}</div>
        <div className="lorem-ipsum-dolor">{projectDesc}
        </div>
        <div
          className="button-container"
          style={frameDiv7Style}
          onClick={onFrameContainer6Click}
        >
          <StateDefaultTypePrimary
            go={`Go <~>`}
            stateDefaultTypePrimaryAlignItems="flex-start"
            stateDefaultTypePrimaryJustifyContent="flex-start"
            stateDefaultTypePrimaryFlex="unset"
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
