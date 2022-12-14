import React, { createContext, useReducer } from "react";

export const createTweetContext = createContext();

function contexReducer(state, action) {
  switch (action.type) {
    case "CHANGE_TWEET_STATE":
      return { ...state, newTweet: action.payload };
    case "CHANGE_LIST":
      return { ...state, tweetList: action.payload };
    case "CHANGE_SAVE_STATE":
      return { ...state, isSaved: action.payload };
    case "CHANGE_USER":
      return { ...state, userName: action.payload };

    default:
      return state;
  }
}
export const CreateTweetContextPropvider = ({ children }) => {
  const [state, dispatch] = useReducer(contexReducer, {
    newTweet: {
      content: "tweet",
      userName: localStorage.getItem("userName"),
      date: new Date().toISOString(),
      id: Math.random().toString(),
      key: Math.random().toString(),
    },
    tweetList: " ",
    isSaved: false,
    userName: localStorage.getItem("userName"),
  });

  const ChangeTweetState = (newTweet) => {
    dispatch({ type: "CHANGE_TWEET_STATE", payload: newTweet });
  };

  const ChangeList = (tweetList) => {
    dispatch({ type: "CHANGE_LIST", payload: tweetList });
  };

  const ChangeSaveState = (isSaved) => {
    dispatch({ type: "CHANGE_SAVE_STATE", payload: isSaved });
  };

  const ChangeUserName = (userName) => {
    dispatch({ type: "CHANGE_USER", payload: userName });
  };

  return (
    <createTweetContext.Provider
      value={{
        ...state,
        ChangeTweetState,
        ChangeList,
        ChangeSaveState,
        ChangeUserName,
      }}
    >
      {children}
    </createTweetContext.Provider>
  );
};
