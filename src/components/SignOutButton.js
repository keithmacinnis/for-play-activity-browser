import React from "react";
import getFirebase from "../firebase";

function SignOutButton() {
  const firebaseInstance = getFirebase();

  async function signOut () {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div >
      <button onClick={() => signOut()}>Signout</button>
    </div>
  );
}

export default SignOutButton;