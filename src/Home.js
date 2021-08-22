import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import NavBar from "./Navbar";
import ScrollButton from "react-scroll-button";
class Home extends Component {
  openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  render() {
    return (
      <div
        style={{
          backgroundImage: "url(/img/bgg.jpg)",
          height: "100vh",
          width: "100vw",
          color: "white",
        }}
      >
        <NavBar />
        <div style={{ height: "20%" }} />
        <div className=" h1">I'm Nitish Garg</div>
        <div className="py-2 h6">
          {" "}
          <strong> Flutter Developer </strong>and <strong> MERN Stack </strong>
          Developer
        </div>
        <div className="my-3">
          <SocialIcon
            className="mx-2"
            height="25%"
            url="https://github.com/nitishgarg2002"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="25%"
            url="https://www.linkedin.com/in/nitish-garg-54a815198/"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="25%"
            url="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=nitishgarg2002@gmail.com"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="25%"
            url="https://www.instagram.com/nitish.garg__/"
            target="_blank"
          />
          <SocialIcon
            className="mx-2"
            height="25%"
            url="https://www.facebook.com/nitish.garg.71465/"
            target="_blank"
          />
        </div>
        <ScrollButton
          behavior={"smooth"}
          buttonBackgroundColor={"black"}
          iconType={"angle-up"}
          style={{ fontSize: "25px" }}
          targetId="home"
          scrollSpeed="2"
        />
      </div>
    );
  }
}

export default Home;
