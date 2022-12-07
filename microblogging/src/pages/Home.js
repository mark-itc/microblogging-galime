import React, { useState, useEffect } from "react";

import CreateTweet from "../components/createTweetComponents/CreateTweet";
import TweetsList from "../components/tweetsListComponents/tweetsList";
function Home() {
  const teetServwrURL =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  const [tweetList, setTweetList] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, serError] = useState(null);
  const [isError, setIsIsError] = useState(false);
  const [userName, setUserName] = useState("You");

  useEffect(() => {
    fetchTweets();
  }, []);
  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  });
  async function fetchTweets() {
    setIsLoading(true);
    serError(null);

    try {
      const response = await fetch(teetServwrURL);

      if (!response.ok) {
        throw new Error("Somthing went wrong");
      }
      const data = await response.json();
      setTweetList(data.tweets);
    } catch (error) {
      serError(error.message);
      setIsIsError(true);
    }
    setIsLoading(false);
  }

  async function SaveTweetHandler(newTweet) {
    setTweetList([newTweet, ...tweetList]);
    try {
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          method: "POST",
          body: {
            content: "hi",
            userName: "fwf",
            date: "2022-12-06T13:16:37.736Z",
            id: "rQ2LVFz6YL4gQA24hc7j",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Couldn't post your tweet");
      }
    } catch (error) {
      serError(error.message);
      setIsIsError(true);
    }
    setIsLoading(false);
  }
  //
  return (
    <div className="App">
      <CreateTweet
        userName={userName}
        onSave={SaveTweetHandler}
        teetServwrURL={teetServwrURL}
        isError={isError}
      />
      {!isLoading && <TweetsList items={tweetList} />}
      {isLoading && <div className="messages_to_user">Loading...</div>}
      {!isLoading && error && <div className="messages_to_user">{error}</div>}
    </div>
  );
}

export default Home;
