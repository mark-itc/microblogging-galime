import React, { useState, useEffect } from "react";
import "./CreateTweet.css";

function CreateTweet(props) {
  const [tweet, setTeeet] = useState();
  const [isInputLong, setIsInputLong] = useState(false);
  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  });

  function onChangeHandler(event) {
    setIsInputLong(false);
    setTeeet(event.target.value);

    let inputLength = event.target.value.length;
    if (inputLength > 140) {
      setIsInputLong(true);
    }
  }

  function onClickHandler() {
    setUserName(localStorage.getItem("userName"));
    const newTweet = {
      id: Math.random().toString(),
      userName: userName,
      date: new Date().toString(),
      content: tweet,
    };
    console.log("newTweet", newTweet);

    props.onSave(newTweet);
  }
  console.log("props from create", props);

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
