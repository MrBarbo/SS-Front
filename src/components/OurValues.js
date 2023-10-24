import { useMemo } from "react";
import H2 from "./H2";
import "./OurValues.css";

const OurValues = ({
  loremIpsumDolorSitAmetCon,
  loremIpsumDolorSitAmetCon1,
  loremIpsumDolorSitAmetCon2,
  ourValuesWidth,
  ourValuesAlignSelf,
}) => {
  const ourValuesStyle = useMemo(() => {
    return {
      width: ourValuesWidth,
      alignSelf: ourValuesAlignSelf,
    };
  }, [ourValuesWidth, ourValuesAlignSelf]);

  return (
    <div className="our-values" style={ourValuesStyle}>
      <H2
        loremIpsumDolorSitAmet="Our Values"
        h2AlignSelf="unset"
        h2ZIndex="6"
        h2JustifyContent="flex-start"
      />
      <div className="titles">
        <div className="titles1">Mission</div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co">
        <div className="lorem-ipsum-dolor5">{loremIpsumDolorSitAmetCon}</div>
      </div>
      <div className="titles2">
        <div className="titles1">Vission</div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co1">
        <div className="lorem-ipsum-dolor5">{loremIpsumDolorSitAmetCon1}</div>
      </div>
      <div className="titles4">
        <div className="titles1">Objetives</div>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co2">
        <div className="lorem-ipsum-dolor5">{loremIpsumDolorSitAmetCon2}</div>
      </div>
    </div>
  );
};

export default OurValues;
