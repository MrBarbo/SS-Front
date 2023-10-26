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
  
  frameDivBoxSizing,
  inputTextHereColor, 
  inputTextHereDisplay,
}) => {
  

  

  

  const inputTextHereStyle = useMemo(() => {
    return {      
      inputTextHereColor: common.black,      
      display: inputTextHereDisplay,
    };
  }, [
    inputTextHereColor,    
    inputTextHereDisplay,
  ]);

  return (
    <div className="input">
      <H2
        propHeader={inputPlaceholder}                
      />
      <div className="input-text-here-wrapper" >
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
