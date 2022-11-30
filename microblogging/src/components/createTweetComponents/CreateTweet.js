import React, { useState } from "react";
import "./CreateTweet.css";

function CreateTweet(props) {
  const [teeet, setTeeet] = useState();
  const [isInputLong, setIsInputLong] = useState(false);

  function onChangeHandler(event) {
    setIsInputLong(false);
    setTeeet(event.target.value);

    let inputLength = event.target.value.length;
    if (inputLength > 140) {
      setIsInputLong(true);
    }
  }

  function onClickHandler() {
    const newTweet = {
      id: Math.random().toString(),
      userName: "Not creative enough",
      date: new Date().toString(),
      content: teeet,
    };

    props.onSave(newTweet);
  }

  return (
    <div className="create_tweet_container">
      <textarea
        placeholder="What you have in mind..."
        onChange={onChangeHandler}
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
