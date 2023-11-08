import { useMemo } from "react";
import H2 from "./H2";
import "./WhoWeAre.css";

const WhoWeAre = ({
  textHeader,
  textHeaderColor,
  textHeaderCont,
  image,
  propParagraph,

  
  h2JustifyContent,
  loremIpsumDolorColor,
  consecteturAdipiscingColor,
  elitSedDoColor,
  frameDivFlex,
  frameDivOverflow,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivPadding,
  frameDivColor,
  imageIconAlignSelf,
  imageIconPosition,
  imageIconMaxWidth,
  imageIconOverflow,
  imageIconHeight,
  imageIconFlexShrink,
  imageIconObjectFit,
  imageIconColor,
  loremIpsumDolorAlignSelf,
  loremIpsumDolorPosition,
  loremIpsumDolorFontSize,
  loremIpsumDolorLineHeight,
  loremIpsumDolorFontFamily,
  loremIpsumDolorColor1,
  loremIpsumDolorTextAlign,
  loremIpsumDolorDisplay,
}) => {
  const h2Style = useMemo(() => {
    return {
      justifyContent: h2JustifyContent,
    };
  }, [h2JustifyContent]);

  const loremIpsumDolorStyle = useMemo(() => {
    return {
      color: loremIpsumDolorColor,
    };
  }, [loremIpsumDolorColor]);

  const consecteturAdipiscingStyle = useMemo(() => {
    return {
      color: consecteturAdipiscingColor,
    };
  }, [consecteturAdipiscingColor]);

  const elitSedDoStyle = useMemo(() => {
    return {
      color: elitSedDoColor,
    };
  }, [elitSedDoColor]);

  const frameDiv11Style = useMemo(() => {
    return {
      flex: frameDivFlex,
      overflow: frameDivOverflow,
      display: frameDivDisplay,
      flexDirection: frameDivFlexDirection,
      alignItems: frameDivAlignItems,
      justifyContent: frameDivJustifyContent,
      padding: frameDivPadding,
      color: frameDivColor,
    };
  }, [
    frameDivFlex,
    frameDivOverflow,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivPadding,
    frameDivColor,
  ]);

  const imageIconStyle = useMemo(() => {
    return {
      alignSelf: imageIconAlignSelf,
      position: imageIconPosition,
      maxWidth: imageIconMaxWidth,
      overflow: imageIconOverflow,
      height: imageIconHeight,
      flexShrink: imageIconFlexShrink,
      objectFit: imageIconObjectFit,
      color: imageIconColor,
    };
  }, [
    imageIconAlignSelf,
    imageIconPosition,
    imageIconMaxWidth,
    imageIconOverflow,
    imageIconHeight,
    imageIconFlexShrink,
    imageIconObjectFit,
    imageIconColor,
  ]);

  const loremIpsumDolor1Style = useMemo(() => {
    return {
      alignSelf: loremIpsumDolorAlignSelf,
      position: loremIpsumDolorPosition,
      fontSize: loremIpsumDolorFontSize,
      lineHeight: loremIpsumDolorLineHeight,
      fontFamily: loremIpsumDolorFontFamily,
      color: loremIpsumDolorColor1,
      textAlign: loremIpsumDolorTextAlign,
      display: loremIpsumDolorDisplay,
    };
  }, [
    loremIpsumDolorAlignSelf,
    loremIpsumDolorPosition,
    loremIpsumDolorFontSize,
    loremIpsumDolorLineHeight,
    loremIpsumDolorFontFamily,
    loremIpsumDolorColor1,
    loremIpsumDolorTextAlign,
    loremIpsumDolorDisplay,
  ]);

  return (
    <div className="who-we-are">
      <H2
        propHeader="¿Who we are?"        
      />
      <div className="lorem-ipsum-dolor-sit-amet-co-parent">
        <div className="lorem-ipsum-dolor-container">
          <span style={loremIpsumDolorStyle}>{textHeader}</span>
          <span
            className="consectetur-adipiscing"
            style={consecteturAdipiscingStyle}
          >
            {textHeaderColor}
          </span>
          <span style={elitSedDoStyle}>{textHeaderCont}</span>
        </div>
        <div className="image-wrapper" style={frameDiv11Style}>
          <img
            className="image-icon"
            alt=""
            src={image}
            style={imageIconStyle}
          />
        </div>
      </div>
      <div className="lorem-ipsum-dolor8" style={loremIpsumDolor1Style} >
        {propParagraph}
      </div>
    </div>
  );
};

export default WhoWeAre;
