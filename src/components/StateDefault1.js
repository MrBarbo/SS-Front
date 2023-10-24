import { useMemo } from "react";
import "./StateDefault1.css";

const StateDefault1 = ({
  inicio,
  stateDefaultFlex,
  stateDefaultCursor,
  divColor,
  divFontWeight,
  inicioColor,
  inicioFontWeight,
  onHeaderLinkContainerClick,
}) => {
  const stateDefault1Style = useMemo(() => {
    return {
      flex: stateDefaultFlex,
      cursor: stateDefaultCursor,
    };
  }, [stateDefaultFlex, stateDefaultCursor]);

  const divStyle = useMemo(() => {
    return {
      color: divColor,
      fontWeight: divFontWeight,
    };
  }, [divColor, divFontWeight]);

  const inicioStyle = useMemo(() => {
    return {
      color: inicioColor,
      fontWeight: inicioFontWeight,
    };
  }, [inicioColor, inicioFontWeight]);

  return (
    <div
      className="statedefault1"
      style={stateDefault1Style}
      onClick={onHeaderLinkContainerClick}
    >
      <div className="div3" style={divStyle}>
        #
      </div>
      <div className="inicio" style={inicioStyle}>
        {inicio}
      </div>
    </div>
  );
};

export default StateDefault1;
