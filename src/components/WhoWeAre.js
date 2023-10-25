import { useMemo } from "react";
import H2 from "./H2";
import "./WhoWeAre.css";

const WhoWeAre = ({
  loremIpsumDolorSitAmet,
  consecteturAdipiscing,
  elitSedDoEiusmodTempor,
  image,
  loremIpsumDolorSitAmetCon,
  whoWeAreFlex,
  whoWeAreWidth,
  whoWeAreAlignSelf,
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
  const whoWeAreStyle = useMemo(() => {
    return {
      flex: whoWeAreFlex,
      width: whoWeAreWidth,
      alignSelf: whoWeAreAlignSelf,
    };
  }, [whoWeAreFlex, whoWeAreWidth, whoWeAreAlignSelf]);

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
    <div className="who-we-are" style={whoWeAreStyle}>
      <H2
        loremIpsumDolorSitAmet="¿Who we are?"
        h2AlignSelf="unset"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <div className="lorem-ipsum-dolor-sit-amet-co-parent">
        <div className="lorem-ipsum-dolor-container">
          <span style={loremIpsumDolorStyle}>{loremIpsumDolorSitAmet}</span>
          <span
            className="consectetur-adipiscing"
            style={consecteturAdipiscingStyle}
          >
            {consecteturAdipiscing}
          </span>
          <span style={elitSedDoStyle}>{elitSedDoEiusmodTempor}</span>
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
        {loremIpsumDolorSitAmetCon}
      </div>
    </div>
  );
};

export default WhoWeAre;
