import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import H2 from "./H2";
import ProjectFormContainer from "./ProjectFormContainer";
import "./ContainerForm.css";

const ContainerForm = () => {
  const navigate = useNavigate();

  const onFrameContainer32Click = useCallback(() => {
    navigate("/prefab");
  }, [navigate]);

  return (
    <div className="what-we-do1">
      <H2
        loremIpsumDolorSitAmet="Projects"
        h2AlignSelf="stretch"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <ProjectFormContainer />
    </div>
  );
};

export default ContainerForm;
