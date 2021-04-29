import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
class Home extends Component {
  openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  render() {
    return (
      <div>
        <div style={{ height: "100px" }} />
        <div className="text-dark h2 ">I'm Nitish Garg</div>
        <div>
          <strong>Flutter Developer</strong> and{" "}
          <strong>MERN Stack Developer</strong>
        </div>
        <div className="my-3">
          <SocialIcon
            className="mx-2"
            height="50%"
            url="https://github.com/nitishgarg2002"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="50%"
            url="https://www.linkedin.com/in/nitish-garg-54a815198/"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="50%"
            url="https://www.instagram.com/nitish.garg__/"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="50%"
            url="https://www.facebook.com/nitish.garg.71465/"
            target="_blank"
          />
        </div>
      </div>
    );
  }
}

export default Home;
