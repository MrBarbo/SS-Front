import { useMemo } from "react";
import H2 from "./H2";
import Property1Default1 from "./Property1Default1";
import "./WhatWeHave.css";

const WhatWeHave = ({
  rectangle22,
  produName,
  rectangle221,
  produName1,
  rectangle222,
  produName2,
  rectangle223,
  produName3,
  rectangle224,
  produName4,
  rectangle225,
  produName5,
  whatWeHaveWidth,
  whatWeHaveAlignSelf,
  frameDivCursor,
  productWidth,
  productFlex,
  frameDivCursor1,
  frameDivCursor2,
  productWidth1,
  productFlex1,
  frameDivCursor3,
  productWidth2,
  productFlex2,
  frameDivCursor4,
  onFrameContainer6Click,
  onFrameContainer8Click,
  onFrameContainer10Click,
  onFrameContainer14Click,
  onFrameContainer16Click,
}) => {
  const whatWeHaveStyle = useMemo(() => {
    return {
      width: whatWeHaveWidth,
      alignSelf: whatWeHaveAlignSelf,
    };
  }, [whatWeHaveWidth, whatWeHaveAlignSelf]);

  const frameDiv7Style = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  const property1DefaultStyle = useMemo(() => {
    return {
      width: productWidth,
      flex: productFlex,
    };
  }, [productWidth, productFlex]);

  const frameDiv7Style1 = useMemo(() => {
    return {
      cursor: frameDivCursor1,
    };
  }, [frameDivCursor1]);

  const frameDiv7Style2 = useMemo(() => {
    return {
      cursor: frameDivCursor2,
    };
  }, [frameDivCursor2]);

  const property1DefaultStyle1 = useMemo(() => {
    return {
      width: productWidth1,
      flex: productFlex1,
    };
  }, [productWidth1, productFlex1]);

  const frameDiv7Style3 = useMemo(() => {
    return {
      cursor: frameDivCursor3,
    };
  }, [frameDivCursor3]);

  const property1DefaultStyle2 = useMemo(() => {
    return {
      width: productWidth2,
      flex: productFlex2,
    };
  }, [productWidth2, productFlex2]);

  const frameDiv7Style4 = useMemo(() => {
    return {
      cursor: frameDivCursor4,
    };
  }, [frameDivCursor4]);

  return (
    <div className="what-we-have" style={whatWeHaveStyle}>
      <H2
        loremIpsumDolorSitAmet="Products"
        h2AlignSelf="stretch"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <div className="product-parent">
        <Property1Default1
          rectangle22="/rectangle-22@2x.png"
          produName="Produ Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"
        />
        <Property1Default1
          rectangle22="/rectangle-222@2x.png"
          produName="Produ Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"
        />
        <Property1Default1
          rectangle22="/rectangle-223@2x.png"
          produName="Produ Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"
        />
        <Property1Default1
          rectangle22="/rectangle-22@2x.png"
          produName="Produ Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"
        />
        <Property1Default1
          rectangle22="/rectangle-222@2x.png"
          produName="Produ Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"
        />
        <Property1Default1
          rectangle22="/rectangle-223@2x.png"
          produName="Produ Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"
        />
      </div>
    </div>
  );
};

export default WhatWeHave;
