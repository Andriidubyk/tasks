import React from "react";
import GoogleButton from "react-google-button";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import Home from "../Home";
import styles from "./Authentication.module.scss";
import SignIn from "../../assets/img/auth.jpeg";

const Authentication = () => {
  const [value, setValue] = React.useState("");
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  React.useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div>
      {value ? (
        <Home />
      ) : (
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>Please, sign in</h2>
            <button>
              <GoogleButton onClick={signInWithGoogle} />
            </button>
            <img src={SignIn} alt="Photo" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Authentication;
