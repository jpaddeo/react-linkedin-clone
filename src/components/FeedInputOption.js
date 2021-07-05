import React from "react";

import "./FeedInputOption.css";

const FeedInputOption = ({ Icon, title, color }) => {
  return (
    <div className="feedInputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default FeedInputOption;
