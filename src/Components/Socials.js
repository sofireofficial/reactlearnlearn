import React from "react";
import LogoFacebook from "../images/LogoFacebook.png";
import LogoGithub from "../images/LogoGithub.png";
import LogoInstagram from "../images/LogoInstagram.png";
import LogoTwitter from "../images/LogoTwitter.png";

const Socials = () => {
  return (
    <div id="smBox">
      <h3>My socials</h3>
      <ul>
      <li><a href="https://github.com/sofireofficial" target="blank">
        <img src={LogoGithub} alt="Github logo" 
        class="smLogo"/> Github</a></li>
      <li><a href="https://twitter.com/SofireOfficial" target="blank">
        <img src={LogoTwitter} alt="Twitter logo" 
        class="smLogo"/> Twitter</a></li>
      <li><a href="https://www.instagram.com/sofireofficial/" target="blank">
        <img src={LogoInstagram} alt="Instagram logo" 
        class="smLogo"/> Instagram</a></li>
      <li><a href="https://www.facebook.com/SoFirexx" target="blank">
        <img src={LogoFacebook} 
        class="smLogo" alt="Facebook logo"/> Facebook</a></li>
                
      </ul>
    </div>
  );
};

export default Socials;
