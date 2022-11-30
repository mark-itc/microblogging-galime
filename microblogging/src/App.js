import React, { useState, useEffect } from "react";

import "./App.css";
import CreateTweet from "./components/createTweetComponents/CreateTweet";
import TweetsList from "./components/tweetsListComponents/tweetsList";
import Navbar from "./components/navbarComponents/Navbar";

function App() {
  const teetServwrURL =
    "https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";

  const [tweetList, setTweetList] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, serError] = useState(null);
  const [isError, setIsIsError] = useState(false);
  const [userName, setUserName] = useState("Gali");

  useEffect(() => {
    fetchTweets();
    onUserNameChange(userName);
  }, []);

  function onUserNameChange(newUserName) {
    setUserName(newUserName);
  }
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
        "https://microblogging-project-999c1-default-rtdb.firebaseio.com/tweetList.json",
        {
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
  }

  return (
    <div className="App">
      <Navbar userName={tweetList.userName} onNameChange={onUserNameChange} />
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

export default App;
