import React from "react";
import "./Tweet.css";
function Tweet(props) {
  return (
    <div className="tweet_container">
      <div className="tweet_data_container">
        <div className="user_name">{props.userName}</div>
        <div className="user_tweet_date">{props.date}</div>
      </div>
      <div className="user_tweet">{props.userTweet}</div>
    </div>
  );
}
export default Tweet;
