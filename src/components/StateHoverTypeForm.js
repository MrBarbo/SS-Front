import { useMemo } from "react";
import "./StateHoverTypeForm.css";

const StateHoverTypeForm = ({
  prop,
  addService,
  stateHoverTypeFormBorder,
  stateHoverTypeFormWidth,
  stateHoverTypeFormJustifyContent,
  stateHoverTypeFormHeight,
  stateHoverTypeFormCursor,
  bFontSize,
  bDisplay,
  bAlignItems,
  bJustifyContent,
  bWidth,
  bHeight,
  bFlexShrink,
  bAlignSelf,
  bFontFamily,
  bColor,
  bTextAlign,
  bFontWeight,
  addServiceFontSize,
  addServiceAlignSelf,
  addServiceDisplay,
  addServiceFontFamily,
  addServiceColor,
  addServiceTextAlign,
  addServiceFontWeight,
  onServicesContainer3Click,
}) => {
  const stateHoverTypeFormStyle = useMemo(() => {
    return {
      border: stateHoverTypeFormBorder,
      width: stateHoverTypeFormWidth,
      justifyContent: stateHoverTypeFormJustifyContent,
      height: stateHoverTypeFormHeight,
      cursor: stateHoverTypeFormCursor,
    };
  }, [
    stateHoverTypeFormBorder,
    stateHoverTypeFormWidth,
    stateHoverTypeFormJustifyContent,
    stateHoverTypeFormHeight,
    stateHoverTypeFormCursor,
  ]);

  const bStyle = useMemo(() => {
    return {
      fontSize: bFontSize,
      display: bDisplay,
      alignItems: bAlignItems,
      justifyContent: bJustifyContent,
      width: bWidth,
      height: bHeight,
      flexShrink: bFlexShrink,
      alignSelf: bAlignSelf,
      fontFamily: bFontFamily,
      color: bColor,
      textAlign: bTextAlign,
      fontWeight: bFontWeight,
    };
  }, [
    bFontSize,
    bDisplay,
    bAlignItems,
    bJustifyContent,
    bWidth,
    bHeight,
    bFlexShrink,
    bAlignSelf,
    bFontFamily,
    bColor,
    bTextAlign,
    bFontWeight,
  ]);

  const addServiceStyle = useMemo(() => {
    return {
      fontSize: addServiceFontSize,
      alignSelf: addServiceAlignSelf,
      display: addServiceDisplay,
      fontFamily: addServiceFontFamily,
      color: addServiceColor,
      textAlign: addServiceTextAlign,
      fontWeight: addServiceFontWeight,
    };
  }, [
    addServiceFontSize,
    addServiceAlignSelf,
    addServiceDisplay,
    addServiceFontFamily,
    addServiceColor,
    addServiceTextAlign,
    addServiceFontWeight,
  ]);

  return (
    <div
      className="statehover-typeform"
      style={stateHoverTypeFormStyle}
      onClick={onServicesContainer3Click}
    >
      <b className="b" style={bStyle}>
        {prop}
      </b>
      <b className="add-service" style={addServiceStyle}>
        {addService}
      </b>
    </div>
  );
};

export default StateHoverTypeForm;
