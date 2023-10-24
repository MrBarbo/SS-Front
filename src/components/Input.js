import { useMemo } from "react";
import { TextField } from "@mui/material";
import H2 from "./H2";
import "./Input.css";
import "../global.css";
import { common } from "@mui/material/colors";

const Input = ({
  inputName,
  inputId,
  
  inputLabel,
  inputType,
  inputPlaceholder,  
  inputWidth,
  inputAlignSelf,
  h2AlignSelf,
  frameDivBoxSizing,
  inputTextHereColor, 
  inputTextHereDisplay,
}) => {
  const inputStyle = useMemo(() => {
    return {
      width: inputWidth,
      alignSelf: inputAlignSelf,      
    };
  }, [inputWidth, inputAlignSelf]);

  const h2Style = useMemo(() => {
    return {
      alignSelf: h2AlignSelf,
    };
  }, [h2AlignSelf]);

  const frameDiv8Style = useMemo(() => {
    return {      
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  const inputTextHereStyle = useMemo(() => {
    return {      
      inputTextHereColor: common.white,      
      display: inputTextHereDisplay,
    };
  }, [
    inputTextHereColor,    
    inputTextHereDisplay,
  ]);

  return (
    <div className="input" style={inputStyle}>
      <H2
        loremIpsumDolorSitAmet={inputPlaceholder}        
        h2JustifyContent="flex-start"
      />
      <div className="input-text-here-wrapper" style={frameDiv8Style}>
        <div className="input-text-here" style={inputTextHereStyle}>
        <TextField          
          className="text"       
          color="primary"            
          name={inputName}
          id={inputId}          
          placeholder={inputLabel}
          type={inputType} // Establecer el tipo a "password" para ocultar el contenido
          multiline 
          maxRows={2}
          variant="standard"
                   
        />
        </div>
      </div>
    </div>
  );
};

export default Input;
