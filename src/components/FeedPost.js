import React from "react";

import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

import FeedInputOption from "./FeedInputOption";

import "./FeedPost.css";

const FeedPost = ({ name, description, message, photoUrl }) => {
  return (
    <div className="feedPost">
      <div className="feedPost__header">
        <Avatar />
        <div className="feedPost__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="feedPost__body">
        <p>{message}</p>
      </div>
      <div className="feedPost__buttons">
        <FeedInputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color="gray"
        />
        <FeedInputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <FeedInputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <FeedInputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default FeedPost;
