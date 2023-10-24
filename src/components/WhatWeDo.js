import { useMemo } from "react";
import H2 from "./H2";
import Property1Default from "./Property1Default";
import "./WhatWeDo.css";

const WhatWeDo = ({
  rectangle22,
  rectangle221,
  rectangle222,
  rectangle223,
  whatWeDoAlignSelf,
}) => {
  const whatWeDoStyle = useMemo(() => {
    return {
      alignSelf: whatWeDoAlignSelf,
    };
  }, [whatWeDoAlignSelf]);

  return (
    <div className="what-we-do" style={whatWeDoStyle}>
      <H2
        loremIpsumDolorSitAmet="Projects"
        h2AlignSelf="unset"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <div className="project-group">
        <Property1Default rectangle22="/rectangle-22@2x.png" />
        <Property1Default rectangle22="/rectangle-222@2x.png" />
        <Property1Default rectangle22="/rectangle-223@2x.png" />
        <Property1Default rectangle22="/rectangle-22@2x.png" />
        <Property1Default rectangle22="/rectangle-222@2x.png" />
        <Property1Default rectangle22="/rectangle-223@2x.png" />
      </div>
    </div>
  );
};

export default WhatWeDo;
