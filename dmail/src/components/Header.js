import React, { useState } from "react";
import "./Header.css";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  Avatar,
  IconButton,
  MenuList,
  MenuItem,
  Menu,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../../src/features/mailSlice";
function Header() {
  const [anchorElem, setAnchorElem] = useState(null);
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorElem(event.currentTarget);
  };

  const handleSignOut = () => {
    dispatch(signOut());
  };

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
        <IconButton
          size="small"
          aria-controls="profileMenu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Avatar />
        </IconButton>
        <Menu
          id="profileMenu"
          anchorEl={anchorElem}
          keepMounted
          open={Boolean(anchorElem)}
          onClose={() => setAnchorElem(null)}
        >
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
