import { useCallback } from "react";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import OurValues from "../components/OurValues";
import WhatWeOffer from "../components/WhatWeOffer";
import WhatWeHave from "../components/WhatWeHave";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import Lorem from 'react-lorem-component';
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';
import "./Prefab.css";

const Prefab = () => {
  const onHeaderLinkContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whoWeAre']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEmailIconClick = useCallback(() => {
    window.location.href = "mailto:nicoboattini@gmail.com";
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open("linkedin.com/in/nicoboattini");
  }, []);

  const onInstagramIconClick = useCallback(() => {
    window.open("https://www.instagram.com/nicolasboattini/");
  }, []);

  const onGithubIconClick = useCallback(() => {
    window.open("github.com/nicolasboattini");
  }, []);

  return (
    <div className="prefab">
      <Header
        showFrameDiv
        showHeaderLink
        headerLinkCursor="pointer"
        onHeaderLinkContainerClick={onHeaderLinkContainerClick}
      />
      <div className="who-we-are-group">
        <WhoWeAre
          loremIpsumDolorSitAmet={
            
              <LoremIpsum   p={1} avgWordsPerSentence={6} avgSentencesPerParagraph={1}/>
              
            }
          consecteturAdipiscing={
            
            <LoremIpsum   p={1} avgWordsPerSentence={2} avgSentencesPerParagraph={1}/>
              
            }
          elitSedDoEiusmodTempor={
            
            <LoremIpsum   p={1} avgWordsPerSentence={7} avgSentencesPerParagraph={1}/>
            
            }
          image="/image1@2x.png"
          loremIpsumDolorSitAmetCon={
            
            <LoremIpsum   p={1}/>
            
            }
          whoWeAreFlex="unset"
          whoWeAreWidth="unset"
          whoWeAreAlignSelf="stretch"
          h2JustifyContent="flex-start"
          loremIpsumDolorColor="#fff"
          consecteturAdipiscingColor="#34a853"
          elitSedDoColor="#fff"
          frameDivFlex="1"
          frameDivOverflow="hidden"
          frameDivDisplay="flex"
          frameDivFlexDirection="column"
          frameDivAlignItems="flex-start"
          frameDivJustifyContent="flex-start"
          frameDivPadding="0px var(--padding-50xl)"
          frameDivColor="unset"
          imageIconAlignSelf="stretch"
          imageIconPosition="relative"
          imageIconMaxWidth="100%"
          imageIconOverflow="hidden"
          imageIconHeight="298px"
          imageIconFlexShrink="0"
          imageIconObjectFit="scale-down"
          imageIconColor="unset"
          loremIpsumDolorAlignSelf="stretch"
          loremIpsumDolorPosition="relative"
          loremIpsumDolorFontSize="16px"
          loremIpsumDolorLineHeight="25px"
          loremIpsumDolorFontFamily="'Fira Code'"
          loremIpsumDolorColor1="#abb2bf"
          loremIpsumDolorTextAlign="left"
          loremIpsumDolorDisplay="inline-block"
        />
        <OurValues
          propMis={
            <>
              <LoremIpsum   p={2}/>
            </>  
          }
          propVis={
            <>
              <LoremIpsum   p={1}/>
            </>  
          }
          propObj={
            <>
              <LoremIpsum   p={3}/>
            </>  
          }
        />
        <WhatWeOffer
          serviceNameText={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDescriptionText={<LoremIpsum   p={1}/>}
          serviceName={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDescription={<LoremIpsum   p={1}/>}
          serviceSubtitleText={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDescriptionLongTex={<LoremIpsum   p={1}/>}
          serviceImageUrl={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDescriptionLongTex2={<LoremIpsum   p={1}/>}
          whatWeOfferAlignSelf="stretch"
          servicesBorder="1px solid var(--primary)"
          servicesWidth="466px"
          serviceNameFontSize="24px"
          serviceNameDisplay="inline-block"
          serviceNameFontFamily="'Fira Code'"
          serviceNameColor="#fff"
          serviceNameTextAlign="center"
          serviceNameFontWeight="bold"
          loremIpsumDolorFontSize="16px"
          loremIpsumDolorDisplay="inline-block"
          loremIpsumDolorFontFamily="'Fira Code'"
          loremIpsumDolorColor="#fff"
          loremIpsumDolorTextAlign="center"
          loremIpsumDolorFontWeight="bold"
          servicesBorder1="1px solid var(--primary)"
          servicesWidth1="466px"
          serviceNameFontSize1="24px"
          serviceNameDisplay1="inline-block"
          serviceNameFontFamily1="'Fira Code'"
          serviceNameColor1="#fff"
          serviceNameTextAlign1="center"
          serviceNameFontWeight1="bold"
          loremIpsumDolorFontSize1="16px"
          loremIpsumDolorDisplay1="inline-block"
          loremIpsumDolorFontFamily1="'Fira Code'"
          loremIpsumDolorColor1="#fff"
          loremIpsumDolorTextAlign1="center"
          loremIpsumDolorFontWeight1="bold"
          servicesBorder2="1px solid var(--primary)"
          servicesWidth2="466px"
          serviceNameFontSize2="24px"
          serviceNameDisplay2="inline-block"
          serviceNameFontFamily2="'Fira Code'"
          serviceNameColor2="#fff"
          serviceNameTextAlign2="center"
          serviceNameFontWeight2="bold"
          loremIpsumDolorFontSize2="16px"
          loremIpsumDolorDisplay2="inline-block"
          loremIpsumDolorFontFamily2="'Fira Code'"
          loremIpsumDolorColor2="#fff"
          loremIpsumDolorTextAlign2="center"
          loremIpsumDolorFontWeight2="bold"
          servicesBorder3="1px solid var(--primary)"
          servicesWidth3="466px"
          servicesJustifyContent="flex-start"
          servicesHeight="unset"
          servicesCursor="unset"
          serviceNameAlignSelf="stretch"
          serviceNameFontSize3="24px"
          serviceNameDisplay3="inline-block"
          serviceNameAlignItems="unset"
          serviceNameJustifyContent="unset"
          serviceNameWidth="unset"
          serviceNameHeight="unset"
          serviceNameFlexShrink="unset"
          loremIpsumDolorAlignSelf="stretch"
          loremIpsumDolorFontSize3="16px"
        />
        <WhatWeHave
          rectangle22="/rectangle-22@2x.png"
          produName={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          rectangle221="/rectangle-225@2x.png"
          produName1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          rectangle222="/rectangle-227@2x.png"
          produName2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          rectangle223="/rectangle-22@2x.png"
          produName3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          rectangle224="/rectangle-225@2x.png"
          produName4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          rectangle225="/rectangle-227@2x.png"
          produName5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          whatWeHaveWidth="unset"
          whatWeHaveAlignSelf="stretch"
          frameDivCursor="unset"
          productWidth="332.6px"
          productFlex="unset"
          frameDivCursor1="unset"
          frameDivCursor2="unset"
          productWidth1="332.6px"
          productFlex1="unset"
          frameDivCursor3="unset"
          productWidth2="332.6px"
          productFlex2="unset"
          frameDivCursor4="unset"
        />
        <WhatWeDo
          rectangle22="/rectangle-22@2x.png"
          projectName={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projectDesc={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          rectangle221="/rectangle-225@2x.png"
          projectName1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          rectangle222="/rectangle-227@2x.png"
          projectName2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          rectangle223="/rectangle-22@2x.png"
          projectName3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          rectangle224="/rectangle-225@2x.png"
          projectName4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          rectangle225="/rectangle-227@2x.png"
          projectName5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          whatWeDoWidth="unset"
          whatWeDoAlignSelf="stretch"
          frameDivCursor="unset"
          projectctWidth="499.6px"
          projectctFlex="unset"
          frameDivCursor1="unset"
          frameDivCursor2="unset"
          projectctWidth1="499.6px"
          projectctFlex1="unset"
          frameDivCursor3="unset"
          projectctWidth2="499.6px"
          projectctFlex2="unset"
          frameDivCursor4="unset"
        />
      </div>
      <Footer
        iconId="/linkedin1.svg"
        iconTextId="/instagram1.svg"
        imageIconId="/github1.svg"
        footerHeight="unset"
        frameDivFlex="unset"
        frameDivHeight="119px"
        frameDivAlignSelf="unset"
        frameDivJustifyContent="flex-end"
        onEmailIconClick={onEmailIconClick}
        onLinkedinIconClick={onLinkedinIconClick}
        onInstagramIconClick={onInstagramIconClick}
        onGithubIconClick={onGithubIconClick}
      />
    </div>
  );
};

export default Prefab;
