import React from "react";
import { Link } from 'react-router-dom';
import css from './NavBar.module.css';

function NavBarButton(props) {
    if (props.badgeNumber) {
        return (
            <div>
              <Link to={props.url}>
                <button>{props.title}<span className={css.badge}>{props.badgeNumber}</span></button>
              </Link>
            </div>
          );
    }
    return (
    <div>
      <Link to={props.url}>
        <button>{props.title}</button>
      </Link>
    </div>
  );
};

export default NavBarButton;