import React from "react";
import "./tweetsList.css";

import Tweet from "./Tweet";
function TweetsList(props) {
  console.log("props.items", props.items);

  return (
    <div className="tweets_list_container">
      {props.items.map((tweetList) => (
        <Tweet
          key={tweetList.id}
          id={tweetList.id}
          userName={tweetList.userName}
          date={tweetList.date.toLocaleString("en-US")}
          userTweet={tweetList.userTweet}
        />
      ))}
    </div>
  );
}
export default TweetsList;
