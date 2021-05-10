import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import SidebarOption from "./SidebarOption";
import {
  openSendMessage,
  selectCurrentMailType,
  setShowMailType,
} from "../features/mailSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const selectedMailType = useSelector(selectCurrentMailType);
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        startIcon={<AddIcon />}
        className="sidebarCompose"
      >
        Compose
      </Button>
      <div onClick={() => dispatch(setShowMailType("inbox"))}>
        <SidebarOption
          Icon={InboxIcon}
          title="Inbox"
          number={54}
          selected={selectedMailType === "inbox" ? true : false}
        />
      </div>
      <div onClick={() => dispatch(setShowMailType("starred"))}>
        <SidebarOption
          Icon={StarIcon}
          title="Starred"
          number={54}
          selected={selectedMailType === "starred" ? true : false}
        />
      </div>
      <div onClick={() => dispatch(setShowMailType("sent"))}>
        <SidebarOption
          Icon={NearMeIcon}
          title="Sent"
          number={54}
          selected={selectedMailType === "sent" ? true : false}
        />
      </div>
      <div onClick={() => dispatch(setShowMailType("drafts"))}>
        <SidebarOption
          Icon={NoteIcon}
          title="Drafts"
          number={54}
          selected={selectedMailType === "drafts" ? true : false}
        />
      </div>
    </div>
  );
}

export default Sidebar;
