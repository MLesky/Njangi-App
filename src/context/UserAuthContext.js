import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";

// auth().settings.appVerificationDisabledForTesting = true;

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
  
    return signInWithPopup(auth, googleAuthProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Google sign-in successful:", user);
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  }
  

  function setUpRecaptcha(fullPhoneNumber) {
    console.log("Setting up reCAPTCHA for phone verification...");
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: 'normal'
      },
      auth
    );
  
    console.log("reCAPTCHA verifier created. Rendering...");
  
    return recaptchaVerifier.render().then(() => {
      console.log("reCAPTCHA rendered. Starting phone verification...");
  
      const phoneAuthProvider = new PhoneAuthProvider(auth);
      return signInWithPhoneNumber(phoneAuthProvider, fullPhoneNumber, recaptchaVerifier)
        .then((confirmationResult) => {
          console.log("Phone verification initiated:", confirmationResult);
          return confirmationResult;
        })
        .catch((error) => {
          console.error("Phone verification error:", error);
          throw error;
        });
    });
  }
  
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        setUpRecaptcha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
