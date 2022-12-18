import React, { useEffect, useState } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSingup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();
  const [isCancelled, setIsCancelled] = useState(false);

  const singup = async (email, password, displayName, picture) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("could not complete singup");
      }

      const uploadPath = "profilePictures/${res.user.uid}/${picture.name}";
      const img = await projectStorage.ref(uploadPath).put(picture);
      const imgURL = await img.ref.getDownloadURL();

      await res.user.updateProfile({ displayName, photoURL: imgURL });

      await projectFirestore
        .collection("users")
        .doc(res.user.uid)
        .set({
          displayName,
          photoURL: imgURL,
        });

      dispatch({ type: "LOG_IN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);
  return { singup, error, isPending };
};
