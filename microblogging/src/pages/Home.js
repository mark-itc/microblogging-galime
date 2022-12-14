import React, { useState, useEffect, useContext } from "react";
import { createTweetContext } from "../context/CreatTweetContext"
import CreateTweet from "../components/createTweetComponents/CreateTweet";
import TweetsList from "../components/tweetsListComponents/tweetsList";

function Home() {
  const teetServwrURL =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  const {
    newTweet,
    tweetList,
    ChangeList,
    isSaved,
    ChangeSaveState,
  } = useContext(createTweetContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, serError] = useState(null);
  const [isError, setIsIsError] = useState(false);

  useEffect(() => {
    fetchTweets();
  }, []);

  useEffect(() => {
    if (isSaved) SaveTweetHandler();
  }, [isSaved]);

  async function fetchTweets() {
    setIsLoading(true);
    serError(null);

    try {
      const response = await fetch(teetServwrURL);

      if (!response.ok) {
        throw new Error("Somthing went wrong");
      }
      const data = await response.json();
      ChangeList(data.tweets);
    } catch (error) {
      serError(error.message);
      setIsIsError(true);
    }
    setIsLoading(false);
  }

  async function SaveTweetHandler() {
    ChangeList([newTweet, ...tweetList]);
    try {
      const response = await fetch(
        "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(newTweet),
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
    ChangeSaveState(false);
  }
  //
  return (
    <div className="App">
      <CreateTweet isError={isError} />
      {!isLoading && <TweetsList />}
      {isLoading && <div className="messages_to_user">Loading...</div>}
      {!isLoading && error && <div className="messages_to_user">{error}</div>}
    </div>
  );
}

export default Home;
