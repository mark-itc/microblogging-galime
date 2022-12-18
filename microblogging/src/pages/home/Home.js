import React from "react";
import CreateTweet from "./createTweetComponents/CreateTweet";
import TweetsList from "./tweetsListComponents/tweetsList";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";

function Home(props) {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("tweets");
  console.log("documents from home", documents);

  return (
    <div>
      <CreateTweet isError={error} uid={user.uid} />
      {documents && <TweetsList uid={user.uid} tweetList={documents} />}
      {error && <p style={"color:white"}>{error}</p>}
    </div>
  );
}

export default Home;
