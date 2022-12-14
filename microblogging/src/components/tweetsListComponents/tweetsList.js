import React, { useContext } from "react";
import { createTweetContext } from "../../context/CreatTweetContext";
import "./tweetsList.css";
import Tweet from "./Tweet";

function TweetsList() {
  const { tweetList } = useContext(createTweetContext);
  const tweetData = [...tweetList];

  return (
    <div className="tweets_list_container">
      {tweetData.map((tweetList) => (
        <Tweet
          key={tweetList.key}
          id={tweetList.id}
          userName={tweetList.userName}
          date={tweetList.date}
          userTweet={tweetList.content}
        />
      ))}
    </div>
  );
}
export default TweetsList;
