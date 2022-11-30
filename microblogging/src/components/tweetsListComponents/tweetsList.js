import React from "react";
import "./tweetsList.css";

import Tweet from "./Tweet";
function TweetsList(props) {
  const wteetData = [...props.items];

  return (
    <div className="tweets_list_container">
      {wteetData.map((tweetList) => (
        <Tweet
          key={tweetList.id}
          id={tweetList.id}
          userName={tweetList.userName}
          date={tweetList.date.toLocaleString("en-US")}
          userTweet={tweetList.content}
        />
      ))}
    </div>
  );
}
export default TweetsList;
