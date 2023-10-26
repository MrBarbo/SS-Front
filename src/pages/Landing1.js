import { useCallback } from "react";
import Header from "../components/Header";
import WhoWeAre from "../components/WhoWeAre";
import OurValues from "../components/OurValues";
import WhatWeOffer from "../components/WhatWeOffer";
import WhatWeHave from "../components/WhatWeHave";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
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
        headerAlignItems="flex-end"
        headerPadding="var(--padding-13xl) var(--padding-5xs) var(--padding-5xs) var(--padding-15xl)"
        frameDivJustifyContent="flex-start"
        frameDivGap="43px"
        headerLinkCursor="pointer"
        onHeaderLinkContainerClick={onHeaderLinkContainerClick}
      />
      <div className="who-we-are-group">
        <WhoWeAre
          loremIpsumDolorSitAmet=""
          consecteturAdipiscing="SuperSite"
          elitSedDoEiusmodTempor=" es un sistema el cual permite, a través de un formulario,  que el cliente obtenga una página web funcional y adaptada a sus necesidades."
          image="/image1@2x.png"
          loremIpsumDolorSitAmetCon={
            <>
              En el mundo de hoy, cada vez más digitalizado, tener una presencia en línea se ha convertido en necesidad fundamental para empresas, 
              organizaciones y profesionales de todos los rubros. Sin embargo, 
              la creación y diseño de páginas web personalizadas puede ser un proceso costoso, complejo y que consume mucho tiempo, 
              además de necesitar especialistas calificados que no siempre están disponibles. 
              Este proyecto surge como respuesta a la demanda creciente de soluciones eficaces que permitan a las personas y organizaciones establecer su presencia en línea de manera efectiva.
              <br />              
              Mediante el uso de inteligencia artificial, el sistema puede proveer a la página de características que requiera el usuario, como ser colores, imágenes o texto.
            </>
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
          propMis="Ayudar a los individuos, empresas y organizaciones a prosperar mediante la posibilidad de aprovechar las capacidades del internet, para que puedan construir innovación y reducir su impacto ambiental."
          propVis="Ser el principal aliado tecnológico de los individuos y organizaciones que trabajan para cambiar el mundo."
          propObj={
            <>
             <li>
                  Utilizar inteligencia artificial para automatizar el proceso
                  de diseño y personalización de las páginas web, incluyendo
                  elementos como colores, imágenes y texto.
                </li>
                <li>
                  Generar un sistema que sea amigable a todos los tipos de
                  usuario, ya sean empresas, organizaciones gubernamentales o no
                  gubernamentales e incluso personas particulares.
              </li>
            </>
          }           
        />
        <WhatWeOffer
          serviceNameText="Pagina Web"
          serviceDescriptionText="Tras rellenar un formulario con la información necesaria, podrá obtener su página web con dominio personalizado."
          serviceName="GenAI"
          serviceDescription="Contamos con Inteligencia Artificial Generativa integrada para la generación de texto e imágenes para facilitar el trabajo."
          serviceSubtitleText="Personalización"
          serviceDescriptionLongTex="Luego de adquirir una membresía premium podrá acceder a un servicio dedicado para la personalización de su sitio web."
          serviceImageUrl="Insights"
          serviceDescriptionLongTex2="El sitio web recopila información relevante para el cliente para ayudar en la toma de decisiones."
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
          produName="Nombre de mi Posible producto "
          productDesc="Esta sería la descripción de mi producto, si tan solo tuviera uno"
          rectangle221="/rectangle-225@2x.png"
          produName1="Produ Name"
          rectangle222="/rectangle-227@2x.png"
          produName2="Produ Name"
          rectangle223="/rectangle-22@2x.png"
          produName3="Produ Name"
          rectangle224="/rectangle-225@2x.png"
          produName4="Produ Name"
          rectangle225="/rectangle-227@2x.png"
          produName5="Produ Name"
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
          projectName="Nombre de mi Posible proyecto "
          projectDesc="Esta sería la descripción de mi proyecto, si tan solo tuviera uno"
          rectangle221="/rectangle-225@2x.png"
          projectName1="project Name"
          rectangle222="/rectangle-227@2x.png"
          projectName2="project Name"
          rectangle223="/rectangle-22@2x.png"
          projectName3="project Name"
          rectangle224="/rectangle-225@2x.png"
          projectName4="project Name"
          rectangle225="/rectangle-227@2x.png"
          projectName5="project Name"
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
