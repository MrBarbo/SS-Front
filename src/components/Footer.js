import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  iconId,
  iconTextId,
  imageIconId,
  footerHeight,
  frameDivFlex,
  frameDivHeight,
  frameDivAlignSelf,
  frameDivJustifyContent,
  onEmailIconClick,
  onLinkedinIconClick,
  onInstagramIconClick,
  onGithubIconClick,
}) => {
  const footerStyle = useMemo(() => {
    return {
      height: footerHeight,
    };
  }, [footerHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      height: frameDivHeight,
    };
  }, [frameDivFlex, frameDivHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      justifyContent: frameDivJustifyContent,
    };
  }, [frameDivAlignSelf, frameDivJustifyContent]);

  return (
    <div className="footer" style={footerStyle}>
      <div className="footer-child" />
      <div className="frame-parent" style={frameDivStyle}>
        <div className="frame-group">
          <div className="frame-container">
            <div className="frame-wrapper">
              <div className="logo-parent">
                <img className="logo-icon" alt="" src="/logo@2x.png" />
                <div className="supersite">SuperSite</div>
              </div>
            </div>
            <div className="lore-ipsum-dolor">Lore Ipsum dolor sit amet</div>
          </div>
          <div className="socials-parent">
            <div className="socials">Socials</div>
            <div className="email-parent" style={frameDiv1Style}>
              <img
                className="email-icon"
                alt=""
                src="/email1.svg"
                onClick={onEmailIconClick}
              />
              <img
                className="email-icon"
                alt=""
                src={iconId}
                onClick={onLinkedinIconClick}
              />
              <img
                className="instagram-icon"
                alt=""
                src={iconTextId}
                onClick={onInstagramIconClick}
              />
              <img
                className="email-icon"
                alt=""
                src={imageIconId}
                onClick={onGithubIconClick}
              />
            </div>
          </div>
        </div>
        <div className="copyright">© Copyright</div>
      </div>
    </div>
  );
};

export default Footer;
