import { useMemo } from "react";
import H2 from "./H2";
import StateHoverTypeForm from "./StateHoverTypeForm";
import "./WhatWeOffer.css";

const WhatWeOffer = ({
  serviceNameText,
  serviceDescriptionText,
  serviceName,
  serviceDescription,
  serviceSubtitleText,
  serviceDescriptionLongTex,
  serviceImageUrl,
  serviceDescriptionLongTex2,  
}) => {
  
  return (
    <section className="what-we-offer">
      <H2
        propHeader="Services"        
      />
      <div className="services-parent">
        <StateHoverTypeForm
          prop={serviceNameText}
          addService={serviceDescriptionText}          
        />
        <StateHoverTypeForm
          prop={serviceName}
          addService={serviceDescription}          
        />
        <StateHoverTypeForm
          prop={serviceSubtitleText}
          addService={serviceDescriptionLongTex}
          
        />
        <StateHoverTypeForm
          prop={serviceImageUrl}
          addService={serviceDescriptionLongTex2}          
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
