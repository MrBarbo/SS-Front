import { useCallback } from "react";
import { TextField, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Input from "../components/Input";
import WhatWeOffer from "../components/WhatWeOffer";
import Container from "../components/Container";
import ContainerForm from "../components/ContainerForm";
import Socials from "../components/Socials";
import StateDefaultTypePrimary from "../components/StateDefaultTypePrimary";
import Footer from "../components/Footer";


import "./Formulario.css";



const Formulario = () => {
  

  const navigate = useNavigate();

  const onFrameContainer18Click = useCallback(() => {
    navigate("/prefab1");
  }, [navigate]);

  const onFrameContainer32Click = useCallback(() => {
    navigate("/prefab1");
  }, [navigate]);

  const onServicesContainer3Click = useCallback(() => {
    navigate("/prefab1");
  },[navigate])

  const onEmailIcon1Click = useCallback(() => {
    window.location.href = "mailto:nicoboattini@gmail.com";
  }, []);

  const onLinkedinIcon1Click = useCallback(() => {
    window.open("linkedin.com/in/nicoboattini");
  }, []);

  const onInstagramIcon1Click = useCallback(() => {
    window.open("https://www.instagram.com/nicolasboattini/");
  }, []);

  const onGithubIcon1Click = useCallback(() => {
    window.open("github.com/nicolasboattini");
  }, []);

  return (
    <div className="formulario">
      <Header
        showFrameDiv={false}
        showHeaderLink        
      />       
      <main className="input-parent">
        <Input
          inputId="1"
          inputName="name"  
          inputTitle="Company Name / Page Title"          
          inputLabel="Text goes here..."                  
        />
        <Input
          inputId="2"
          inputName="desc"  
          inputTitle="Description"
          inputLabel="Text goes here..."                   
        />
        <Input
          inputId="3"
          inputName="miss"  
          inputTitle="Mission"
          inputLabel="Text goes here..."            
        />
        <Input
          inputId="4"
          inputName="viss"  
          inputTitle="Vission"
          inputLabel="Text goes here..."            
        />
        <Input
          inputId="5"
          inputName="obj"  
          inputTitle="Objetives"          
          inputLabel="Text goes here..."  
        />
        <WhatWeOffer
          serviceImageUrl="+"
          serviceDescriptionLongTex2="Add Service"
          whatWeOfferAlignSelf="stretch"
          servicesBorder="4px dashed var(--gray)"
          servicesWidth="474px"
          serviceNameFontSize="unset"
          serviceNameDisplay="unset"
          serviceNameFontFamily="unset"
          serviceNameColor="unset"
          serviceNameTextAlign="unset"
          serviceNameFontWeight="unset"
          loremIpsumDolorFontSize="unset"
          loremIpsumDolorDisplay="unset"
          loremIpsumDolorFontFamily="unset"
          loremIpsumDolorColor="unset"
          loremIpsumDolorTextAlign="unset"
          loremIpsumDolorFontWeight="unset"
          servicesBorder1="4px dashed var(--gray)"
          servicesWidth1="474px"
          serviceNameFontSize1="unset"
          serviceNameDisplay1="unset"
          serviceNameFontFamily1="unset"
          serviceNameColor1="unset"
          serviceNameTextAlign1="unset"
          serviceNameFontWeight1="unset"
          loremIpsumDolorFontSize1="unset"
          loremIpsumDolorDisplay1="unset"
          loremIpsumDolorFontFamily1="unset"
          loremIpsumDolorColor1="unset"
          loremIpsumDolorTextAlign1="unset"
          loremIpsumDolorFontWeight1="unset"
          servicesBorder2="4px dashed var(--gray)"
          servicesWidth2="474px"
          serviceNameFontSize2="unset"
          serviceNameDisplay2="unset"
          serviceNameFontFamily2="unset"
          serviceNameColor2="unset"
          serviceNameTextAlign2="unset"
          serviceNameFontWeight2="unset"
          loremIpsumDolorFontSize2="unset"
          loremIpsumDolorDisplay2="unset"
          loremIpsumDolorFontFamily2="unset"
          loremIpsumDolorColor2="unset"
          loremIpsumDolorTextAlign2="unset"
          loremIpsumDolorFontWeight2="unset"
          servicesBorder3="4px dashed var(--gray)"
          servicesWidth3="474px"
          servicesJustifyContent="center"
          servicesHeight="218px"
          servicesCursor="unset"
          serviceNameAlignSelf="unset"
          serviceNameFontSize3="48px"
          serviceNameDisplay3="flex"
          serviceNameAlignItems="center"
          serviceNameJustifyContent="center"
          serviceNameWidth="176px"
          serviceNameHeight="42px"
          serviceNameFlexShrink="0"
          loremIpsumDolorAlignSelf="unset"
          loremIpsumDolorFontSize3="20px"
          onServicesContainer3Click={onServicesContainer3Click}
        />
        <Container />
        <ContainerForm />
        <Socials
          socialsAlignItems="center"
          frameDivFlex="unset"
          frameDivAlignItems="center"
          frameDivJustifyContent="space-between"
          frameDivGap="unset"
          rectangleDivBackgroundColor="unset"
          rectangleDivBackgroundColor1="unset"
          linkedinIconCursor="unset"
          rectangleDivBackgroundColor2="unset"
          instagramIconCursor="unset"
          rectangleDivBackgroundColor3="unset"
          githubIconCursor="unset"
          rectangleDivBackgroundColor4="unset"
          emailIconCursor="unset"
          rectangleDivBackgroundColor5="unset"
          rectangleDivBackgroundColor6="unset"
        />
        <div className="input-group">
          <Input
            inputId="6"
            inputName="obj"  
            inputTitle="Objetives"          
            inputLabel="Text goes here..."  
          />
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
          <Input
            inputPlaceholder="InputType"
            showH2={false}
            inputWidth="unset"
            inputAlignSelf="stretch"
            h2AlignSelf="stretch"
            frameDivBoxSizing="border-box"
            inputTextHereFontSize="unset"
            inputTextHereFontFamily="unset"
            inputTextHereColor="unset"
            inputTextHereTextAlign="unset"
            inputTextHereDisplay="unset"
          />
        </div>
        <div className="button-frame">
          <StateDefaultTypePrimary
            go="SuperSitea!"
            stateDefaultTypePrimaryAlignItems="center"
            stateDefaultTypePrimaryJustifyContent="center"
            stateDefaultTypePrimaryFlex="unset"
            stateDefaultTypePrimaryWidth="357px"
            goFontSize="48px"
            goTextAlign="center"
            goFlex="1"
            goClick={onServicesContainer3Click}
            goCursor="pointer"
          />
        </div>
      </main>
      <Footer
        iconId="/linkedin1.svg"
        iconTextId="/instagram1.svg"
        imageIconId="/github1.svg"
        footerHeight="unset"
        frameDivFlex="unset"
        frameDivHeight="119px"
        frameDivAlignSelf="stretch"
        frameDivJustifyContent="flex-end"
        onEmailIconClick={onEmailIcon1Click}
        onLinkedinIconClick={onLinkedinIcon1Click}
        onInstagramIconClick={onInstagramIcon1Click}
        onGithubIconClick={onGithubIcon1Click}
      />
    </div>
  );
};

export default Formulario;
