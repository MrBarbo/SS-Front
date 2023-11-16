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
          textHeader={
            
              <LoremIpsum   p={1} avgWordsPerSentence={6} avgSentencesPerParagraph={1}/>
              
            }
          textHeaderColor={
            
            <LoremIpsum   p={1} avgWordsPerSentence={2} avgSentencesPerParagraph={1}/>
              
            }
          textHeaderCont={
            
            <LoremIpsum   p={1} avgWordsPerSentence={7} avgSentencesPerParagraph={1}/>
            
            }
          image="/image1@2x.png"
          propParagraph={
            
            <LoremIpsum   p={1}/>
            
            }
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
          serviceName={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDesc={<LoremIpsum   p={1}/>}
          serviceName1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDesc1={<LoremIpsum   p={1}/>}
          serviceName2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDesc2={<LoremIpsum   p={1}/>}
          serviceName3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          serviceDesc3={<LoremIpsum   p={1}/>}
        />
        <WhatWeHave
          prodPhot="/rectangle-22@2x.png"
          produName={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          prodPhot1="/rectangle-225@2x.png"
          produName1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          prodPhot2="/rectangle-227@2x.png"
          produName2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          prodPhot3="/rectangle-22@2x.png"
          produName3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          prodPhot4="/rectangle-225@2x.png"
          produName4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
          prodPhot5="/rectangle-227@2x.png"
          produName5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          productDesc5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
        />
        <WhatWeDo
          projFoto="/rectangle-22@2x.png"
          projName={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projDesc={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
        
          projFoto1="/rectangle-225@2x.png"
          projName1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projDesc1={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}

          projFoto2="/rectangle-227@2x.png"
          projName2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projDesc2={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}

          projFoto3="/rectangle-22@2x.png"
          projName3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projDesc3={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}

          projFoto4="/rectangle-225@2x.png"
          projName4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projDesc4={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}

          projFoto5="/rectangle-227@2x.png"
          projName5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={0}/>}
          projDesc5={<LoremIpsum   p={1} avgWordsPerSentence={0} avgSentencesPerParagraph={1}/>}
        />
      </div>
      <Footer
        socialIcon="/linkedin1.svg"
        socialIcon1="/instagram1.svg"
        socialIcon2="/github1.svg"
        socialIcon3="/email1.svg"
        
        onEmailIconClick={onEmailIconClick}
        onLinkedinIconClick={onLinkedinIconClick}
        onInstagramIconClick={onInstagramIconClick}
        onGithubIconClick={onGithubIconClick}
      />
    </div>
  );
};

export default Prefab;
