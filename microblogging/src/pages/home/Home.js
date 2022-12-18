import React, { useState, useEffect, useContext } from "react";
import { createTweetContext } from "../../context/CreatTweetContext";
import CreateTweet from "../../components/createTweetComponents/CreateTweet";
import TweetsList from "../../components/tweetsListComponents/tweetsList";
import { projectFirestore } from "../../firebase/config";

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

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsIsError] = useState(false);

  useEffect(() => {
    projectFirestore.collection("tweets").onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setError("Where are the tweets??");
          setIsLoading(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          ChangeList(results);
          setIsLoading(false);
        }
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (isSaved) SaveTweetHandler();
  }, [isSaved]);

  async function SaveTweetHandler() {
    setIsIsError(true);

    try {
      ChangeList([newTweet, ...tweetList]);
      await projectFirestore.collection("tweets").add(newTweet);
    } catch (error) {
      setError(error.message);
      setIsIsError(true);
    }
    setIsLoading(false);
    ChangeSaveState(false);
  }
  //
  return (
    <div className="App">
      <div className="first"></div>
      <CreateTweet isError={isError} />
      {!isLoading && <TweetsList />}
      {isLoading && <div className="messages_to_user">Loading...</div>}
      {!isLoading && error && <div className="messages_to_user">{error}</div>}
    </div>
  );
}

export default Home;
