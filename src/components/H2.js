import { useMemo } from "react";
import "./H2.css";

const H2 = ({
  loremIpsumDolorSitAmet,
  h2AlignSelf,
  h2ZIndex,
  h2JustifyContent,
}) => {
  const h2Style = useMemo(() => {
    return {
      alignSelf: h2AlignSelf,
      zIndex: h2ZIndex,
      justifyContent: h2JustifyContent,
    };
  }, [h2AlignSelf, h2ZIndex, h2JustifyContent]);

  return (
    <div className="h2" style={h2Style}>
      <div className="div2">#</div>
      <div className="lorem-ipsum-dolor4">{loremIpsumDolorSitAmet}</div>
    </div>
  );
};

export default H2;
