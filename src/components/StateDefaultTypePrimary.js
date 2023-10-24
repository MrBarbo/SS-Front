import { useMemo } from "react";
import "./StateDefaultTypePrimary.css";

const StateDefaultTypePrimary = ({
  go,
  stateDefaultTypePrimaryAlignItems,
  stateDefaultTypePrimaryJustifyContent,
  stateDefaultTypePrimaryFlex,
  stateDefaultTypePrimaryWidth,
  goFontSize,
  goTextAlign,
  goFlex,
}) => {
  const stateDefaultTypePrimaryStyle = useMemo(() => {
    return {
      alignItems: stateDefaultTypePrimaryAlignItems,
      justifyContent: stateDefaultTypePrimaryJustifyContent,
      flex: stateDefaultTypePrimaryFlex,
      width: stateDefaultTypePrimaryWidth,
    };
  }, [
    stateDefaultTypePrimaryAlignItems,
    stateDefaultTypePrimaryJustifyContent,
    stateDefaultTypePrimaryFlex,
    stateDefaultTypePrimaryWidth,
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
    >
      <div className="go" style={goStyle}>
        {go}
      </div>
    </div>
  );
};

export default StateDefaultTypePrimary;
