import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import NearMeIcon from "@material-ui/icons/NearMe";
import SidebarOption from "./SidebarOption";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  openSendMessage,
  selectCurrentMailType,
  selectInbox,
  selectStarred,
  selectTrash,
  setShowMailType,
  setStarred,
} from "../features/mailSlice";
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const selectedMailType = useSelector(selectCurrentMailType);
  const inbox = useSelector(selectInbox);
  const trash = useSelector(selectTrash);
  const starred = useSelector(selectStarred);
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
          number={inbox.length}
          selected={selectedMailType === "inbox" ? true : false}
        />
      </div>
      <div onClick={() => dispatch(setShowMailType("starred"))}>
        <SidebarOption
          Icon={StarIcon}
          title="Starred"
          number={starred.length}
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
      <div onClick={() => dispatch(setShowMailType("trash"))}>
        <SidebarOption
          Icon={DeleteIcon}
          title="Trash"
          number={trash.length}
          selected={selectedMailType === "trash" ? true : false}
        />
      </div>
    </div>
  );
}

export default Sidebar;
