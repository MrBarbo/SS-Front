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
        headerLinkCursor="pointer"
        onHeaderLinkContainerClick={onHeaderLinkContainerClick}
      />
      <div className="who-we-are-group">
        <WhoWeAre
          textHeader=""
          textHeaderColor="SuperSite"
          textHeaderCont=" es un sistema el cual permite, a través de un formulario,  que el cliente obtenga una página web funcional y adaptada a sus necesidades."
          image="/image1@2x.png"
          propParagraph={
            <>
              En el mundo de hoy, cada vez más digitalizado, tener una presencia en línea se ha convertido en necesidad fundamental para empresas, 
              organizaciones y profesionales de todos los rubros. Sin embargo, 
              la creación y diseño de páginas web personalizadas puede ser un proceso costoso, complejo y que consume mucho tiempo, 
              además de necesitar especialistas calificados que no siempre están disponibles. 
              <br /> 
              <br /> 
              Este proyecto surge como respuesta a la demanda creciente de soluciones eficaces que permitan a las personas y organizaciones establecer su presencia en línea de manera efectiva.
              <br /> <br />              
              Mediante el uso de inteligencia artificial, el sistema puede proveer a la página de características que requiera el usuario, como ser colores, imágenes o texto.
            </>
          }
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
          serviceName="Pagina Web"
          serviceDesc="Tras rellenar un formulario con la información necesaria, podrá obtener su página web con dominio personalizado."
          serviceName1="GenAI"
          serviceDesc1="Contamos con Inteligencia Artificial Generativa integrada para la generación de texto e imágenes para facilitar el trabajo."
          serviceName2="Personalización"
          serviceDesc2="Luego de adquirir una membresía premium podrá acceder a un servicio dedicado para la personalización de su sitio web."
          serviceName3="Insights"
          serviceDesc3="El sitio web recopila información relevante para el cliente para ayudar en la toma de decisiones."                  
        />        
        <WhatWeHave
          prodPhot="/rectangle-22@2x.png"
          produName="LiteSite"
          productDesc="Esta sería la descripción de mi producto, si tan solo tuviera uno"
          prodPhot1="/rectangle-225@2x.png"
          produName1="MiniSite"
          productDesc1="Test"
          prodPhot2="/rectangle-227@2x.png"
          produName2="ProSite"
          prodPhot3="/rectangle-22@2x.png"
          produName3="MegaSite"
          prodPhot4="/rectangle-225@2x.png"
          produName4="UltraSite"
          prodPhot5="/rectangle-227@2x.png"
          produName5="SuperSite"
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
