import React, { useState, useEffect } from "react";

import "./App.css";
import CreateTweet from "./components/createTweetComponents/CreateTweet";
import TweetsList from "./components/tweetsListComponents/tweetsList";

const DUMMY_LIST = [
  {
    id: "a",
    userName: "Yonatan",
    date: new Date(),
    userTweet:
      "On the technical side, Microsoft says the Xbox Series X can handle 4Kvisuals at 60 frames per second, and potentially up to 120FPS.",
  },
  {
    id: "b",
    userName: "Yonatan",
    date: new Date(),
    userTweet: "hello there",
  },
  {
    id: "c",
    userName: "Yonatan",
    date: new Date(),
    userTweet: "another tweet text",
  },
];

function App() {
  console.log("DUMMY_LIST", DUMMY_LIST);

  const [tweetList, setTweetList] = useState(DUMMY_LIST);
  console.log("tweetList111", tweetList);

  function SaveTweetHandler(newTweet) {
    setTweetList([newTweet, ...tweetList]);
    localStorage.setItem("tweetList", JSON.stringify(tweetList));
    console.log("tweetList3333", tweetList);
  }

  useEffect(() => {
    setTweetList(JSON.parse(localStorage.getItem("tweetList")));
    console.log("tweetList2222", tweetList);
  }, []);
  console.log("tweetList44444", tweetList);

  return (
    <div className="App">
      <header></header>
      <CreateTweet onSave={SaveTweetHandler} />
      <TweetsList items={tweetList} />
    </div>
  );
}

export default App;
