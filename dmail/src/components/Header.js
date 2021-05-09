import React from "react";
import "./Header.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
function Header() {
  return (
    <div className="header">
      <div className="headerLeft">
        <IconButton>
          <MailOutlineIcon />
        </IconButton>
        <h1 className="title">Dmail</h1>
      </div>

      <div className="headerMiddle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
      </div>

      <div className="headerRight">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
