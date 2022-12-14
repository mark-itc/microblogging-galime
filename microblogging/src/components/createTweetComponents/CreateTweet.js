import React, { useState, useContext } from "react";
import { createTweetContext } from "../../context/CreatTweetContext";
import "./CreateTweet.css";

function CreateTweet(props) {
  const { ChangeTweetState, ChangeSaveState, userName } = useContext(
    createTweetContext
  );

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
      userName: userName,
      date: new Date().toISOString(),
      id: Math.random().toString(),
      key: Math.random().toString(),
    };
    ChangeTweetState(newTweet);
    ChangeSaveState(true);
    setTeeet("");
  }

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
        disabled={isInputLong || props.isError}
      >
        Tweet
      </button>
    </div>
  );
}
export default CreateTweet;
