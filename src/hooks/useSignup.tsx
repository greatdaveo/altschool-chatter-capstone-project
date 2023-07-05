import { useState } from "react";
import useAuthContext from "../hooks/useAuthContext";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function useSignup() {
  const [error, setError] = useState<null | string>(null);
  const { dispatch } = useAuthContext();

  const signup = (email: string, password: string) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, signup };
}
