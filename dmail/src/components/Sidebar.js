import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button startIcon={<AddIcon />} className="sidebarCompose">
        Compose
      </Button>

      {/* <SidebarOption Icon={<InboxIcon />} title="Inbox" number={54} /> */}
    </div>
  );
}

export default Sidebar;
