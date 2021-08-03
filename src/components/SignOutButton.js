import React from "react";
import styled from "styled-components";
import getFirebase from "../firebase";
import css from "./Activity.module.css";


const SignOutButton = () => {
  const firebaseInstance = getFirebase();

  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        alert("Successfully signed out!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div  className={css.content}>
      <Button onClick={() => signOut()}>Signout</Button>
    </div>
  );
};

export default SignOutButton;

const Button = styled.button`
background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
margin: 10px;
padding: 8px 40px;
text-align: center;
text-transform: uppercase;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
transition: 0.5s;
background-size: 200% auto;
box-shadow: 0 0 20px #eee;
border-radius: 21px;
display: inline;
:hover, :active {
     background-position: right center; /* change the direction of the change here */
     color: #fff;
     text-decoration: none;
     background-color: #ffe2ed;
}
`;