import React from "react";
import styled from "styled-components";
import getFirebase from "../firebase";
import { Link } from 'react-router-dom';
import css from './NavBar.module.css';


function NavBarButton(props) {
    if (props.badgeNumber) {
        return (
            <div>
              <Link to={props.url}>
                <Button>{props.title}<span className={css.badge}>{props.badgeNumber}</span></Button>
              </Link>
            </div>
          );
    }
    return (
    <div>
      <Link to={props.url}>
        <Button>{props.title}</Button>
      </Link>
    </div>
  );
};

export default NavBarButton;

const Button = styled.button`
background-image: linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%);
margin: 10px;
padding: 8px 40px;
text-align: center;
color:lightgrey;
text-transform: uppercase;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
transition: 0.2s;
background-size: 200% auto;
box-shadow: 0 0 2px #eee;
border-radius: 10px;
display: inline;
:hover, :active {
     background-position: bottom center; /* change the direction of the change here */
     color: #fff;
     text-decoration: none;
     background-color: #ffe2ed;
}
`;