import React, { useEffect, useState, useReducer } from "react";
import { projectFirestore, timeStamp } from "../firebase/config";

let initialState = {
  document: null,
  isLoading: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return { isLoading: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isLoading: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "ERROR":
      return {
        isLoading: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  const ref = projectFirestore.collection(collection);

  const dispatchIfNotCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  const addDocument = async (doc) => {
    dispatch({ type: "IS_LOADING" });

    try {
      const addedDocument = await ref.add({ ...doc });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatch({ type: "ERROR", payload: err.message });
    }
  };

  return { addDocument, response };
};
