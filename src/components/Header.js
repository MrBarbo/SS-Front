import { useMemo } from "react";
import StateDefault1 from "./StateDefault1";
import StateDefault from "./StateDefault";
import "./Header.css";

const Header = ({
  showFrameDiv,
  showHeaderLink,
  headerAlignItems,
  headerPadding,
  frameDivJustifyContent,
  frameDivGap,
  headerLinkCursor,
  onHeaderLinkContainerClick,
}) => {
  const headerStyle = useMemo(() => {
    return {
      alignItems: headerAlignItems,
      padding: headerPadding,
    };
  }, [headerAlignItems, headerPadding]);

  const frameDiv10Style = useMemo(() => {
    return {
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [frameDivJustifyContent, frameDivGap]);

  const stateDefault1Style = useMemo(() => {
    return {
      cursor: headerLinkCursor,
    };
  }, [headerLinkCursor]);

  return (
    <div className="header" style={headerStyle}>
      <div className="logo-group">
        <img className="logo-icon1" alt="" src="/logo1@2x.png" />
        <b className="supersite1">SuperSite</b>        
      </div>
      {showFrameDiv && (
        <div className="header-link-parent" style={frameDiv10Style}>
          <StateDefault1
            inicio="Home"
            stateDefaultFlex="1"
            stateDefaultCursor="unset"
            divColor="#34a853"
            divFontWeight="500"
            inicioColor="#fff"
            inicioFontWeight="500"
          />
          <StateDefault1
            inicio="About us"
            stateDefaultFlex="1"
            stateDefaultCursor="unset"
            divColor="#34a853"
            divFontWeight="unset"
            inicioColor="#abb2bf"
            inicioFontWeight="unset"
          />
          <StateDefault1
            inicio="Services"
            stateDefaultFlex="1"
            stateDefaultCursor="unset"
            divColor="#34a853"
            divFontWeight="unset"
            inicioColor="#abb2bf"
            inicioFontWeight="unset"
          />
          <StateDefault1
            inicio="Products"
            stateDefaultFlex="1"
            stateDefaultCursor="unset"
            divColor="#34a853"
            divFontWeight="unset"
            inicioColor="#abb2bf"
            inicioFontWeight="unset"
          />
          <StateDefault1
            inicio="Projects"
            stateDefaultFlex="1"
            stateDefaultCursor="unset"
            divColor="#34a853"
            divFontWeight="unset"
            inicioColor="#abb2bf"
            inicioFontWeight="unset"
          />
          <StateDefault
            stateDefaultFlex="1"
            frameDivBackgroundColor="#1e1e1e"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
