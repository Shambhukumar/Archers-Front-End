import React from "react";
import "./intro.scss";

function Intro(props) {
  return (
    <div className="intro">
      <div className="intro--logo">The Archers</div>
      <div className="intro--info">
        <p>
          The Archers is the news website were people can spend less time and
          get the top news and the headlines from Top news angencies
          like Times of India, WallStreetJurnal, BBC News and many more. <br /><br />
          The Archers we gather news from top news angencies one place for all
          the headlines.
        </p>
      </div>
      <div className="intro--sites">
        <img src={require("../img/times.jpg")} alt="time of india img" />
        <img src={require("../img/wsj.png")} alt="wsj img"/>
        <img src={require("../img/bbc.png")} alt="bbc world img"/>
      </div>
    </div>
  );
}

export default Intro;
