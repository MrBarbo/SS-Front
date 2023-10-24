import { useMemo } from "react";
import "./StateDefaultTypePrimary.css";

const StateDefaultTypePrimary = ({
  go,
  stateDefaultTypePrimaryAlignItems,
  stateDefaultTypePrimaryJustifyContent,
  stateDefaultTypePrimaryFlex,
  stateDefaultTypePrimaryWidth,
  goClick,
  goFontSize,
  goTextAlign,
  goFlex,
  goCursor
}) => {
  const stateDefaultTypePrimaryStyle = useMemo(() => {
    return {
      alignItems: stateDefaultTypePrimaryAlignItems,
      justifyContent: stateDefaultTypePrimaryJustifyContent,
      flex: stateDefaultTypePrimaryFlex,
      width: stateDefaultTypePrimaryWidth,
      cursor: "pointer"
    };
  }, [
    stateDefaultTypePrimaryAlignItems,
    stateDefaultTypePrimaryJustifyContent,
    stateDefaultTypePrimaryFlex,
    stateDefaultTypePrimaryWidth,
    goCursor,
  ]);

  const goStyle = useMemo(() => {
    return {
      fontSize: goFontSize,
      textAlign: goTextAlign,
      flex: goFlex,
    };
  }, [goFontSize, goTextAlign, goFlex]);

  return (
    <div
      className="statedefault-typeprimary"
      style={stateDefaultTypePrimaryStyle}
      onClick={goClick}
    >
      <div className="go" style={goStyle}>
        {go}
      </div>
    </div>
  );
};

export default StateDefaultTypePrimary;
