import React from "react";
import "./tweetsList.css";
import { useCollection } from "../../../hooks/useCollection";
import { useAuthContext } from "../../../hooks/useAuthContext";

function TweetsList({ tweetList }) {
  const { documents, error } = useCollection("tweets");
  const { user } = useAuthContext();
  console.log("documents", documents);

  return (
    <div className="tweets_list_container">
      {tweetList.map((tweetList) => (
        <div className="tweet_container">
          <div className="tweet_data_container">
            <div className="user_name">{user.displayName}</div>
            <div className="user_tweet_date">{tweetList.date}</div>
          </div>
          <div className="user_tweet">{tweetList.content}</div>
        </div>
      ))}
    </div>
  );
}
export default TweetsList;
