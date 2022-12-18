import React, { useState, useEffect } from "react";
import "./CreateTweet.css";
import { useFirestore } from "../../../hooks/useFirestore";

function CreateTweet({ isError, uid }) {
  const { addDocument, response } = useFirestore("tweets");

  const [tweet, setTeeet] = useState();
  const [isInputLong, setIsInputLong] = useState(false);

  function onChangeHandler(event) {
    setIsInputLong(false);
    setTeeet(event.target.value);
    let inputLength = event.target.value.length;
    if (inputLength > 140) {
      setIsInputLong(true);
    } else setIsInputLong(false);
  }

  function onClickHandler() {
    const newTweet = {
      content: tweet,
      uid: uid,
      date: new Date().toISOString(),
    };
    addDocument(newTweet);
  }

  useEffect(() => {
    if (response.success) {
      setTeeet("");
    }
  }, [response.success]);

  return (
    <div className="create_tweet_container">
      <textarea
        placeholder="What you have in mind..."
        onChange={onChangeHandler}
        value={tweet}
      />
      {isInputLong && (
        <div className="long_input_message">
          The tweet can't contain more then 140 chars.
        </div>
      )}
      <button
        type="submit"
        onClick={onClickHandler}
        disabled={isInputLong || isError}
      >
        Tweet
      </button>
    </div>
  );
}
export default CreateTweet;
