import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import H2 from "./H2";
import ProductFormContainer from "./ProductFormContainer";
import "./Container.css";

const Container = () => {
  const navigate = useNavigate();

  const onFrameContainer18Click = useCallback(() => {
    navigate("/prefab");
  }, [navigate]);

  return (
    <div className="what-we-have1">
      <H2
        propHeader="Products"        
      />
      <ProductFormContainer />
    </div>
  );
};

export default Container;
