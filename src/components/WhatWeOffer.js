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
  whatWeOfferAlignSelf,
  servicesBorder,
  servicesWidth,
  serviceNameFontSize,
  serviceNameDisplay,
  serviceNameFontFamily,
  serviceNameColor,
  serviceNameTextAlign,
  serviceNameFontWeight,
  loremIpsumDolorFontSize,
  loremIpsumDolorDisplay,
  loremIpsumDolorFontFamily,
  loremIpsumDolorColor,
  loremIpsumDolorTextAlign,
  loremIpsumDolorFontWeight,
  servicesBorder1,
  servicesWidth1,
  serviceNameFontSize1,
  serviceNameDisplay1,
  serviceNameFontFamily1,
  serviceNameColor1,
  serviceNameTextAlign1,
  serviceNameFontWeight1,
  loremIpsumDolorFontSize1,
  loremIpsumDolorDisplay1,
  loremIpsumDolorFontFamily1,
  loremIpsumDolorColor1,
  loremIpsumDolorTextAlign1,
  loremIpsumDolorFontWeight1,
  servicesBorder2,
  servicesWidth2,
  serviceNameFontSize2,
  serviceNameDisplay2,
  serviceNameFontFamily2,
  serviceNameColor2,
  serviceNameTextAlign2,
  serviceNameFontWeight2,
  loremIpsumDolorFontSize2,
  loremIpsumDolorDisplay2,
  loremIpsumDolorFontFamily2,
  loremIpsumDolorColor2,
  loremIpsumDolorTextAlign2,
  loremIpsumDolorFontWeight2,
  servicesBorder3,
  servicesWidth3,
  servicesJustifyContent,
  servicesHeight,
  servicesCursor,
  serviceNameAlignSelf,
  serviceNameFontSize3,
  serviceNameDisplay3,
  serviceNameAlignItems,
  serviceNameJustifyContent,
  serviceNameWidth,
  serviceNameHeight,
  serviceNameFlexShrink,
  loremIpsumDolorAlignSelf,
  loremIpsumDolorFontSize3,
  onServicesContainer3Click,
}) => {
  const whatWeOfferStyle = useMemo(() => {
    return {
      alignSelf: whatWeOfferAlignSelf,
    };
  }, [whatWeOfferAlignSelf]);

  const stateHoverTypeFormStyle = useMemo(() => {
    return {
      border: servicesBorder,
      width: servicesWidth,
    };
  }, [servicesBorder, servicesWidth]);

  const bStyle = useMemo(() => {
    return {
      fontSize: serviceNameFontSize,
      display: serviceNameDisplay,
      fontFamily: serviceNameFontFamily,
      color: serviceNameColor,
      textAlign: serviceNameTextAlign,
      fontWeight: serviceNameFontWeight,
    };
  }, [
    serviceNameFontSize,
    serviceNameDisplay,
    serviceNameFontFamily,
    serviceNameColor,
    serviceNameTextAlign,
    serviceNameFontWeight,
  ]);

  const addServiceStyle = useMemo(() => {
    return {
      fontSize: loremIpsumDolorFontSize,
      display: loremIpsumDolorDisplay,
      fontFamily: loremIpsumDolorFontFamily,
      color: loremIpsumDolorColor,
      textAlign: loremIpsumDolorTextAlign,
      fontWeight: loremIpsumDolorFontWeight,
    };
  }, [
    loremIpsumDolorFontSize,
    loremIpsumDolorDisplay,
    loremIpsumDolorFontFamily,
    loremIpsumDolorColor,
    loremIpsumDolorTextAlign,
    loremIpsumDolorFontWeight,
  ]);

  const stateHoverTypeFormStyle1 = useMemo(() => {
    return {
      border: servicesBorder1,
      width: servicesWidth1,
    };
  }, [servicesBorder1, servicesWidth1]);

  const bStyle1 = useMemo(() => {
    return {
      fontSize: serviceNameFontSize1,
      display: serviceNameDisplay1,
      fontFamily: serviceNameFontFamily1,
      color: serviceNameColor1,
      textAlign: serviceNameTextAlign1,
      fontWeight: serviceNameFontWeight1,
    };
  }, [
    serviceNameFontSize1,
    serviceNameDisplay1,
    serviceNameFontFamily1,
    serviceNameColor1,
    serviceNameTextAlign1,
    serviceNameFontWeight1,
  ]);

  const addServiceStyle1 = useMemo(() => {
    return {
      fontSize: loremIpsumDolorFontSize1,
      display: loremIpsumDolorDisplay1,
      fontFamily: loremIpsumDolorFontFamily1,
      color: loremIpsumDolorColor1,
      textAlign: loremIpsumDolorTextAlign1,
      fontWeight: loremIpsumDolorFontWeight1,
    };
  }, [
    loremIpsumDolorFontSize1,
    loremIpsumDolorDisplay1,
    loremIpsumDolorFontFamily1,
    loremIpsumDolorColor1,
    loremIpsumDolorTextAlign1,
    loremIpsumDolorFontWeight1,
  ]);

  const stateHoverTypeFormStyle2 = useMemo(() => {
    return {
      border: servicesBorder2,
      width: servicesWidth2,
    };
  }, [servicesBorder2, servicesWidth2]);

  const bStyle2 = useMemo(() => {
    return {
      fontSize: serviceNameFontSize2,
      display: serviceNameDisplay2,
      fontFamily: serviceNameFontFamily2,
      color: serviceNameColor2,
      textAlign: serviceNameTextAlign2,
      fontWeight: serviceNameFontWeight2,
    };
  }, [
    serviceNameFontSize2,
    serviceNameDisplay2,
    serviceNameFontFamily2,
    serviceNameColor2,
    serviceNameTextAlign2,
    serviceNameFontWeight2,
  ]);

  const addServiceStyle2 = useMemo(() => {
    return {
      fontSize: loremIpsumDolorFontSize2,
      display: loremIpsumDolorDisplay2,
      fontFamily: loremIpsumDolorFontFamily2,
      color: loremIpsumDolorColor2,
      textAlign: loremIpsumDolorTextAlign2,
      fontWeight: loremIpsumDolorFontWeight2,
    };
  }, [
    loremIpsumDolorFontSize2,
    loremIpsumDolorDisplay2,
    loremIpsumDolorFontFamily2,
    loremIpsumDolorColor2,
    loremIpsumDolorTextAlign2,
    loremIpsumDolorFontWeight2,
  ]);

  const stateHoverTypeFormStyle3 = useMemo(() => {
    return {
      border: servicesBorder3,
      width: servicesWidth3,
      justifyContent: servicesJustifyContent,
      height: servicesHeight,
      cursor: servicesCursor,
    };
  }, [
    servicesBorder3,
    servicesWidth3,
    servicesJustifyContent,
    servicesHeight,
    servicesCursor,
  ]);

  const bStyle3 = useMemo(() => {
    return {
      alignSelf: serviceNameAlignSelf,
      fontSize: serviceNameFontSize3,
      display: serviceNameDisplay3,
      alignItems: serviceNameAlignItems,
      justifyContent: serviceNameJustifyContent,
      width: serviceNameWidth,
      height: serviceNameHeight,
      flexShrink: serviceNameFlexShrink,
    };
  }, [
    serviceNameAlignSelf,
    serviceNameFontSize3,
    serviceNameDisplay3,
    serviceNameAlignItems,
    serviceNameJustifyContent,
    serviceNameWidth,
    serviceNameHeight,
    serviceNameFlexShrink,
  ]);

  const addServiceStyle3 = useMemo(() => {
    return {
      alignSelf: loremIpsumDolorAlignSelf,
      fontSize: loremIpsumDolorFontSize3,
    };
  }, [loremIpsumDolorAlignSelf, loremIpsumDolorFontSize3]);

  return (
    <section className="what-we-offer" style={whatWeOfferStyle}>
      <H2
        loremIpsumDolorSitAmet="Services"
        h2AlignSelf="stretch"
        h2ZIndex="unset"
        h2JustifyContent="flex-start"
      />
      <div className="services-parent">
        <StateHoverTypeForm
          prop={serviceNameText}
          addService={serviceDescriptionText}
          stateHoverTypeFormBorder="1px solid var(--primary)"
          stateHoverTypeFormWidth="466px"
          stateHoverTypeFormJustifyContent="flex-start"
          stateHoverTypeFormHeight="unset"
          stateHoverTypeFormCursor="unset"
          bFontSize="24px"
          bDisplay="inline-block"
          bAlignItems="unset"
          bJustifyContent="unset"
          bWidth="unset"
          bHeight="unset"
          bFlexShrink="unset"
          bAlignSelf="stretch"
          bFontFamily="'Fira Code'"
          bColor="#fff"
          bTextAlign="center"
          bFontWeight="unset"
          addServiceFontSize="16px"
          addServiceAlignSelf="stretch"
          addServiceDisplay="inline-block"
          addServiceFontFamily="'Fira Code'"
          addServiceColor="#fff"
          addServiceTextAlign="center"
          addServiceFontWeight="unset"
        />
        <StateHoverTypeForm
          prop={serviceName}
          addService={serviceDescription}
          stateHoverTypeFormBorder="1px solid var(--primary)"
          stateHoverTypeFormWidth="466px"
          stateHoverTypeFormJustifyContent="flex-start"
          stateHoverTypeFormHeight="unset"
          stateHoverTypeFormCursor="unset"
          bFontSize="24px"
          bDisplay="inline-block"
          bAlignItems="unset"
          bJustifyContent="unset"
          bWidth="unset"
          bHeight="unset"
          bFlexShrink="unset"
          bAlignSelf="stretch"
          bFontFamily="'Fira Code'"
          bColor="#fff"
          bTextAlign="center"
          bFontWeight="unset"
          addServiceFontSize="16px"
          addServiceAlignSelf="stretch"
          addServiceDisplay="inline-block"
          addServiceFontFamily="'Fira Code'"
          addServiceColor="#fff"
          addServiceTextAlign="center"
          addServiceFontWeight="unset"
        />
        <StateHoverTypeForm
          prop={serviceSubtitleText}
          addService={serviceDescriptionLongTex}
          stateHoverTypeFormBorder="1px solid var(--primary)"
          stateHoverTypeFormWidth="466px"
          stateHoverTypeFormJustifyContent="flex-start"
          stateHoverTypeFormHeight="unset"
          stateHoverTypeFormCursor="unset"
          bFontSize="24px"
          bDisplay="inline-block"
          bAlignItems="unset"
          bJustifyContent="unset"
          bWidth="unset"
          bHeight="unset"
          bFlexShrink="unset"
          bAlignSelf="stretch"
          bFontFamily="'Fira Code'"
          bColor="#fff"
          bTextAlign="center"
          bFontWeight="unset"
          addServiceFontSize="16px"
          addServiceAlignSelf="stretch"
          addServiceDisplay="inline-block"
          addServiceFontFamily="'Fira Code'"
          addServiceColor="#fff"
          addServiceTextAlign="center"
          addServiceFontWeight="unset"
        />
        <StateHoverTypeForm
          prop={serviceImageUrl}
          addService={serviceDescriptionLongTex2}
          stateHoverTypeFormBorder="1px solid var(--primary)"
          stateHoverTypeFormWidth="466px"
          stateHoverTypeFormJustifyContent="flex-start"
          stateHoverTypeFormHeight="unset"
          stateHoverTypeFormCursor="unset"
          bFontSize="24px"
          bDisplay="inline-block"
          bAlignItems="unset"
          bJustifyContent="unset"
          bWidth="unset"
          bHeight="unset"
          bFlexShrink="unset"
          bAlignSelf="stretch"
          bFontFamily="'Fira Code'"
          bColor="#fff"
          bTextAlign="center"
          bFontWeight="unset"
          addServiceFontSize="16px"
          addServiceAlignSelf="stretch"
          addServiceDisplay="inline-block"
          addServiceFontFamily="'Fira Code'"
          addServiceColor="#fff"
          addServiceTextAlign="center"
          addServiceFontWeight="unset"
        />
      </div>
    </section>
  );
};

export default WhatWeOffer;
