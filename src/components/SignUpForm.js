import React from "react";
import css from "./SignUpForm.module.css";
import getFirebase from "../firebase";
import useInput from "../useInput";

function SignUpForm() {
  const firebaseInstance = getFirebase();
  const email = useInput("");
  const password = useInput("");

  async function signUp(event) {
    console.log(`The event payload for fn'signUp: ${event}`)
    event.preventDefault();
    try {
      if (firebaseInstance) {
        const user = await firebaseInstance.auth().createUserWithEmailAndPassword(email.value, password.value);
        console.log("user", user);
        alert(`Welcome ${email.value}!`);
      }
    } catch (error) {
      console.log("error", error);
      alert(error.message);
    }
  }

  return (
    <form className={css.formWrapper} onSubmit={signUp}>
      <h1 className={css.title}>No Account? Join below!</h1>
      <input className={css.formInput} placeholder="Email" {...email} />
      <input className={css.formInput}  placeholder="Password" type="password" {...password} />
      <button className={css.formButton} type="submit">Sign up</button>
    </form>
  );
};

export default SignUpForm;