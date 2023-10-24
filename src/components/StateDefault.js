import { useMemo } from "react";
import "./StateDefault.css";

const StateDefault = ({ stateDefaultFlex, frameDivBackgroundColor }) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      flex: stateDefaultFlex,
    };
  }, [stateDefaultFlex]);

  const frameDiv9Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  return (
    <div className="statedefault" style={stateDefaultStyle}>
      <div className="es">ES</div>
      <img className="statedefault-child" alt="" src="/group-58.svg" />
      <div className="ru-parent" style={frameDiv9Style}>
        <div className="ru">RU</div>
        <div className="ru">UA</div>
      </div>
    </div>
  );
};

export default StateDefault;
