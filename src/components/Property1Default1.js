import { useMemo } from "react";
import StateDefaultTypePrimary from "./StateDefaultTypePrimary";
import "./Property1Default1.css";

const Property1Default1 = ({
  rectangle22,
  produName,
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
    <div className="property-1default1" style={property1DefaultStyle}>
      <img
        className="property-1default-item"
        alt=""
        src={rectangle22}
        style={rectangleIcon2Style}
      />
      <div className="produ-name-parent">
        <div className="produ-name">{produName}</div>
        <div className="lorem-ipsum-dolor1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel
          facilisis volutpat est velit egestas dui id ornare.
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

export default Property1Default1;
