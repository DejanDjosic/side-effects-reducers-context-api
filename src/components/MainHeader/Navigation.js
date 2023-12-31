import React,{useContext} from "react";

import classes from "./Navigation.module.css";
import Context from "../UI/store/Context";

const Navigation = () => {
  const ctx =useContext(Context);
  return (
    
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={ctx.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }
  


export default Navigation;
