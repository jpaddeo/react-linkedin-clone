import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";

import firebase from "firebase";
import { firebaseDb } from "../firebase";

import { selectUser } from "../features/userSlice";

import FeedInputOption from "./FeedInputOption";
import FeedPost from "./FeedPost";

import "./Feed.css";

const Feed = () => {
  const user = useSelector(selectUser);
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebaseDb
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (ev) => {
    ev.preventDefault();
    firebaseDb.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: message,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <FeedInputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <FeedInputOption
            Icon={SubscriptionsIcon}
            title="Video"
            color="#e7a33e"
          />
          <FeedInputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <FeedInputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <FeedPost
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
