import { useMemo } from "react";
import H2 from "./H2";
import Property1Default from "./Property1Default";
import "./WhatWeDo.css";
import WhatWeHave from "./WhatWeHave";

const WhatWeDo = ({
  rectangle22,
  projectName,
  projectDesc,
  rectangle221,
  projectName1,
  rectangle222,
  projectName2,
  rectangle223,
  projectName3,
  rectangle224,
  projectName4,
  rectangle225,
  projectName5,
  whatWeDoAlignSelf,
  whatWeDoWidth,
  frameDivCursor,
  projectWidth,
  projectFlex,
  frameDivCursor1,
  frameDivCursor2,
  projectWidth1,
  projectFlex1,
  frameDivCursor3,
  projectWidth2,
  projectFlex2,
  frameDivCursor4,
  onFrameContainer6Click,
  onFrameContainer8Click,
  onFrameContainer10Click,
  onFrameContainer14Click,
  onFrameContainer16Click,
}) => {
  const whatWeDoStyle = useMemo(() => {
    return {
      width: whatWeDoWidth,
      alignSelf: whatWeDoAlignSelf,
    };
  }, [whatWeDoAlignSelf]);

  const frameDiv7Style = useMemo(() => {
    return {
      cursor: frameDivCursor,
    };
  }, [frameDivCursor]);

  const property1DefaultStyle = useMemo(() => {
    return {
      width: projectWidth,
      flex: projectFlex,
    };
  }, [projectWidth, projectFlex]);

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
      width: projectWidth1,
      flex: projectFlex1,
    };
  }, [projectWidth1, projectFlex1]);

  const frameDiv7Style3 = useMemo(() => {
    return {
      cursor: frameDivCursor3,
    };
  }, [frameDivCursor3]);

  const property1DefaultStyle2 = useMemo(() => {
    return {
      width: projectWidth2,
      flex: projectFlex2,
    };
  }, [projectWidth2, projectFlex2]);

  const frameDiv7Style4 = useMemo(() => {
    return {
      cursor: frameDivCursor4,
    };
  }, [frameDivCursor4]);

  return (
    <div className="what-we-do" style={whatWeDoStyle}>
      <H2
        loremIpsumDolorSitAmet="Projects"
        h2AlignSelf="stretch"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <div className="project-group">
        <Property1Default
          rectangle22="/rectangle-22@2x.png"
          projectName={projectName}
          projectDesc={projectDesc}
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"        
        />
        <Property1Default
          rectangle22="/rectangle-22@2x.png"
          projectName="Project Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"        
        />
        <Property1Default
          rectangle22="/rectangle-22@2x.png"
          projectName="Project Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"        
        />
        <Property1Default
          rectangle22="/rectangle-22@2x.png"
          projectName="Project Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"        
        />
        <Property1Default
          rectangle22="/rectangle-22@2x.png"
          projectName="Project Name"
          property1DefaultWidth="332.6px"
          property1DefaultFlex="unset"
          rectangleIconWidth="unset"
          rectangleIconAlignSelf="stretch"
          rectangleIconMaxWidth="100%"
          rectangleIconOverflow="hidden"
          rectangleIconFlexShrink="0"
          frameDivCursor="unset"        
        />
        <Property1Default
          rectangle22="/rectangle-22@2x.png"
          projectName="Project Name"
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

export default WhatWeDo;
