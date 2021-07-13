import React from "react";

import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import "./Widgets.css";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Linkedin news</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is back", "Top news - 9099 readers")}
      {newsArticle("COVID Argentina updates", "Top news - 8000 readers")}
      {newsArticle("Linkedin Clone JPA", "Top news - 7432 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Top news - 600 readers")}
    </div>
  );
};

export default Widgets;
